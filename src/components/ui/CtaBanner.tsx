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
    ? "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#0086BA] bg-white hover:bg-slate-50 shadow-md transition-[transform,background-color] duration-200 transform hover:-translate-y-0.5 shrink-0 text-sm"
    : "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shadow-md transition-[transform,background-color] duration-200 transform hover:-translate-y-0.5 shrink-0 text-sm";

  const containerClasses = isBrand
    ? "rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0086BA] to-[#006d96] p-8 sm:p-12 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
    : "rounded-2xl p-6 sm:p-8 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6";

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="max-w-2xl space-y-2 text-left">
        {badge && (
          <div
            className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-1 ${
              isBrand ? "text-white/90" : "text-[#0086BA]"
            }`}
          >
            {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
            <span>{badge.text}</span>
          </div>
        )}
        <h2
          className={`font-extrabold tracking-tight ${
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
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      ) : (
        <Link href={buttonHref} className={buttonClasses}>
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </div>
  );
}
