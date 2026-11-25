import Link from "next/link";
import {
  FlaskConical,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Users,
  FolderKanban,
  Building2,
  type LucideIcon,
} from "lucide-react";

interface PillarConfig {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  primaryLink: { label: string; href: string };
  secondaryLink: { label: string; href: string; icon: LucideIcon };
  icon: LucideIcon;
  revealClass: string;
  accentDot: string;
  watermarkColor: string;
  secondaryIconColor: string;
  secondaryHover: string;
  hoverBorder: string;
  titleHover: string;
  buttonClasses: string;
}

const PILLARS: PillarConfig[] = [
  {
    id: "education",
    title: "Education & training",
    description:
      "Equipping students, early career researchers, and practitioners with open textbooks, specialized workshops, and hands on mentorship in data science.",
    highlights: [
      "Open textbooks and reproducible tutorials",
      "CRAN packages and open source data tools",
      "Practicum program and junior talent mentorship",
    ],
    primaryLink: { label: "Learning resources", href: "/education/" },
    secondaryLink: { label: "Practicum", href: "/education/practicum/", icon: Users },
    icon: GraduationCap,
    revealClass: "pillar-card-left",
    accentDot: "bg-emerald-500",
    watermarkColor: "text-emerald-600 dark:text-emerald-500",
    secondaryIconColor: "text-emerald-600 dark:text-emerald-400",
    secondaryHover: "hover:border-emerald-500/40 hover:bg-emerald-500/8 dark:hover:bg-emerald-500/12",
    hoverBorder: "hover:border-emerald-500/40 dark:hover:border-emerald-500/40",
    titleHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    buttonClasses: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  {
    id: "research",
    title: "Research & innovation",
    description:
      "Developing novel statistical and computational methods for scalable machine learning, combinatorial optimization, and complex data modeling.",
    highlights: [
      "Explainable ML and counterfactual reasoning",
      "Metaheuristics and combinatorial optimization",
      "Statistical modeling and complexity measures",
    ],
    primaryLink: { label: "Research lines", href: "/research/" },
    secondaryLink: { label: "Projects", href: "/research/projects/", icon: FolderKanban },
    icon: FlaskConical,
    revealClass: "pillar-card-center",
    accentDot: "bg-[#0086BA]",
    watermarkColor: "text-[#0086BA]",
    secondaryIconColor: "text-[#0086BA] dark:text-[#38bdf8]",
    secondaryHover: "hover:border-[#0086BA]/45 hover:bg-[#0086BA]/8 dark:hover:bg-[#38bdf8]/12",
    hoverBorder: "hover:border-[#0086BA]/45 dark:hover:border-[#38bdf8]/45",
    titleHover: "group-hover:text-[#0086BA] dark:group-hover:text-[#38bdf8]",
    buttonClasses: "bg-[#0086BA] hover:bg-[#006d96] text-white",
  },
  {
    id: "consulting",
    title: "Consulting services",
    description:
      "Supporting companies and public institutions in integrating reliable data science and AI systems into operations with rigorous engineering standards.",
    highlights: [
      "Predictive algorithms and production ML pipelines",
      "Healthcare analytics with Hospital La Paz and RNFC",
      "Agritech, aerospace, and industrial IoT analytics",
    ],
    primaryLink: { label: "Consulting projects", href: "/consulting/" },
    secondaryLink: { label: "Clients", href: "/consulting/clients/", icon: Building2 },
    icon: Briefcase,
    revealClass: "pillar-card-right",
    accentDot: "bg-[#E30613]",
    watermarkColor: "text-[#E30613]",
    secondaryIconColor: "text-[#E30613] dark:text-[#f87171]",
    secondaryHover: "hover:border-[#E30613]/40 hover:bg-[#E30613]/8 dark:hover:bg-[#E30613]/12",
    hoverBorder: "hover:border-[#E30613]/40 dark:hover:border-[#f87171]/40",
    titleHover: "group-hover:text-[#E30613] dark:group-hover:text-[#f87171]",
    buttonClasses: "bg-[#E30613] hover:bg-[#c40510] text-white",
  },
];

export function BentoGrid() {
  return (
    <section className="overflow-x-clip py-16 sm:py-24 bg-white dark:bg-[#0d1322] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="scroll-reveal max-w-[680px] mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-slate-100">
            From mathematical theory to real world impact
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Discover the three core pillars through which the Data Science Lab coordinates research, university education, and knowledge transfer.
          </p>
        </div>

        {/* 3 Main Pillars Grid (shared scroll-driven view-timeline) */}
        <div className="pillars-grid-stage grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const SecondaryIcon = pillar.secondaryLink.icon;
            return (
              <article
                key={pillar.id}
                className={`${pillar.revealClass} relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-slate-50/70 dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg ${pillar.hoverBorder} transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col group`}
              >
                {/* Signature background watermark icon with subtle scroll parallax */}
                <div
                  className={`pillar-watermark-parallax absolute top-1/2 -translate-y-1/2 -left-16 ${pillar.watermarkColor} opacity-[0.09] dark:opacity-[0.15] pointer-events-none select-none`}
                  aria-hidden="true"
                >
                  <Icon
                    className="w-64 h-64 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-110"
                    strokeWidth={1}
                  />
                </div>

                <div className="relative z-10 flex flex-col justify-between flex-1">
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 ${pillar.titleHover} transition-colors duration-200`}
                    >
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${pillar.accentDot}`}
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5">
                    <Link
                      href={pillar.primaryLink.href}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-xs transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] ${pillar.buttonClasses}`}
                    >
                      <span>{pillar.primaryLink.label}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>

                    <Link
                      href={pillar.secondaryLink.href}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 backdrop-blur-xs transition-[background-color,border-color,color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] ${pillar.secondaryHover}`}
                    >
                      <SecondaryIcon
                        className={`w-4 h-4 shrink-0 ${pillar.secondaryIconColor}`}
                        aria-hidden="true"
                      />
                      <span>{pillar.secondaryLink.label}</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
