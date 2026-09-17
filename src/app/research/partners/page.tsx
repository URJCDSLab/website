import { Metadata } from "next";
import { Handshake, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Partners",
  description: "Academic and institutional research partners collaborating with DSLab.",
};

const partners = [
  {
    name: "Academia Joven de España",
    logo: "/assets/images/conecta/logo_aje.png",
    url: "https://academiajoven.es/",
    description: "Promoting and supporting outstanding early-career researchers in Spain, while inspiring scientific vocations across disciplines.",
  },
  {
    name: "AuditAI (Universidad de Alcalá)",
    logo: "/assets/images/research_partners/auditai.webp",
    url: "http://auditai.uah.es/",
    description: "Specializing in complex software systems analysis, cloud computing quality, and rigorous algorithmic audits of AI models.",
  },
  {
    name: "CIDE (URJC)",
    logo: "/assets/images/research_partners/CIDE.svg",
    url: "https://cide.urjc.es/",
    description: "Multidisciplinary center dedicated to high-quality research, physiological modeling, and training in sports analytics and health.",
  },
  {
    name: "CentroGeo (México)",
    logo: "/assets/images/research_partners/centrogeo.svg",
    url: "https://www.centrogeo.org.mx/",
    description: "Geospatial data science, territorial analytics, and remote sensing intelligence research center.",
  },
  {
    name: "Digitanimal",
    logo: "/assets/images/research_projects/digitanimal.jpg",
    url: "https://digitanimal.com/",
    description: "IoT digital cowbells and smart sensors tracking livestock health and predicting abnormal behavior to protect intensive farming.",
  },
  {
    name: "Grant Thornton",
    logo: "/assets/images/research_projects/citizenlab.jpg",
    url: "https://www.grantthornton.es/",
    description: "Strategic partner in CitizenLab analyzing urban mobility, public services, and territorial economic impact through AI.",
  },
];

export default function ResearchPartnersPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Handshake className="w-3.5 h-3.5" />
          Network &amp; Alliances
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Research Partners
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          At DSLAB, we collaborate with a wide network of research partners &mdash; from academic groups and hospital research institutes to technological industry leaders &mdash; to drive innovation at the frontiers of data science.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="h-20 flex items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                {partner.name}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {partner.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
              >
                Visit partner website <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
