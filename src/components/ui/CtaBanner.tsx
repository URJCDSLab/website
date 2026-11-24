import * as React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  badge?: {
    icon?: LucideIcon;
    text: string;
  };
  variant?: "brand" | "subtle";
  external?: boolean;
  className?: string;
}

export function CtaBanner({
  title,
  description,
  buttonText,
  buttonHref,
  badge,
  variant = "brand",
  external = false,
  className = "",
}: CtaBannerProps) {
  const isBrand = variant === "brand";
  const BadgeIcon = badge?.icon;

  const buttonClasses = isBrand
    ? "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#006d96] bg-white hover:bg-slate-50 shadow-sm transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-white shrink-0 text-sm"
    : "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shadow-sm transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-0.5 active:scale-[0.98] shrink-0 text-sm";

  const containerClasses = isBrand
    ? "rounded-2xl sm:rounded-3xl bg-[#0086BA] border border-[#009ad4]/30 p-8 sm:p-12 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
    : "rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6";

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="max-w-2xl space-y-2 text-left">
        {badge && (
          <div
            className={`inline-flex items-center gap-1.5 text-sm font-medium mb-1 ${
              isBrand ? "text-white/90" : "text-[#0086BA] dark:text-[#38bdf8]"
            }`}
          >
            {BadgeIcon && <BadgeIcon className="w-4 h-4" aria-hidden="true" />}
            <span>{badge.text}</span>
          </div>
        )}
        <h2
          className={`font-bold tracking-tight ${
            isBrand
              ? "text-2xl sm:text-3xl text-white"
              : "text-xl sm:text-2xl text-slate-900 dark:text-slate-100"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isBrand ? "text-white/90" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      </div>

      {external ? (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      ) : (
        <Link href={buttonHref} className={buttonClasses}>
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
