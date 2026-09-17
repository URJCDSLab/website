"use client";

import * as React from "react";
import { Award, BookOpen, Users, Compass } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  subtitle: string;
  icon: React.ElementType;
  accent: string;
}

const stats: StatItem[] = [
  {
    value: "480+",
    label: "Total Publications",
    subtitle: "Since foundation (2016)",
    icon: BookOpen,
    accent: "text-[#0086BA]",
  },
  {
    value: "100+",
    label: "Q1 Ranked Papers",
    subtitle: "Top Quartile (SJR)",
    icon: Award,
    accent: "text-amber-500",
  },
  {
    value: "25+",
    label: "Faculty & Researchers",
    subtitle: "Across URJC & Affiliated",
    icon: Users,
    accent: "text-emerald-500",
  },
  {
    value: "15",
    label: "Research Lines",
    subtitle: "Core AI & Data Science",
    icon: Compass,
    accent: "text-[#E30613]",
  },
];

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 mb-3 ${stat.accent}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              {stat.value}
            </div>
            <div className="mt-1 font-semibold text-sm text-slate-800 dark:text-slate-200">
              {stat.label}
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {stat.subtitle}
            </div>
          </div>
        );
      })}
    </div>
  );
}
