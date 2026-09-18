#!/usr/bin/env python3
"""
scripts/update_publications.py
Data Science Lab (DSLab) - URJC
Automated publication scraper and enrichment pipeline.
Fetches publications from OpenAlex and ORCID for all active lab members,
deduplicates across co-authors, enriches with year-specific SCImago (SJR) quartiles,
preserves only genuine source keywords, merges manual entries, and saves to src/data/publications/publications.json.
"""

import argparse
import datetime
import json
import os
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request

USER_AGENT = "URJC-DSLab-Publications-Bot/1.0 (mailto:gr_inv.dslab@urjc.es)"
DEFAULT_START_YEAR = 2016
LOOKBACK_DAYS = 180  # Default ~6 months for incremental checks


def log(msg):
    try:
        print(f"[{datetime.datetime.now().strftime('%H:%M:%S')}] {msg}", flush=True)
    except Exception:
        safe_msg = str(msg).encode("ascii", "replace").decode("ascii")
        print(f"[{datetime.datetime.now().strftime('%H:%M:%S')}] {safe_msg}", flush=True)


def http_get_json(url, timeout=25):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "application/json"
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        return None


def normalize_doi(doi):
    if not doi:
        return None
    doi = str(doi).strip().lower()
    doi = re.sub(r"^https?://(dx\.)?doi\.org/", "", doi)
    doi = re.sub(r"^doi:", "", doi)
    doi = doi.rstrip(".)/,; ")
    return doi if doi else None


def normalize_title(title):
    if not title:
        return ""
    t = str(title).lower()
    t = re.sub(r"[^a-z0-9]", "", t)
    return t


def clean_issn(issn_str):
    if not issn_str:
        return []
    return re.findall(r"[0-9]{4}[0-9X]{4}", issn_str.replace("-", "").upper())


def extract_active_members(team_json_path="src/data/team.json"):
    """Extract all active faculty, researchers, and affiliated members from team JSON."""
    if not os.path.exists(team_json_path):
        log(f"Warning: {team_json_path} not found.")
        return []

    with open(team_json_path, "r", encoding="utf-8") as f:
        try:
            team_data = json.load(f)
        except Exception as e:
            log(f"Error loading {team_json_path}: {e}")
            return []

    members = []
    # team.json can be a dictionary categorized by role or a flat list
    raw_list = []
    if isinstance(team_data, dict):
        for category in ["faculty", "researchers", "affiliated"]:
            raw_list.extend(team_data.get(category, []))
    elif isinstance(team_data, list):
        raw_list = team_data

    for member in raw_list:
        if not isinstance(member, dict):
            continue
        if member.get("category", "").lower() == "former":
            continue

        name = member.get("name", "").strip()
        if not name:
            continue

        orcid_url = member.get("orcid", "")
        orcid_match = re.search(r"orcid\.org/([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0-9X])", orcid_url) if orcid_url else None
        orcid = orcid_match.group(1) if orcid_match else None

        scholar_url = member.get("scholar", "")
        scholar_match = re.search(r"scholar\.google\.[^/]+/citations\?user=([a-zA-Z0-9_-]+)", scholar_url) if scholar_url else None
        scholar = scholar_match.group(1) if scholar_match else None

        members.append({
            "name": name,
            "orcid": orcid,
            "scholar": scholar
        })

    return members


def load_journal_rankings(path="src/data/publications/journal_rankings.json"):
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            log(f"Error loading {path}: {e}")
    return {}


def load_manual_publications(path="src/data/publications/publications_manual.json"):
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            log(f"Error loading {path}: {e}")
    return []


def load_existing_publications(path="src/data/publications/publications.json"):
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, list):
                    return data
        except Exception as e:
            log(f"Error loading {path}: {e}")
    return []


