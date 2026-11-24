import { Metadata } from "next";
import Link from "next/link";
import researchLines from "@/data/research_lines.json";
import { createPageMetadata } from "@/lib/metadata";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = createPageMetadata({
  title: "Research Lines",
  description:
    "Explore the 15 core research lines at DSLAB URJC: statistical modeling, machine learning, optimization, clinical data analytics, and real-world AI applications.",
  path: "/research/",
});

export default function ResearchLinesPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Research lines
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Our research lines focus on developing innovative mathematical and computational solutions to address complex challenges across multiple domains. Reach out directly to line leaders for scientific collaboration.
        </p>
      </div>

      {/* Grid of 15 Research Lines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchLines.map((line) => (
          <div
            key={line.id}
            id={line.id}
            className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-[#0086BA]/60 dark:hover:border-[#38bdf8]/60 shadow-sm hover:shadow-lg transition-[border-color,box-shadow] duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {line.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {line.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Leads:</span>
              {line.leads.map((lead) => (
                <Link
                  key={lead.id}
                  href={`/about/team/#${lead.id}`}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0086BA] dark:hover:text-[#38bdf8] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {lead.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <CtaBanner
        title="Interested in launching a joint research initiative?"
        description="We collaborate with academic teams and institutions across Europe and Latin America."
        buttonText="Let's explore together"
        buttonHref="/collaboration/"
        variant="brand"
      />

    </div>
  );
}
