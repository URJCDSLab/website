import { Metadata } from "next";
import { PublicationsViewer } from "@/components/PublicationsViewer";
import rawPubs from "../../../../_data/publications.json";
import { Publication } from "@/types";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Publications",
  description: "Scientific articles, conference proceedings, book chapters, and doctoral dissertations produced by members of the Data Science Lab (URJC) since its foundation in 2016.",
};

const publications = rawPubs as unknown as Publication[];

export default function PublicationsPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          Academic Output
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Publications
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Scientific articles, conference proceedings, book chapters, and doctoral dissertations produced by members of the Data Science Lab (URJC) since its foundation in 2016.
        </p>
      </div>

      {/* Interactive Publications Viewer */}
      <PublicationsViewer initialPublications={publications} />

    </div>
  );
}
