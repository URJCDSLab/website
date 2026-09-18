import Link from "next/link";
import {
  FlaskConical,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Users,
  FolderKanban,
  Building2
} from "lucide-react";

export function BentoGrid() {
  return (
      <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              From fundamental theory to real-world impact
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Discover the three core pillars through which the Data Science Lab coordinates and fosters research, education, and knowledge transfer.
            </p>
          </div>

          {/* 3 Main Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Education & Training */}
            <div className="rounded-2xl p-7 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-[border-color,box-shadow] duration-300 flex flex-col group relative overflow-hidden">

              {/* Top Right Gradient Blob */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Huge Background Icon (Watermark) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 text-emerald-600 opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
                <GraduationCap className="w-64 h-64" strokeWidth={1} />
              </div>

              {/* Content safely stacked above background elements */}
              <div className="relative z-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Education &amp; Training
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Empowering students, junior practitioners, and senior professionals with top-tier courses, workshops, open-access textbooks, and practical mentorship in data science.
                  </p>

                  <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>Open textbooks &amp; reproducible tutorials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>CRAN packages &amp; open-source data tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>Practicum program &amp; junior talent mentorship</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                      href="/education/"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    Learning resources <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                      href="/education/practicum/"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors"
                  >
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>Practicum</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Research & Innovation */}
            <div className="rounded-2xl p-7 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-[border-color,box-shadow] duration-300 flex flex-col group relative overflow-hidden">

              {/* Top Right Gradient Blob */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-[#0086BA]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Huge Background Icon (Watermark) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 text-[#0086BA] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
                <FlaskConical className="w-64 h-64" strokeWidth={1} />
              </div>

              {/* Content safely stacked above background elements */}
              <div className="relative z-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                    Research &amp; Innovation
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Exploring the creation of novel statistical and computational methods for scalable data mining, machine learning, optimization, and statistical modeling with complex data sets.
                  </p>

                  <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0086BA] flex-shrink-0" />
                      <span>Explainable ML &amp; counterfactuals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0086BA] flex-shrink-0" />
                      <span>Metaheuristics &amp; combinatorial optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0086BA] flex-shrink-0" />
                      <span>Statistical modeling &amp; complexity measures</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                      href="/research/"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#0086BA] hover:bg-[#00729e] transition-colors shadow-sm"
                  >
                    Research lines <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                      href="/research/projects/"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors"
                  >
                    <FolderKanban className="w-4 h-4 text-[#0086BA]" />
                    <span>Projects</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Consulting services */}
            <div className="rounded-2xl p-7 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-[border-color,box-shadow] duration-300 flex flex-col group relative overflow-hidden">

              {/* Top Right Gradient Blob */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-[#E30613]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Huge Background Icon (Watermark) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 text-[#E30613] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
                <Briefcase className="w-64 h-64" strokeWidth={1} />
              </div>

              {/* Content safely stacked above background elements */}
              <div className="relative z-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#E30613] transition-colors">
                    Consulting services
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Strategic support for companies and public bodies integrating data science and AI technologies into their workflows, with emphasis on performance, quality, and best practices.
                  </p>

                  <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] flex-shrink-0" />
                      <span>Predictive algorithms &amp; ML pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] flex-shrink-0" />
                      <span>Healthcare analytics (Hospital La Paz, RNFC)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] flex-shrink-0" />
                      <span>Agritech, space &amp; industrial IoT analytics</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                      href="/consulting/"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#E30613] hover:bg-[#c40510] transition-colors shadow-sm"
                  >
                    Consulting projects <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                      href="/consulting/clients/"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#E30613]" />
                    <span>Clients</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}