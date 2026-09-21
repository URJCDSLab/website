import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = createPageMetadata({
  title: "Collaborate With Us",
  description:
    "Institutional frameworks (LOSU Article 60), joint research chairs, sponsorship agreements, and collaborative R&D options with DSLAB URJC.",
  path: "/collaboration/",
});

export default function CollaborationPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Collaborate with us
        </h1>
        <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
          Discover the different ways your company or institution can collaborate with DSLAB and the university environment.
        </p>
        <div className="space-y-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            Collaboration with research groups at Spanish public universities is governed by the current legal framework (Organic Law 2/2023 of the University System, article 60). Multiple instruments exist to formalize partnerships, offering both flexible and competitive options adapted to the needs of external organizations.
          </p>
          <p>
            These collaboration mechanisms are classified into two main categories, depending on whether they are established through direct agreements or require a public call process. Each of them has its own formalization process, financial structure, responsible figures, and specific objectives, allowing universities to adapt partnerships to the particular context and needs of each external entity.
          </p>
        </div>
      </div>

      {/* Collaboration Categories Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Direct Management */}
        <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
              <img
                src="/assets/images/collaboration/direct.jpg"
                alt="Direct management collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Direct management
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                These mechanisms allow establishing direct agreements with varying levels of commitment, duration, and impact:
              </p>
              <ul className="space-y-3 pt-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-200">Bilateral projects (Art. 60):</strong> Tailored contracts for specific research, consultancy, or innovation services.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-200">Research chairs:</strong> Long-term collaborations around a shared strategic research area.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-200">Observatories:</strong> Joint initiatives for monitoring, analysis, and reporting in specialized fields.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-200">Research institutes or centers:</strong> Structured and permanent collaborations through dedicated research units.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2: Public Call */}
        <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
              <img
                src="/assets/images/collaboration/public_call.jpg"
                alt="Public call collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Public call
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                These mechanisms involve competitive processes and co-funding, promoting knowledge transfer and innovation:
              </p>
              <ul className="space-y-3 pt-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E30613] mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-200">Industrial doctorates:</strong> Collaborative PhD programs that integrate academic research with business challenges.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E30613] mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-200">Public-private collaboration projects:</strong> Joint R&amp;D initiatives co-funded by public programs and private companies.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Call to Action Bar */}
      <CtaBanner
        title="Ready to start a collaboration that makes an impact?"
        description="Contact our team to discuss opportunities tailored to your organization’s goals."
        buttonText="Contact DSLAB"
        buttonHref="/contact/"
        variant="brand"
      />

    </div>
  );
}
