import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, LineChart } from "lucide-react";
import { DataScienceVennDiagram } from "@/components/about/DataScienceVennDiagram";
import { DataScienceLifecycle } from "@/components/about/DataScienceLifecycle";

export const metadata: Metadata = {
  title: "About | Data Science Lab",
  description: "Advancing foundations and applications of data science at Universidad Rey Juan Carlos.",
};

export default function AboutPage() {
  return (
      <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Page Header & Objectives */}
        <div className="max-w-4xl space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              The Data Science Lab (DSLAB)
            </h1>
            <p className="mt-2 text-xl text-[#0086BA] font-semibold">
              Advancing foundations and applications of data science
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Based at <strong>Universidad Rey Juan Carlos</strong> (Madrid, Spain), the Data Science Lab (DSLAB) is a high-performance research group dedicated to pioneering advancements in the foundations and applications of data science and artificial intelligence.
          </p>

          <div className="space-y-3 pt-2">
            <p className="text-base font-bold text-slate-900 dark:text-slate-100">
              Our research pursues three core objectives:
            </p>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                <span><strong>Advancing knowledge:</strong> Generating novel insights and techniques within Intelligent Information Technologies (IIT) and the broader field of data science.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E30613] mt-2 shrink-0" />
                <span><strong>Solving real-world problems:</strong> Collaborating on the analysis of complex socio-economic, industrial, and clinical issues that demand rigorous, data-driven research.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span><strong>Developing talent:</strong> Training and mentoring the next generation of researchers, doctoral candidates, and data science practitioners.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Focus: The Science of Data (Side-by-Side Layout) */}
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Narrative on the left */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Our focus: the science of data
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  DSLAB centers its efforts on Data Science. We recognize it as a critical interdisciplinary field merging <strong>mathematics &amp; statistics knowledge</strong>, <strong>hacking skills (computational/engineering abilities)</strong>, and <strong>substantive expertise</strong> from specific application domains. This convergence of skills, essential for a true Data Scientist, is often visualized as shown in the accompanying diagram.
                </p>
                <p>
                  Our primary goal is to research and develop the sophisticated tools, foundational knowledge, and practical skills necessary for the successful execution of Data Science projects. This involves navigating the complete <strong>Data Science lifecycle</strong>, often represented cyclically.
                </p>
                <p>
                  We achieve this by both innovating in statistical and machine learning techniques and designing and evaluating analytical applications that improve expert practices across diverse fields.
                </p>
              </div>
            </div>

            {/* Symmetrically scaled diagrams side-by-side on the right */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 items-stretch">
              <DataScienceVennDiagram />
              <DataScienceLifecycle />
            </div>

          </div>
        </section>

        {/* Core Research Areas: The Two Pillars */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Core research areas
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Our work, supporting the entire data lifecycle illustrated above, is structured around two fundamental and complementary pillars: <strong>data engineering</strong> and <strong>data analytics</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Pillar 1: Data Engineering */}
            <div className="relative overflow-hidden p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 group">
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 text-[#0086BA] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
                <Database className="w-64 h-64" strokeWidth={1} />
              </div>

              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Data engineering: building the foundation
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  This area addresses the challenges of managing large-scale data, focusing on efficient <strong>storage</strong>, <strong>representation</strong>, <strong>transformation</strong>, <strong>computation</strong>, and <strong>parallelization</strong>. It is responsible for the development, construction, testing, and maintenance of robust Big Data architectures and technologies.
                </p>

                <div className="pt-2 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                    Focus areas
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                      <span>
                      <strong className="text-slate-900 dark:text-slate-200">Computer science &amp; information systems:</strong> Managing the core data lifecycle, including automated data acquisition, secure storage, cleaning, preparation, and high-performance computation and parallelization.
                    </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                      <span>
                      <strong className="text-slate-900 dark:text-slate-200">Process &amp; software engineering quality:</strong> Ensuring the reliability and efficiency of data processes through appropriate technologies, rigorous software engineering practices, reproducible workflows, and quality assurance.
                    </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 2: Data Analytics */}
            <div className="relative overflow-hidden p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 group">
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 text-[#E30613] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
                <LineChart className="w-64 h-64" strokeWidth={1} />
              </div>

              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Data analytics: extracting insights and value
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  This area focuses on uncovering valuable information hidden within data through the development and application of <strong>advanced models</strong>, <strong>classification techniques</strong>, <strong>prediction algorithms</strong>, and <strong>visualization methods</strong>.
                </p>

                <div className="pt-2 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                    Specialization areas
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#E30613] mt-2 shrink-0" />
                      <span>
                      <strong className="text-slate-900 dark:text-slate-200">Statistics &amp; machine learning:</strong> Developing and applying algorithms for pattern recognition and predictive modeling, including supervised, unsupervised, and semi-supervised learning.
                    </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#E30613] mt-2 shrink-0" />
                      <span>
                      <strong className="text-slate-900 dark:text-slate-200">Optimization &amp; mathematics:</strong> Providing mathematical foundations and efficient optimization algorithms for complex data analysis problems and decision support systems.
                    </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Navigation link to Team */}
        <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Meet our researchers &amp; faculty
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Explore the academic profiles, publications, and scientific roles of everyone in the lab.
            </p>
          </div>
          <Link
              href="/about/team/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shrink-0 transition-colors shadow-md"
          >
            View team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
  );
}