import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Practicum & Internships",
  description: "University internships and student research practicum at the Data Science Lab.",
};

export default function PracticumPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          University Talent
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Practicum &amp; Internships
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          At DSLAB, we offer university students the opportunity to undertake professional curriculum and extracurricular internships in data science, becoming active participants in real-world research.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          <p>
            Interns gain hands-on experience in applied research and technical development within data science, under the direct mentorship of senior researchers and professors at Universidad Rey Juan Carlos.
          </p>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              Key Areas of Hands-on Learning
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0086BA] shrink-0 mt-0.5" />
                <span><strong>Data collection and management:</strong> Building and maintaining robust data pipelines from heterogeneous public and private sources.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0086BA] shrink-0 mt-0.5" />
                <span><strong>Predictive modeling and Machine Learning:</strong> Designing, evaluating, and validating models for real healthcare and industrial data.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0086BA] shrink-0 mt-0.5" />
                <span><strong>Cloud computing &amp; Big Data:</strong> Developing scalable pipelines using cloud-based and distributed architectures.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0086BA] shrink-0 mt-0.5" />
                <span><strong>Scientific communication:</strong> Preparing interactive dashboards, publications, and clear visual reports.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar Callout */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
            Interested in doing your Practicum with us?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Reach out through our contact form or contact our general coordinator directly.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] text-sm transition-colors"
          >
            Contact DSLab <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