def find_ranking_for_journal(journal_name, issn, year, rankings):
    """
    Finds the journal entry and extracts the exact quartile for the publication year.
    Ties the quartile directly to the publication year.
    """
    if not journal_name and not issn:
        return None, None

    clean_issns = clean_issn(issn)
    target_entry = None

    # 1. Try matching by ISSN
    if clean_issns and rankings:
        for venue_name, entry in rankings.items():
            entry_issns = entry.get("issns", [])
            if any(i in entry_issns for i in clean_issns):
                target_entry = entry
                break

    # 2. Try matching by Title
    if not target_entry and journal_name and rankings:
        if journal_name in rankings:
            target_entry = rankings[journal_name]
        else:
            norm_j = normalize_title(journal_name)
            for venue_name, entry in rankings.items():
                if normalize_title(venue_name) == norm_j:
                    target_entry = entry
                    break

    if not target_entry:
        return None, None

    work_type = target_entry.get("type", "journal")
    quartiles = target_entry.get("quartiles", {})

    quartile = None
    if quartiles and year:
        year_str = str(year)
        if year_str in quartiles:
            quartile = quartiles[year_str]
        else:
            # Fallback to the closest available year (e.g. latest available 2024 for 2025/2026 papers)
            avail_years = sorted([int(y) for y in quartiles.keys()])
            if avail_years:
                if year > avail_years[-1]:
                    quartile = quartiles[str(avail_years[-1])]
                elif year < avail_years[0]:
                    quartile = quartiles[str(avail_years[0])]

    return quartile, work_type


def determine_work_type(raw_work_type, source_title, source_type, ranked_type):
    if ranked_type:
        return ranked_type

    s_title = (source_title or "").lower()
    w_type = (raw_work_type or "").lower()

    if any(k in s_title for k in ["proceedings", "conference", "symposium", "workshop", "lecture notes in computer science", "advances in intelligent systems"]):
        return "conference"
    if any(k in s_title for k in ["arxiv", "zenodo", "ssrn", "figshare", "research square"]):
        return "preprint"
    if w_type in ["conference-paper", "proceedings-article", "conference-abstract"]:
        return "conference"
    if w_type in ["book-chapter", "chapter"]:
        return "chapter"
    if w_type in ["book"]:
        return "book"
    if w_type in ["dissertation", "thesis"]:
        return "thesis"
    if w_type in ["preprint"]:
        return "preprint"
    if w_type in ["article", "journal-article", "review", "editorial"]:
        return "journal"
    if source_type == "journal":
        return "journal"
    return "other"


def fetch_openalex_works(orcid, from_date_str):
    url = f"https://api.openalex.org/works?filter=author.orcid:{orcid},from_publication_date:{from_date_str}&per-page=200"
    data = http_get_json(url)
    if not data:
        return []
    return data.get("results", [])


def fetch_orcid_works(orcid, min_year):
    url = f"https://pub.orcid.org/v3.0/{orcid}/works"
    data = http_get_json(url)
    if not data:
        return []
    groups = data.get("group", [])
    results = []
    for g in groups:
        for summary in g.get("work-summary", []):
            pub_date = summary.get("publication-date") or {}
            year_val = pub_date.get("year", {}).get("value") if pub_date.get("year") else None
            try:
                year = int(year_val) if year_val else None
            except:
                year = None

            if year is not None and year < min_year:
                continue

            # Extract DOI
            ext_ids = summary.get("external-ids", {}).get("external-id", [])
            doi = None
            for ext in ext_ids:
                if ext.get("external-id-type", "").lower() == "doi":
                    doi = normalize_doi(ext.get("external-id-value", ""))
                    break

            title = summary.get("title", {}).get("title", {}).get("value")
            work_type = summary.get("type")
            journal = summary.get("journal-title", {}).get("value") if summary.get("journal-title") else None

            results.append({
                "year": year,
                "doi": doi,
                "title": title,
                "type": work_type,
                "journal": journal
            })
    return results


def strip_accents(s):
    if not s:
        return ""
    return "".join(c for c in unicodedata.normalize("NFD", str(s)) if unicodedata.category(c) != "Mn").lower()


