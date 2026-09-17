import { Metadata } from "next";
import { consultingClients } from "@/data/consulting";
import { Building2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients",
  description: "Companies and organizations that trust DSLab for data science consulting.",
};

export default function ConsultingClientsPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Building2 className="w-3.5 h-3.5" />
          Industry Trust
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Consulting Clients
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          From international utility leaders to innovative agrotech and maritime operations, these are some of the companies that trust DSLab for applied analytics, AI pipelines, and custom modeling.
        </p>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {consultingClients.map((client) => (
          <div
            key={client.name}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-between group"
          >
            <div className="h-20 w-full flex items-center justify-center p-2 mb-3">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
              {client.name}
            </h3>
            {client.url && (
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-[#0086BA]"
              >
                Website <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
