"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";

interface HeroSectionProps {
  publicationsCount: number;
  membersCount: number;
  researchLinesCount: number;
}

export function HeroSection({
  publicationsCount,
  membersCount,
  researchLinesCount,
}: HeroSectionProps) {
  const [canvasPaused, setCanvasPaused] = React.useState(false);

  const roundedPublications = Math.floor(publicationsCount / 10) * 10;
  const roundedMembers = Math.floor(membersCount / 5) * 5;

  return (
    <section className="hero-scroll-stage relative overflow-hidden bg-slate-50 dark:bg-[#090d16] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Interactive network canvas with CSS scroll parallax */}
      <HeroCanvas paused={canvasPaused} />

      {/* Clean readability tint behind hero typography */}
      <div
        className="absolute inset-0 pointer-events-none bg-slate-50/45 dark:bg-[#090d16]/50"
        aria-hidden="true"
      />

      <div className="hero-scroll-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.06]">
            Pioneering intelligence in{" "}
            <span className="text-[#0086BA] dark:text-[#38bdf8]">data science</span>{" "}
            &amp; <span className="text-[#E30613]">AI</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-[60ch] mx-auto">
            We advance machine learning, mathematical optimization, and complex systems through rigorous research, university teaching, and real world transfer at URJC.
          </p>

          {/* Primary CTA + discreet real-data credentials */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-6">
            <Link
              href="/research/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shadow-md shadow-[#0086BA]/20 transition-[background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Explore our research</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <nav
              aria-label="Laboratory highlights"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-300"
            >
              <Link
                href="/research/publications/"
                className="inline-flex items-center gap-1.5 hover:text-[#0086BA] dark:hover:text-[#38bdf8] transition-colors"
              >
                <span className="font-semibold tabular-nums text-slate-900 dark:text-white">
                  {roundedPublications}+
                </span>
                <span>publications</span>
              </Link>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700 select-none" aria-hidden="true">
                /
              </span>
              <Link
                href="/about/team/"
                className="inline-flex items-center gap-1.5 hover:text-[#0086BA] dark:hover:text-[#38bdf8] transition-colors"
              >
                <span className="font-semibold tabular-nums text-slate-900 dark:text-white">
                  {roundedMembers}+
                </span>
                <span>faculty &amp; researchers</span>
              </Link>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700 select-none" aria-hidden="true">
                /
              </span>
              <Link
                href="/research/"
                className="inline-flex items-center gap-1.5 hover:text-[#0086BA] dark:hover:text-[#38bdf8] transition-colors"
              >
                <span className="font-semibold tabular-nums text-slate-900 dark:text-white">
                  {researchLinesCount}
                </span>
                <span>research lines</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* WCAG 2.2.2 Pause/Play control for background network motion */}
      <button
        type="button"
        onClick={() => setCanvasPaused((prev) => !prev)}
        aria-label={canvasPaused ? "Play background animation" : "Pause background animation"}
        title={canvasPaused ? "Play background animation" : "Pause background animation"}
        className="motion-reduce:hidden absolute bottom-4 right-4 z-20 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/85 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#0086BA] dark:hover:text-[#38bdf8] backdrop-blur-sm transition-colors active:scale-[0.98]"
      >
        {canvasPaused ? (
          <Play className="w-4 h-4" aria-hidden="true" />
        ) : (
          <Pause className="w-4 h-4" aria-hidden="true" />
        )}
      </button>
    </section>
  );
}