def is_dslab_member(author_name, active_members):
    """Check if an author string matches an active member with accent-insensitive and surname handling."""
    if not author_name:
        return False
    a_clean = strip_accents(author_name).replace("‐", "-")
    
    for m in active_members:
        m_name = m["name"]
        m_clean = strip_accents(m_name)
        
        # Exact full name
        if m_clean in a_clean:
            return m_name
            
        # Strict members that must not match generic first surname alone:
        if m_name == "Antonio Alonso Ayuso" and "ayuso" not in a_clean:
            continue
        if m_name == "Isaac Martín de Diego" and "diego" not in a_clean:
            continue
            
        tokens = [t for t in m_clean.split() if len(t) > 2]
        
        # Compound first names: e.g. "angel luis", "juan jose", "francisco javier", "maria jesus", "maria teresa"
        if len(tokens) >= 3:
            surnames = tokens[1:]
            if tokens[0] in ["angel", "juan", "francisco", "maria"] and len(tokens) >= 4:
                surnames = tokens[2:]
                
            # Both surnames / hyphenated
            if len(surnames) >= 2 and (f"{surnames[0]}-{surnames[1]}" in a_clean or f"{surnames[0]} {surnames[1]}" in a_clean):
                return m_name
            if all(s in a_clean for s in surnames):
                return m_name
                
            # First initial + primary family surname (e.g. "A. Udias", "C. Alfaro", "L. Escudero")
            first_initial = tokens[0][0]
            primary_surname = surnames[0]
            if primary_surname in a_clean and (tokens[0] in a_clean or re.search(r"\b" + first_initial + r"[\.\s]", a_clean)):
                return m_name
        elif len(tokens) == 2:
            if all(t in a_clean for t in tokens):
                return m_name
            first_initial = tokens[0][0]
            if tokens[1] in a_clean and (tokens[0] in a_clean or re.search(r"\b" + first_initial + r"[\.\s]", a_clean)):
                return m_name
                
    return False


def is_valid_work_for_member(work, member_name, member_orcid, member_orcid_dois, member_orcid_titles, active_members):
    """
    Validates whether an OpenAlex work actually belongs to the specified DSLab member,
    preventing OpenAlex author-disambiguation errors (e.g. Antonio Alonso @ LinkedIn,
    or Isaac Martin @ University of Toronto, or M. Lena @ Indonesia).
    """
    doi = normalize_doi(work.get("doi"))
    norm_t = normalize_title(work.get("title"))

    # 1. Authoritative ground truth: verified in author's personal ORCID record
    if (doi and doi in member_orcid_dois) or (norm_t and norm_t in member_orcid_titles):
        return True

    authorships = work.get("authorships", [])

    # 2. Lab co-authorship: if another active DSLab member is a confirmed co-author
    for a in authorships:
        a_name = a.get("author", {}).get("display_name") or a.get("raw_author_name") or ""
        for other_m in active_members:
            if other_m["name"] != member_name and is_dslab_member(a_name, [other_m]):
                return True

    # 3. Inspect the specific authorship entry for this member in OpenAlex
    member_auth = None
    for a in authorships:
        auth = a.get("author", {})
        if auth and auth.get("orcid") == f"https://orcid.org/{member_orcid}":
            member_auth = a
            break

    if not member_auth:
        return False

    raw_name = (member_auth.get("raw_author_name") or "").strip()
    affils = member_auth.get("raw_affiliation_strings") or []
    affil_str = " ".join(affils).lower()

    # Disallowed corporate or foreign entities with no Spanish / URJC ties
    disallowed_institutions = [
        "linkedin", "sick children", "toronto", "hospital for sick children",
        "universitas negeri padang", "universidad privada del norte", "imperial college london",
        "waset", "world academy of science"
    ]
    has_local_affil = any(
        l in affil_str
        for l in ["rey juan carlos", "urjc", "madrid", "spain", "españa", "telefónica", "csic", "carlos iii", "complutense"]
    )
    if any(d in affil_str for d in disallowed_institutions) and not has_local_affil:
        return False

    source_title = ((work.get("primary_location") or {}).get("source") or {}).get("display_name", "").lower()
    if any(d in source_title for d in ["waset", "world academy of science"]):
        return False

    # Surname validation in raw_name
    raw_clean = strip_accents(raw_name).replace("‐", "-")

    if member_name == "Antonio Alonso Ayuso" and "ayuso" not in raw_clean and not has_local_affil:
        return False
    if member_name == "Isaac Martín de Diego" and "diego" not in raw_clean and not has_local_affil:
        return False
    if member_name == "María Teresa González de Lena Alonso" and "lena" not in raw_clean and "gonzalez" not in raw_clean and not has_local_affil:
        return False

    return True


