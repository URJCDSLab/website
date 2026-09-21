import { Metadata } from "next";
import researchProjectsData from "@/data/research_projects.json";
import { ResearchProject } from "@/types";
import { ExternalLink, Calendar } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Research Projects",
  description:
    "Competitive European, national, and regional research projects in healthcare, cybersecurity, tourism, and AI led by Data Science Lab (URJC).",
  path: "/research/projects/",
});

const projects = researchProjectsData as ResearchProject[];

export default function ResearchProjectsPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Research projects
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          DSLAB leads and participates in research-driven projects that span healthcare, industrial cyber risk, sustainable tourism, aerospace, and agriculture, funded through competitive European, national, and regional calls.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#0086BA]" />
                {project.period}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                  {project.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {project.fundingLogo && (
                  <img
                    src={project.fundingLogo}
                    alt="Funding institution"
                    className="w-100 h-auto object-contain mx-auto"
                  />
                )}

                {project.link && (
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit project website for ${project.title}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
                    >
                      Visit project website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
