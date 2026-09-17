import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, LineChart, Target, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "About the Data Science Lab (DSLAB) at Rey Juan Carlos University.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Who We Are
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          The Data Science Lab (DSLAB)
        </h1>
        <p className="mt-4 text-xl text-[#0086BA] font-semibold">
          Advancing Foundations and Applications of Data Science
        </p>
      </div>

      {/* Main Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          <p>
            Based at <strong>Universidad Rey Juan Carlos</strong> (Madrid, Spain), the <strong>Data Science Lab (DSLAB)</strong> is a high-performance research group dedicated to pioneering advancements in the foundations and applications of data science and artificial intelligence.
          </p>

          <p>
            We recognize data science as a critical interdisciplinary discipline merging mathematical &amp; statistical theory, advanced computational engineering, and substantive domain knowledge.
          </p>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              Our Core Mission
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <Target className="w-4 h-4 text-[#0086BA] shrink-0 mt-0.5" />
                <span><strong>Advancing Knowledge:</strong> Generating novel mathematical and algorithmic insights within Intelligent Information Technologies.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Target className="w-4 h-4 text-[#0086BA] shrink-0 mt-0.5" />
                <span><strong>Solving Real-World Problems:</strong> Collaborating on complex health, industrial, and social challenges through rigorous data-driven modeling.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Target className="w-4 h-4 text-[#0086BA] shrink-0 mt-0.5" />
                <span><strong>Developing Talent:</strong> Mentoring graduate students and future leaders in data science and AI.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Pillars */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <img
              src="/assets/images/about/datascience_skills.png"
              alt="Data Science Skills"
              className="mx-auto rounded-lg max-h-48 object-contain"
            />
            <span className="block mt-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
              Interdisciplinary nature of Data Science skills
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <img
              src="/assets/images/about/datascience_lifecycle.png"
              alt="Data Science Lifecycle"
              className="mx-auto rounded-lg max-h-48 object-contain"
            />
            <span className="block mt-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
              Typical Data Science project lifecycle
            </span>
          </div>
        </div>
      </div>

      {/* Two Pillars: Data Engineering & Analytics */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Core Research Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0086BA]/10 text-[#0086BA] flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Data Engineering: Building the Foundation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Addressing the challenges of managing large-scale data, focusing on efficient storage, representation, transformation, computation, and parallelization. Developing and testing robust Big Data architectures.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E30613]/10 text-[#E30613] flex items-center justify-center">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Data Analytics: Extracting Value
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Formulating mathematical models and algorithms to analyze, predict, and optimize processes. Leveraging statistical machine learning, deep learning, heuristic search, and interactive data visualization.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation link to Team */}
      <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Meet Our Researchers &amp; Professors
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Explore the academic profiles, publications, and roles of everyone in the lab.
          </p>
        </div>
        <Link
          href="/about/team/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shrink-0 transition-colors shadow-md"
        >
          View Team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