def build_publications_pipeline(is_full=False, lookback_days=LOOKBACK_DAYS, start_year=DEFAULT_START_YEAR):
    active_members = extract_active_members()
    log(f"Extracted {len(active_members)} active members from team page.")

    journal_rankings = load_journal_rankings()
    manual_pubs = load_manual_publications()
    existing_pubs = load_existing_publications()

    today = datetime.date.today()
    if is_full or not existing_pubs:
        from_date_str = f"{start_year}-01-01"
        min_year = start_year
        log(f"Running FULL sync starting from {from_date_str}")
    else:
        start_date = today - datetime.timedelta(days=lookback_days)
        from_date_str = start_date.strftime("%Y-%m-%d")
        min_year = start_date.year
        log(f"Running INCREMENTAL sync looking back {lookback_days} days (from {from_date_str})")

    # Index existing publications by DOI and normalized title (only for incremental runs)
    pubs_by_doi = {}
    pubs_by_title = {}

    if not is_full:
        for p in existing_pubs:
            doi = normalize_doi(p.get("doi"))
            t_norm = normalize_title(p.get("title"))
            if doi:
                pubs_by_doi[doi] = p
            elif t_norm:
                pubs_by_title[t_norm] = p

    # Query APIs for active members
    for idx, m in enumerate(active_members):
        name = m["name"]
        orcid = m["orcid"]
        if not orcid:
            log(f"[{idx+1}/{len(active_members)}] Skipping {name} (no ORCID)")
            continue

        log(f"[{idx+1}/{len(active_members)}] Fetching for {name} ({orcid})...")

        # 1. ORCID (Authoritative ground truth)
        orcid_works = fetch_orcid_works(orcid, min_year)
        log(f"   -> ORCID returned {len(orcid_works)} works")
        member_orcid_dois = {ow["doi"] for ow in orcid_works if ow.get("doi")}
        member_orcid_titles = {normalize_title(ow["title"]) for ow in orcid_works if ow.get("title")}

        # 2. OpenAlex
        oa_works = fetch_openalex_works(orcid, from_date_str)
        log(f"   -> OpenAlex returned {len(oa_works)} works")
        valid_oa_count = 0
        for w in oa_works:
            doi = normalize_doi(w.get("doi"))
            title = w.get("title")
            if not title:
                continue
            norm_t = normalize_title(title)
            year = w.get("publication_year")
            if year and year < start_year:
                continue

            # Validate author ownership
            if not is_valid_work_for_member(w, name, orcid, member_orcid_dois, member_orcid_titles, active_members):
                log(f"   [FILTERED] Discarded misattributed work for {name}: '{title[:55]}...' (DOI: {doi})")
                continue

            valid_oa_count += 1
            authors = [
                a.get("author", {}).get("display_name")
                for a in w.get("authorships", [])
                if a.get("author") and a.get("author", {}).get("display_name")
            ]

            source = w.get("primary_location", {}).get("source", {}) if w.get("primary_location") else {}
            journal = source.get("display_name") if source else None
            source_type = source.get("type") if source else None
            issn = source.get("issn_l") if source else None

            # Get year-specific quartile from SCImago rankings
            quartile, ranked_type = find_ranking_for_journal(journal, issn, year, journal_rankings)
            work_type = determine_work_type(w.get("type"), journal, source_type, ranked_type)

            # Extract clean, academic research topics from OpenAlex (CWTS Leiden topics)
            topics = []
            primary_topic = w.get("primary_topic")
            if primary_topic and isinstance(primary_topic, dict) and primary_topic.get("display_name"):
                topics.append(primary_topic["display_name"])
            for t in w.get("topics", []):
                t_name = t.get("display_name") if isinstance(t, dict) else None
                if t_name and t_name not in topics:
                    topics.append(t_name)
            keywords = topics[:4]

            landing_url = w.get("doi") or (
                w.get("primary_location", {}).get("landing_page_url") if w.get("primary_location") else None
            )
            pdf_url = w.get("open_access", {}).get("oa_url") or (
                w.get("primary_location", {}).get("pdf_url") if w.get("primary_location") else None
            )

            # Detect DSLab authors
            dslab_authors = [name]
            for a in authors:
                matched_member = is_dslab_member(a, active_members)
                if matched_member and matched_member not in dslab_authors:
                    dslab_authors.append(matched_member)

            item = {
                "title": title,
                "doi": doi,
                "year": year,
                "publication_date": w.get("publication_date") or (f"{year}-01-01" if year else None),
                "authors": authors,
                "journal": journal,
                "source_type": source_type,
                "work_type": work_type,
                "quartile": quartile,
                "issn": issn,
                "keywords": keywords,
                "landing_page_url": landing_url,
                "pdf_url": pdf_url,
                "is_oa": w.get("open_access", {}).get("is_oa", False),
                "cited_by_count": w.get("cited_by_count", 0),
                "dslab_authors": dslab_authors
            }

            # Deduplicate & Merge
            if doi:
                if doi in pubs_by_doi:
                    existing = pubs_by_doi[doi]
                    for da in dslab_authors:
                        if da not in existing.setdefault("dslab_authors", []):
                            existing["dslab_authors"].append(da)
                    if quartile and not existing.get("quartile"):
                        existing["quartile"] = quartile
                    if keywords and not existing.get("keywords"):
                        existing["keywords"] = keywords
                    if pdf_url and not existing.get("pdf_url"):
                        existing["pdf_url"] = pdf_url
                    existing["cited_by_count"] = max(existing.get("cited_by_count", 0), item["cited_by_count"])
                else:
                    pubs_by_doi[doi] = item
            elif norm_t:
                if norm_t in pubs_by_title:
                    existing = pubs_by_title[norm_t]
                    for da in dslab_authors:
                        if da not in existing.setdefault("dslab_authors", []):
                            existing["dslab_authors"].append(da)
                else:
                    pubs_by_title[norm_t] = item

        log(f"   -> Retained {valid_oa_count} validated OpenAlex works")

        # Process ORCID works to catch any publications missing in OpenAlex
        for ow in orcid_works:
            y = ow["year"]
            if y is not None and y < start_year:
                continue
            doi = ow["doi"]
            title = ow["title"]
            if not title:
                continue
            norm_t = normalize_title(title)

            # Check if already present
            if doi and doi in pubs_by_doi:
                if name not in pubs_by_doi[doi].setdefault("dslab_authors", []):
                    pubs_by_doi[doi]["dslab_authors"].append(name)
                continue
            if norm_t and norm_t in pubs_by_title:
                if name not in pubs_by_title[norm_t].setdefault("dslab_authors", []):
                    pubs_by_title[norm_t]["dslab_authors"].append(name)
                continue

            # New DOI or title found in ORCID
            quartile, ranked_type = find_ranking_for_journal(ow["journal"], None, y, journal_rankings)
            work_type = determine_work_type(ow["type"], ow["journal"], "journal", ranked_type)

            item = {
                "title": title,
                "doi": doi,
                "year": y,
                "publication_date": f"{y}-01-01" if y else None,
                "authors": [name],
                "journal": ow["journal"],
                "source_type": "journal" if ow["type"] == "journal-article" else ow["type"],
                "work_type": work_type,
                "quartile": quartile,
                "issn": None,
                "keywords": [],
                "landing_page_url": f"https://doi.org/{doi}" if doi else None,
                "pdf_url": None,
                "is_oa": False,
                "cited_by_count": 0,
                "dslab_authors": [name]
            }

            if doi:
                pubs_by_doi[doi] = item
            elif norm_t:
                pubs_by_title[norm_t] = item

        time.sleep(0.2)

    # 3. Merge Manual Publications
    log(f"Merging {len(manual_pubs)} manual publications...")
    for mp in manual_pubs:
        doi = normalize_doi(mp.get("doi"))
        norm_t = normalize_title(mp.get("title"))

        target = None
        if doi and doi in pubs_by_doi:
            target = pubs_by_doi[doi]
        elif norm_t and norm_t in pubs_by_title:
            target = pubs_by_title[norm_t]

        if target:
            for k, v in mp.items():
                if v is not None:
                    target[k] = v
        else:
            if doi:
                pubs_by_doi[doi] = mp
            elif norm_t:
                pubs_by_title[norm_t] = mp

    # Combine all works and ensure strict deduplication
    all_works = list(pubs_by_doi.values())
    seen_titles = {normalize_title(w.get("title")) for w in all_works if w.get("title")}

    for norm_t, w in pubs_by_title.items():
        if norm_t not in seen_titles:
            all_works.append(w)
            seen_titles.add(norm_t)

    # Clean, validate, and update year-specific quartiles for all works
    clean_works = []
    for w in all_works:
        if not w.get("title"):
            continue
        y = w.get("year")
        if not y or y < start_year:
            continue
        if not w.get("work_type"):
            w["work_type"] = "journal"

        # Re-verify year-specific quartile from SCImago rankings
        q_year, ranked_type = find_ranking_for_journal(w.get("journal"), w.get("issn"), y, journal_rankings)
        if q_year:
            w["quartile"] = q_year
        elif not w.get("quartile"):
            w["quartile"] = None

        if ranked_type and w.get("work_type") != "thesis":
            w["work_type"] = ranked_type

        # Ensure keywords are a clean list or omitted
        if not w.get("keywords") or not isinstance(w["keywords"], list):
            w["keywords"] = []

        clean_works.append(w)

    # Sort descending by year, then publication_date, then title
    clean_works.sort(
        key=lambda x: (
            x.get("year") or 0,
            x.get("publication_date") or "",
            x.get("title") or ""
        ),
        reverse=True
    )

    # Save to src/data/publications/publications.json
    out_dir = "src/data/publications"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "publications.json")

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(clean_works, f, indent=2, ensure_ascii=False)

    log(f"Successfully saved {len(clean_works)} publications to {out_path}!")

    # Summary Stats
    years = {}
    quartiles = {}
    types = {}
    for w in clean_works:
        y = w.get("year")
        years[y] = years.get(y, 0) + 1
        q = w.get("quartile") or "None"
        quartiles[q] = quartiles.get(q, 0) + 1
        wt = w.get("work_type") or "other"
        types[wt] = types.get(wt, 0) + 1

    log("Summary Statistics (Year-Specific SCImago Quartiles):")
    log(f"  Total Publications: {len(clean_works)}")
    log(f"  By Type: {types}")
    log(f"  By Quartile: {quartiles}")
    recent_years = sorted(years.keys(), reverse=True)[:5]
    log(f"  Recent Years: { {y: years[y] for y in recent_years} }")

    return clean_works


def main():
    parser = argparse.ArgumentParser(description="Update DSLab publications from OpenAlex and ORCID.")
    parser.add_argument(
        "--full",
        action="store_true",
        help="Run full historical sync from 2016 onwards instead of incremental"
    )
    parser.add_argument(
        "--days",
        type=int,
        default=LOOKBACK_DAYS,
        help=f"Lookback window in days for incremental sync (default: {LOOKBACK_DAYS})"
    )
    parser.add_argument(
        "--start-year",
        type=int,
        default=DEFAULT_START_YEAR,
        help=f"Minimum publication year (default: {DEFAULT_START_YEAR})"
    )
    args = parser.parse_args()

    build_publications_pipeline(
        is_full=args.full,
        lookback_days=args.days,
        start_year=args.start_year
    )


if __name__ == "__main__":
    main()
