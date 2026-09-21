import { Metadata } from "next";
import { PublicationsViewer } from "@/components/publications/PublicationsViewer";
import rawPubs from "@/data/publications/publications.json";
import { Publication } from "@/types";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Publications",
  description:
    "Scientific journal articles (JCR/Scopus), conference proceedings, book chapters, and doctoral theses produced by DSLAB URJC since 2016.",
  path: "/research/publications/",
});

const publications = rawPubs as unknown as Publication[];

export default function PublicationsPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Page Header */}
      <div className="max-w-3xl">
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
