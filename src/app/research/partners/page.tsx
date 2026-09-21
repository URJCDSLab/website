import { Metadata } from "next";
import researchPartnersData from "@/data/research_partners.json";
import { ResearchPartner } from "@/types";
import { PartnerClientCard } from "@/components/ui/PartnerClientCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Research Partners",
  description:
    "Academic groups, hospital research foundations, and technological institutions collaborating on AI and data science research with DSLAB.",
  path: "/research/partners/",
});

const partners = researchPartnersData as ResearchPartner[];

export default function ResearchPartnersPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Research partners
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          At DSLAB, we collaborate with a wide network of research partners &mdash; from academic groups and hospital research institutes to technological industry leaders &mdash; to drive innovation at the frontiers of data science.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <PartnerClientCard
            key={partner.name}
            name={partner.name}
            logo={partner.logo}
            description={partner.description}
            url={partner.url}
          />
        ))}
      </div>

    </div>
  );
}
