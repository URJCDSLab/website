"use client";

import * as React from "react";
import { 
  Search, 
  Star, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Calendar,
  Award
} from "lucide-react";
import { Publication } from "@/types";
import { PublicationCard } from "./PublicationCard";

interface PublicationsViewerProps {
  initialPublications: Publication[];
}

export function PublicationsViewer({ initialPublications }: PublicationsViewerProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterType, setFilterType] = React.useState<string>("all");

  // Filtering logic
  const filtered = React.useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return initialPublications.filter((pub) => {
      // Type / Quartile Filter
      if (filterType === "q1" && pub.quartile !== "Q1") return false;
      if (filterType === "journal" && pub.work_type !== "journal") return false;
      if (filterType === "conference" && pub.work_type !== "conference") return false;
      if (filterType === "thesis" && !["thesis", "book", "chapter"].includes(pub.work_type || "")) return false;
      if (filterType === "preprint" && pub.work_type !== "preprint") return false;

      // Text Search
      if (!term) return true;

      const titleMatch = pub.title.toLowerCase().includes(term);
      const authorMatch = pub.authors.some((a) => a.toLowerCase().includes(term));
      const journalMatch = pub.journal ? pub.journal.toLowerCase().includes(term) : false;
      const keywordMatch = pub.keywords ? pub.keywords.some((k) => k.toLowerCase().includes(term)) : false;

      return titleMatch || authorMatch || journalMatch || keywordMatch;
    });
  }, [initialPublications, searchTerm, filterType]);

  // Group by year descending
  const groupedByYear = React.useMemo(() => {
    const groups: { [year: number]: Publication[] } = {};
    for (const pub of filtered) {
      const year = pub.year || 9999;
      if (!groups[year]) groups[year] = [];
      groups[year].push(pub);
    }
    return Object.entries(groups)
      .map(([year, pubs]) => ({ year: Number(year), pubs }))
      .sort((a, b) => b.year - a.year);
  }, [filtered]);

  // Overall counts for summary cards
  const totalCount = initialPublications.length;
  const q1Count = React.useMemo(() => initialPublications.filter((p) => p.quartile === "Q1").length, [initialPublications]);
  const journalCount = React.useMemo(() => initialPublications.filter((p) => p.work_type === "journal").length, [initialPublications]);
  const confCount = React.useMemo(() => initialPublications.filter((p) => p.work_type === "conference").length, [initialPublications]);

  return (
    <div className="space-y-8">
      
      {/* Top Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-[#0086BA]">
            {totalCount}
          </div>
          <div className="mt-1 font-bold text-sm text-slate-900 dark:text-slate-100">
            Total Publications
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Since foundation (2016)
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-amber-500 flex items-center justify-center gap-1">
            <Award className="w-7 h-7" /> {q1Count}
          </div>
          <div className="mt-1 font-bold text-sm text-slate-900 dark:text-slate-100">
            Q1 Ranked Papers
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Top Quartile (SJR)
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
            <BookOpen className="w-7 h-7" /> {journalCount}
          </div>
          <div className="mt-1 font-bold text-sm text-slate-900 dark:text-slate-100">
            Journal Articles
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Peer Reviewed
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-blue-500 flex items-center justify-center gap-1">
            <Users className="w-7 h-7" /> {confCount}
          </div>
          <div className="mt-1 font-bold text-sm text-slate-900 dark:text-slate-100">
            Conferences
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Proceedings &amp; Congresses
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 justify-between">
          
          {/* Search Input */}
          <div className="relative flex-grow max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, author, journal, or topic..."
              aria-label="Search publications by title, author, journal, or topic"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0086BA] transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterType === "all"
                  ? "bg-[#0086BA] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilterType("q1")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterType === "q1"
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              Q1 Only (SJR)
            </button>

            <button
              onClick={() => setFilterType("journal")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterType === "journal"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Journals
            </button>

            <button
              onClick={() => setFilterType("conference")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterType === "conference"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Conferences
            </button>

            <button
              onClick={() => setFilterType("thesis")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterType === "thesis"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Theses &amp; Books
            </button>
          </div>

        </div>

        {/* Results count */}
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <span>
            Showing <strong className="text-slate-800 dark:text-slate-200">{filtered.length}</strong> of {totalCount} publications
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-[#0086BA] hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      </div>

      {/* Publications List Grouped by Year */}
      <div className="space-y-10">
        {groupedByYear.map(({ year, pubs }) => (
          <div key={year} className="space-y-4">
            
            {/* Year Header */}
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Calendar className="w-5 h-5 text-[#0086BA]" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {year === 9999 ? "Undated" : year}
              </h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {pubs.length} {pubs.length === 1 ? "paper" : "papers"}
              </span>
            </div>

            {/* List of items */}
            <div className="space-y-4">
              {pubs.map((pub) => (
                <PublicationCard
                  key={pub.id || pub.doi || pub.title}
                  publication={pub}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-slate-500 dark:text-slate-400">
          <p className="text-base font-semibold">No publications found matching your search.</p>
          <p className="text-sm mt-1">Try adjusting the filters or clearing the search terms.</p>
        </div>
      )}

    </div>
  );
}
