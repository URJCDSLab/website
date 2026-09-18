import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, ShieldCheck, Cpu, Database, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "SABERMED | Data Science Lab",
  description: "Swarm Agent-Based Environment for Reputation in MEDicine assessing credibility of online medical information and detecting fraudulent health content.",
};

const objectives = [
  {
    icon: Database,
    title: "Information retrieval & big data",
    desc: "Extraction, processing, and indexing of structured and unstructured health contents from web sources and social networks.",
  },
  {
    icon: Network,
    title: "Knowledge consolidation",
    desc: "Real-time storage and indexing of captured clinical data enabling distributed access for downstream models.",
  },
  {
    icon: Cpu,
    title: "Artificial intelligence & swarm algorithms",
    desc: "Deep learning models combined with swarm intelligence to generate key indicators and evaluate fraudulent health patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Automated alert & report interface",
    desc: "Automated dispatch of notifications to host web platforms and search engines to proceed with removal of fraudulent health claims.",
  },
];

const partners = [
  {
    name: "European Union & Spain (FEDER)",
    logo: "/assets/images/research_projects/sabermed/ue_spain_logo.png",
  },
  {
    name: "MedLab Media Group (now dezzai)",
    logo: "/assets/images/research_projects/sabermed/medlab.svg",
  },
  {
    name: "Universidad Rey Juan Carlos",
    logo: "/assets/images/research_projects/sabermed/urjc.svg",
  },
  {
    name: "Instituto de Investigación Biomédica de Salamanca (IBSAL)",
    logo: "/assets/images/research_projects/sabermed/ibsal.svg",
  },
];

export default function SabermedPage() {
  return (
      <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Back link */}
        <div>
          <Link
              href="/research/projects/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0086BA] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to research projects
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-[#0086BA]" />
              2018 &mdash; 2021
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              SABERMED
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Swarm Agent-Based Environment for Reputation in MEDicine &mdash; An automated artificial intelligence framework designed to detect fraudulent digital health content and assess the credibility of medical claims online.
            </p>
          </div>

          {/* Clean Logo without container formatting */}
          <div className="shrink-0">
            <img
                src="/assets/images/research_projects/sabermed/logotipo.png"
                alt="SABERMED logo"
                className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              The fundamental objective of the <strong>SABERMED</strong> project is to provide a reliable solution to the growing challenge of fraudulent digital content in healthcare. Given any digital health resource &mdash; a website, clinical blog, or social media post &mdash; SABERMED determines its reputation and flags fraudulent claims.
            </p>
            <p>
              The platform combines modern natural language processing (NLP), dynamic machine learning classification, and swarm intelligence agents that continuously audit online medical sources to protect citizens from disinformation.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
              <img
                  src="/assets/images/research_projects/sabermed.jpg"
                  alt="SABERMED project overview"
                  className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Technical Objectives */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Technological pillars
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Core components developed to automate online medical reputation assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj) => {
              const Icon = obj.icon;
              return (
                  <div
                      key={obj.title}
                      className="relative overflow-hidden p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group min-h-[160px]"
                  >
                    {/* Background Watermark Icon */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-8 text-[#0086BA] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
                      <Icon className="w-32 h-32" strokeWidth={1} />
                    </div>

                    {/* Content safely stacked above the background icon */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-3">
                        {obj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>

        {/* Partners & Funding (Now matching the other section headers) */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Partners &amp; collaborators
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Organizations and institutions that supported and collaborated on the SABERMED project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner) => (
                <div
                    key={partner.name}
                    className="flex items-center justify-center text-center h-20 sm:h-24"
                >
                  <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 sm:max-h-16 max-w-full object-contain"
                  />
                </div>
            ))}
          </div>
        </div>

      </div>
  );
}