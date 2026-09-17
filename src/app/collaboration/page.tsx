import { Metadata } from "next";
import Link from "next/link";
import { Handshake, FileCheck, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collaborate With Us",
  description: "Partnership and collaboration models with the Data Science Lab at URJC.",
};

export default function CollaborationPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Handshake className="w-3.5 h-3.5" />
          University-Industry Transfer
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Collaborate With Us
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Discover the legal frameworks and flexible partnership mechanisms available to work with DSLAB and the public university ecosystem under Organic Law 2/2023 (LOSU, Art. 60).
        </p>
      </div>

      {/* Collaboration Mechanisms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Direct Management */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0086BA]/10 text-[#0086BA] flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Direct Management
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Agile direct agreements adapted to enterprise goals:
            </p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                <span><strong>Bilateral Projects (Art. 60):</strong> Tailored R&amp;D contracts and technological consulting for specific enterprise challenges.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                <span><strong>Institutional Research Chairs:</strong> Long-term strategic alliances funding dedicated doctoral candidates and joint labs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                <span><strong>Observatories:</strong> Continuous monitoring and benchmarking of sector-specific data.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Competitive Public Calls */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E30613]/10 text-[#E30613] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Competitive Public Grants
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Co-funding opportunities for ambitious collaborative projects:
            </p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] mt-2 shrink-0" />
                <span><strong>Horizon Europe:</strong> International consortia tackling continent-scale healthcare, energy, and digital transformation challenges.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] mt-2 shrink-0" />
                <span><strong>CDTI &amp; AEI National Calls:</strong> Public-private partnerships and industrial doctorates supported by the Spanish Science Ministry.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] mt-2 shrink-0" />
                <span><strong>Regional Innovation Hubs:</strong> Targeted funding from the Community of Madrid for technological demonstration.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Let’s discuss your next data project
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Our team can help structure the collaboration under the most suitable mechanism for your institution.
        </p>
        <Link
          href="/contact/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] transition-colors shadow-md"
        >
          Contact Our Team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
