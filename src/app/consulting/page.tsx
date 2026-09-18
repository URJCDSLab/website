import { Metadata } from "next";
import Link from "next/link";
import consultingProjectsData from "@/data/consulting_projects.json";
import { ConsultingProject } from "@/types";
import { Calendar, Building2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Consulting projects | Data Science Lab",
  description: "Applied data science and artificial intelligence consulting projects by DSLAB for industry.",
};

const projects = consultingProjectsData as ConsultingProject[];

export default function ConsultingPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Consulting projects
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            DSLAB carries out bespoke consultancy and technological transfer commissioned by companies and public institutions seeking data-driven algorithms, predictive pipelines, and automated decision-support platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id || project.title}
            className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.period && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#0086BA]" />
                  {project.period}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                {project.client && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{project.client}</span>
                  </div>
                )}
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors leading-snug">
                  {project.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clients Link Banner */}
      <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Our consulting clients &amp; partners
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Discover the organizations we have worked with across multiple sectors.
          </p>
        </div>
        <Link
          href="/consulting/clients/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shrink-0 transition-colors shadow-md"
        >
          View clients <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
