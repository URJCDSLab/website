import { Metadata } from "next";
import Link from "next/link";
import { 
  Database, 
  BrainCircuit, 
  Cloud, 
  Activity, 
  BarChart3, 
  ArrowRight 
} from "lucide-react";
import { PartnerClientCard } from "@/components/ui/PartnerClientCard";

export const metadata: Metadata = {
  title: "Practicum & internships | Data Science Lab",
  description: "University internships and student research practicum at the Data Science Lab.",
};

const learningAreas = [
  {
    icon: Database,
    title: "Data collection and management",
    description: "Building and maintaining data repositories from heterogeneous sources.",
  },
  {
    icon: BrainCircuit,
    title: "Predictive modeling and machine learning",
    description: "Designing models to extract insights and forecast outcomes.",
  },
  {
    icon: Cloud,
    title: "Cloud computing for data science",
    description: "Developing scalable solutions using cloud-based technologies.",
  },
  {
    icon: Activity,
    title: "Research applications",
    description: "Applying data science to challenges in health, environment, and social sciences.",
  },
  {
    icon: BarChart3,
    title: "Scientific communication",
    description: "Preparing reports, dashboards, and visualizations to communicate findings effectively.",
  },
];

export default function PracticumPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Practicum &amp; internships
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Curricular and extracurricular internships in data science, offering university students hands-on participation in real-world research projects.
        </p>
      </header>

      {/* Key areas of hands-on learning */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Key areas of hands-on learning
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
            Interns are mentored by experienced researchers and contribute directly to ongoing DSLAB research initiatives:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-2">
          {learningAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0086BA]/10 text-[#0086BA] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Collaborating Entities */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Collaborating entities
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
            Institutions and organizations collaborating with DSLAB to offer professional internships:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PartnerClientCard
            name="Faculty of Health Sciences (URJC)"
            logo="/assets/images/practicum/fcs.svg"
            description="The Faculty of Health Sciences at Rey Juan Carlos University is one of Spain’s leading academic centers for health education and research. Located at the Alcorcón campus, it offers undergraduate and master’s degrees in fields such as Nursing, Medicine, Psychology, Occupational Therapy, Biomedical Research, and Neuroscience."
            url="https://www.urjc.es/fcs"
          />
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="rounded-3xl bg-gradient-to-r from-[#0086BA] to-[#006d96] p-8 sm:p-12 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl space-y-2 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Interested in doing your practicum with us?
          </h2>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Reach out through our contact form to inquire about current internship openings and academic credit agreements.
          </p>
        </div>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#0086BA] bg-white hover:bg-slate-50 shadow-md transition-[transform,background-color] duration-200 transform hover:-translate-y-0.5 shrink-0 text-sm"
        >
          <span>Contact DSLAB</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
