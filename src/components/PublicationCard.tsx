import * as React from "react";
import { Star, LockOpen, ExternalLink, FileText } from "lucide-react";
import { Publication } from "@/types";

interface PublicationCardProps {
  publication: Publication;
}

const qColors: Record<string, string> = {
  Q1: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  Q2: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  Q3: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  Q4: "bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/30",
};

export function PublicationCard({ publication: pub }: PublicationCardProps) {
  return (
    <article
      key={pub.id || pub.doi || pub.title}
      className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA]/50 dark:hover:border-[#0086BA]/50 transition-colors shadow-sm"
    >
      {/* Badges row */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {pub.quartile && (
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold border ${qColors[pub.quartile] || qColors.Q4}`}>
            {pub.quartile === "Q1" && <Star className="w-3 h-3 fill-current" />}
            {pub.quartile} (SJR)
          </span>
        )}

        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          {pub.work_type === "journal" ? "Journal Article" : pub.work_type === "conference" ? "Conference" : pub.work_type}
        </span>

        {pub.is_oa && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <LockOpen className="w-3 h-3" /> Open Access
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
        {pub.landing_page_url ? (
          <a
            href={pub.landing_page_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0086BA] transition-colors"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h4>

      {/* Authors */}
      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
        {pub.authors.join(", ")}
      </p>

      {/* Journal & Year */}
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-500 italic">
        {pub.journal && <span>{pub.journal}, </span>}
        <span>{pub.year}</span>
      </p>

      {/* CWTS Leiden Academic Topics / Keywords */}
      {pub.keywords && pub.keywords.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {pub.keywords.slice(0, 4).map((kw) => (
            <span
              key={kw}
              className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80"
            >
              #{kw}
            </span>
          ))}
        </div>
      )}

      {/* Action Links */}
      <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Digital Object Identifier: ${pub.doi}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] hover:bg-[#0086BA]/20 transition-colors"
          >
            <ExternalLink className="w-3 h-3" /> DOI: {pub.doi}
          </a>
        )}

        {pub.pdf_url && (
          <a
            href={pub.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download PDF for ${pub.title}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            <FileText className="w-3 h-3" /> PDF
          </a>
        )}
      </div>
    </article>
  );
}
