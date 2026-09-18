import { ExternalLink } from "lucide-react";

export interface PartnerClientCardProps {
  name?: string;
  logo: string;
  description?: string;
  url?: string;
}

export function PartnerClientCard({ name, logo, description, url }: PartnerClientCardProps) {
  const displayName = name || "Collaborating partner";

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between group">
      <div>
        {/* Centered logo */}
        <div className="h-24 w-full flex items-center justify-center mb-5">
          <img
            src={logo}
            alt={displayName}
            className="max-h-20 max-w-[85%] object-contain"
          />
        </div>

        {name && (
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
            {name}
          </h3>
        )}

        {description && (
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {url && (
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${displayName} website`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
          >
            <span>Visit {name ? `${name} ` : ""}website</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
          </a>
        </div>
      )}
    </div>
  );
}
