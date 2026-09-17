import Link from "next/link";
import { 
  FlaskConical, 
  GraduationCap, 
  Briefcase, 
  LayoutGrid, 
  ArrowRight, 
  Star, 
  BookOpen, 
  Cpu, 
  Activity,
  ExternalLink
} from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 dark:text-[#0086BA] mb-3">
            <LayoutGrid className="w-3.5 h-3.5" />
            Strategic Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            From Fundamental Theory to Real-World Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Discover the three interconnected dimensions through which the Data Science Lab creates value for academia, students, and society.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Research & Innovation (Span 7) */}
          <div className="lg:col-span-7 rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0086BA]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0086BA]/10 text-[#0086BA] flex items-center justify-center">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  Q1 SCImago Top Papers
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                Research & Scientific Discovery
              </h3>
              
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                We pioneer novel statistical and computational methods for scalable data mining, explainable machine learning (counterfactuals), combinatorial optimization, and data complexity measures.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Explainable ML
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Support Vector Machines
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Complexity Measures
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Metaheuristics
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                15 Active Research Lines
              </span>
              <Link
                href="/research/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0086BA] group-hover:translate-x-1 transition-transform"
              >
                Explore lines <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Consulting & Transfer (Span 5) */}
          <div className="lg:col-span-5 rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#E30613]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#E30613]/10 text-[#E30613] flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Knowledge Transfer
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                Industry Consulting
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Strategic support for companies and public bodies integrating AI, predictive algorithms, and quality management into real-world operations.
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#0086BA]" />
                  <span>Clinical & Healthcare Analytics (La Paz, RNFC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#0086BA]" />
                  <span>Smart IoT & Livestock Protection (Digitanimal)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Public-Private Partnerships
              </span>
              <Link
                href="/consulting/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0086BA] group-hover:translate-x-1 transition-transform"
              >
                Our projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Education & Training (Span 6) */}
          <div className="lg:col-span-6 rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Open Educational Resources
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                Education, Books & Training
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We empower students, junior practitioners, and senior professionals with open-access books, tutorials, CRAN packages, and hands-on practicum workshops.
              </p>

              <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 text-xs">
                <div className="font-semibold text-slate-800 dark:text-slate-200">
                  Latest Book: Modelos Estadísticos para la Predicción (2025)
                </div>
                <div className="text-slate-500 dark:text-slate-400 mt-0.5">
                  By Víctor Aceña & Isaac Martín &mdash; Free & Open Access
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500">6 Open Books & CRAN Packages</span>
              <Link
                href="/education/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0086BA] group-hover:translate-x-1 transition-transform"
              >
                Access resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 4: Web Apps Platform (Span 6) */}
          <div className="lg:col-span-6 rounded-2xl p-8 bg-gradient-to-br from-[#0086BA]/5 to-[#0086BA]/15 dark:from-[#0086BA]/10 dark:to-slate-900 border border-[#0086BA]/20 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0086BA] text-white flex items-center justify-center shadow-md shadow-[#0086BA]/30">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0086BA] text-white">
                  Live Tools
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                DSLab Web Applications
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Direct access to interactive Shiny dashboards, real-time indicators, and specialized decision-support tools deployed on our dedicated platform.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0086BA]/20 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                dslabapps.es
              </span>
              <a
                href="https://dslabapps.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0086BA] hover:underline"
              >
                Launch apps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
