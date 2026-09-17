import { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Gamepad2, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "DSLAB-TI",
  description: "Data Science Lab for Teaching Innovation at Universidad Rey Juan Carlos.",
};

export default function DslabTiPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Lightbulb className="w-3.5 h-3.5" />
          Teaching Innovation Group
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          DSLAB-TI: Teaching Innovation
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          The Teaching Innovation Group of the Data Science Lab develops cutting-edge pedagogical tools, gamified experiences, and virtual labs to transform university instruction in data science.
        </p>
      </div>

      {/* Featured Initiatives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CONECTA card */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#E30613]/10 text-[#E30613] flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              ¡CONECTA! Educational Board Game
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              An interactive, gamified board game developed to teach complex network theory, graph algorithms, and data science concepts in an engaging classroom format.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/education/conecta/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0086BA] hover:underline"
            >
              Discover ¡CONECTA! <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ViLT card */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#0086BA]/10 text-[#0086BA] flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              ViLT: Virtual Laboratory
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Virtual lab tools enabling real-time experimentation with algorithms, model evaluation, and simulated environments for students.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href="https://github.com/URJCDSLab/ViLT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0086BA] hover:underline"
            >
              Explore on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
