import { Metadata } from "next";
import consultingClientsData from "@/data/consulting_clients.json";
import { ConsultingClient } from "@/types";
import { PartnerClientCard } from "@/components/ui/PartnerClientCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Consulting Clients",
  description:
    "Companies, utilities, agrotech innovators, and public institutions partnering with DSLAB URJC for high-impact data science solutions.",
  path: "/consulting/clients/",
});

const clients = consultingClientsData as ConsultingClient[];

export default function ConsultingClientsPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Consulting clients
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          From international utility leaders to innovative agrotech and maritime operations, these are some of the companies and public institutions that trust DSLAB for applied analytics, AI pipelines, and custom modeling.
        </p>
      </header>

      {/* Clients Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <PartnerClientCard
              key={client.name}
              name={client.name}
              logo={client.logo}
              description={client.description}
              url={client.url}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
