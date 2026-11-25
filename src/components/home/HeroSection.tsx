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

  return (
    <section className="hero-scroll-stage relative overflow-x-clip bg-[#f5f7fa] dark:bg-[#0b0d14] min-h-[calc(100svh-5rem)] flex items-start sm:items-center">
      {/* Live mathematical decision-boundary & separability field */}
      <HeroCanvas paused={canvasPaused} />

      {/* Main editorial clearing */}
      <div className="hero-scroll-content relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36 sm:py-24">
        <div className="max-w-[680px]">
          <h1 className="heading-1 text-[#111827] dark:text-[#eef0f5]">
            Data science built on
            <br className="hidden sm:inline" /> mathematical rigor
          </h1>

          <p className="mt-6 title-2 font-normal text-[#4b5565] dark:text-[#a3a9b8] max-w-[580px]">
            The Data Science Lab at Universidad Rey Juan Carlos advances machine learning, optimization, and applied AI across science, teaching, and industry.
          </p>

          <div className="mt-8">
            <Link
              href="/research/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-semibold text-white bg-[#0074a3] hover:bg-[#005f87] dark:bg-[#38bdf8] dark:hover:bg-[#7dd3fc] dark:text-[#0b0d14] transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
            >
              <span>Explore our research</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          <nav
            aria-label="Laboratory highlights"
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 caption-2 text-[#4b5565] dark:text-[#a3a9b8]"
          >
            <Link
              href="/research/publications/"
              className="inline-flex items-baseline gap-1.5 hover:text-[#0074a3] dark:hover:text-[#38bdf8] transition-colors duration-200"
            >
              <span className="font-mono font-medium tabular-nums text-[#111827] dark:text-[#eef0f5]">
                {publicationsCount}
              </span>
              <span>publications</span>
            </Link>
            <span className="text-[#111827]/20 dark:text-[#eef0f5]/20 select-none" aria-hidden="true">
              /
            </span>
            <Link
              href="/about/team/"
              className="inline-flex items-baseline gap-1.5 hover:text-[#0074a3] dark:hover:text-[#38bdf8] transition-colors duration-200"
            >
              <span className="font-mono font-medium tabular-nums text-[#111827] dark:text-[#eef0f5]">
                {membersCount}
              </span>
              <span>researchers</span>
            </Link>
            <span className="text-[#111827]/20 dark:text-[#eef0f5]/20 select-none" aria-hidden="true">
              /
            </span>
            <Link
              href="/research/"
              className="inline-flex items-baseline gap-1.5 hover:text-[#0074a3] dark:hover:text-[#38bdf8] transition-colors duration-200"
            >
              <span className="font-mono font-medium tabular-nums text-[#111827] dark:text-[#eef0f5]">
                {researchLinesCount}
              </span>
              <span>research lines</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* WCAG 2.2.2 Pause/Play control for the live background diagram */}
      <button
        type="button"
        onClick={() => setCanvasPaused((prev) => !prev)}
        aria-label={
          canvasPaused ? "Play background diagram" : "Pause background diagram"
        }
        title={
          canvasPaused ? "Play background diagram" : "Pause background diagram"
        }
        className="motion-reduce:hidden absolute bottom-6 right-4 sm:right-6 lg:right-8 z-20 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white dark:bg-[#11141c] border border-[#111827]/12 dark:border-[#eef0f5]/12 text-[#4b5565] dark:text-[#a3a9b8] hover:text-[#111827] dark:hover:text-[#eef0f5] hover:border-[#111827]/25 dark:hover:border-[#eef0f5]/25 transition-[color,border-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
      >
        {canvasPaused ? (
          <Play className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <Pause className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        )}
      </button>
    </section>
  );
}
