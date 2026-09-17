import { Metadata } from "next";
import { books, rPackages } from "@/data/education";
import { GraduationCap, BookOpen, Code2, ExternalLink, FileText, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Resources",
  description: "Curated open-access books, R packages, and educational tools created by DSLab.",
};

export default function EducationPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          Education &amp; Dissemination
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Learning Resources
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Explore DSLAB’s curated collection of high-impact open-access books, CRAN R packages, and instructional materials designed to empower university students, researchers, and data science professionals.
        </p>
      </div>

      {/* Books Section */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#0086BA]" />
            Open-Access Books ({books.length})
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Peer-reviewed textbooks authored by DSLab professors for statistical modeling and data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA]/60 dark:hover:border-[#0086BA]/60 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#0086BA] block mb-1">
                  {book.date}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {book.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {book.authors}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
                >
                  Read Online <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {book.sourceUrl && (
                  <a
                    href={book.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    <Github className="w-3.5 h-3.5" /> Source
                  </a>
                )}

                {book.pdfUrl && (
                  <a
                    href={book.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" /> PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* R Packages & Algorithmic Toolboxes */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-[#E30613]" />
            R Packages &amp; Toolboxes
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Open-source libraries authored by our team published on CRAN and GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rPackages.map((pkg) => (
            <div
              key={pkg.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E30613]/10 text-[#E30613]">
                  CRAN Package
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                  {pkg.title}
                </h3>
                {pkg.authors && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {pkg.authors}
                  </p>
                )}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {pkg.url && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
                  >
                    View on CRAN <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
