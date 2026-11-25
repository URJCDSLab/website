"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface PillarsMetrics {
  publicationsCount: number;
  researchLinesCount: number;
  researchProjectsCount: number;
  booksCount: number;
  packagesCount: number;
  consultingProjectsCount: number;
  consultingClientsCount: number;
}

interface PillarChapter {
  id: "research" | "education" | "consulting";
  shortLabel: string;
  title: string;
  metaLine: string;
  description: string;
  highlights: string[];
  primaryLink: { label: string; href: string };
  secondaryLink: { label: string; href: string };
  copyAnimClass: string;
  visualAnimClass: string;
}

/**
 * Minimalist architectural line emblems (unboxed, integrated directly onto the canvas).
 * Fine 1.25 stroke scales gracefully at large display sizes while staying razor-sharp.
 */
function PillarEmblem({
  id,
  className = "w-64 h-64",
}: {
  id: PillarChapter["id"];
  className?: string;
}) {
  if (id === "research") {
    // Intersecting mathematical domains & axis with DSLAB signal-red focal apex
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <line
          x1="14"
          y1="96"
          x2="106"
          y2="24"
          className="stroke-[#111827]/16 dark:stroke-[#eef0f5]/18"
          strokeWidth="1.25"
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="48"
          cy="66"
          r="30"
          className="stroke-[#111827]/75 dark:stroke-[#eef0f5]/75"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="74"
          cy="52"
          r="26"
          className="stroke-[#0074a3] dark:stroke-[#38bdf8]"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="62"
          cy="59"
          r="8"
          className="stroke-[#E30613]/35"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="62" cy="59" r="3" fill="#E30613" />
      </svg>
    );
  }

  if (id === "education") {
    // Open scientific monograph with DSLAB signal-red focal point
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M16 34C32 34 48 38 60 46C72 38 88 34 104 34V90C88 90 72 94 60 102C48 94 32 90 16 90V34Z"
          className="stroke-[#111827]/75 dark:stroke-[#eef0f5]/75"
          strokeWidth="1.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="60"
          y1="46"
          x2="60"
          y2="102"
          className="stroke-[#0074a3] dark:stroke-[#38bdf8]"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="30"
          y1="52"
          x2="47"
          y2="56"
          className="stroke-[#111827]/30 dark:stroke-[#eef0f5]/30"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="30"
          y1="66"
          x2="47"
          y2="70"
          className="stroke-[#111827]/30 dark:stroke-[#eef0f5]/30"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="73"
          y1="56"
          x2="90"
          y2="52"
          className="stroke-[#111827]/30 dark:stroke-[#eef0f5]/30"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="73"
          y1="70"
          x2="90"
          y2="66"
          className="stroke-[#111827]/30 dark:stroke-[#eef0f5]/30"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="60"
          cy="24"
          r="7.5"
          className="stroke-[#E30613]/35"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="60" cy="24" r="3" fill="#E30613" />
      </svg>
    );
  }

  // Consulting: Interlocking modular structures uniting theory and applied engineering
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="18"
        y="42"
        width="46"
        height="46"
        rx="8"
        className="stroke-[#111827]/75 dark:stroke-[#eef0f5]/75"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <rect
        x="56"
        y="26"
        width="46"
        height="46"
        rx="8"
        className="stroke-[#0074a3] dark:stroke-[#38bdf8]"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="41"
        y1="88"
        x2="41"
        y2="104"
        className="stroke-[#111827]/22 dark:stroke-[#eef0f5]/24"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="79"
        y1="72"
        x2="79"
        y2="104"
        className="stroke-[#111827]/22 dark:stroke-[#eef0f5]/24"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="60"
        cy="57"
        r="8"
        className="stroke-[#E30613]/35"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="60" cy="57" r="3" fill="#E30613" />
    </svg>
  );
}

export function PillarsScrollyStage({ metrics }: { metrics: PillarsMetrics }) {
  const shellRef = React.useRef<HTMLDivElement | null>(null);
  const sentinelRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const chapters: PillarChapter[] = React.useMemo(
    () => [
      {
        id: "research",
        shortLabel: "Research",
        title: "Research & innovation",
        metaLine: `${metrics.publicationsCount} publications · ${metrics.researchLinesCount} research lines`,
        description:
          "Developing novel statistical and computational methods for scalable machine learning, combinatorial optimization, and complex data modeling.",
        highlights: [
          "Explainable machine learning and counterfactual reasoning",
          "Metaheuristics and combinatorial optimization",
          "Statistical modeling and data complexity measures",
        ],
        primaryLink: { label: "Research lines", href: "/research/" },
        secondaryLink: {
          label: `Explore ${metrics.researchProjectsCount} research projects`,
          href: "/research/projects/",
        },
        copyAnimClass: "pillar-copy-1",
        visualAnimClass: "pillar-visual-1",
      },
      {
        id: "education",
        shortLabel: "Education",
        title: "Education & training",
        metaLine: `${metrics.booksCount} textbooks · ${metrics.packagesCount} open repositories`,
        description:
          "Equipping students, early career researchers, and practitioners with open textbooks, specialized workshops, and hands on mentorship in data science.",
        highlights: [
          "Open textbooks and reproducible tutorials",
          "CRAN packages and open source data tools",
          "Practicum program and junior talent mentorship",
        ],
        primaryLink: { label: "Learning resources", href: "/education/" },
        secondaryLink: {
          label: "Explore the Practicum",
          href: "/education/practicum/",
        },
        copyAnimClass: "pillar-copy-2",
        visualAnimClass: "pillar-visual-2",
      },
      {
        id: "consulting",
        shortLabel: "Consulting",
        title: "Consulting services",
        metaLine: `${metrics.consultingProjectsCount} projects · ${metrics.consultingClientsCount} partner organizations`,
        description:
          "Supporting companies and public institutions in integrating reliable data science and AI systems into operations with rigorous engineering standards.",
        highlights: [
          "Predictive algorithms and production ML pipelines",
          "Healthcare analytics with Hospital La Paz and RNFC",
          "Agritech, aerospace, and industrial IoT analytics",
        ],
        primaryLink: { label: "Consulting projects", href: "/consulting/" },
        secondaryLink: {
          label: `Meet our ${metrics.consultingClientsCount} clients`,
          href: "/consulting/clients/",
        },
        copyAnimClass: "pillar-copy-3",
        visualAnimClass: "pillar-visual-3",
      },
    ],
    [
      metrics.booksCount,
      metrics.consultingClientsCount,
      metrics.consultingProjectsCount,
      metrics.packagesCount,
      metrics.publicationsCount,
      metrics.researchLinesCount,
      metrics.researchProjectsCount,
    ]
  );

  // Sync active chapter index via IntersectionObserver on scroll sentinels
  // so pointer-events, aria-selected, and keyboard focus follow the visible chapter.
  React.useEffect(() => {
    const sentinels = sentinelRefs.current.filter(
      (node): node is HTMLDivElement => node !== null
    );
    if (sentinels.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-chapter-index"));
            if (!Number.isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sentinels.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToChapter = React.useCallback((index: number) => {
    const shell = shellRef.current;
    if (!shell) return;
    const rect = shell.getBoundingClientRect();
    const shellTop = window.scrollY + rect.top;
    const travel = Math.max(0, shell.offsetHeight - window.innerHeight);
    const targetRatios = [0.06, 0.5, 0.92];
    const targetY = shellTop + travel * (targetRatios[index] ?? 0);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <section
      aria-label="Core pillars of the Data Science Lab"
      className="relative bg-[#f5f7fa] dark:bg-[#0b0d14]"
    >
      {/* =====================================================================
          DESKTOP PINNED SCROLLYTELLING STAGE
          Active ONLY on lg+ viewports when the browser supports CSS Scroll-Driven
          Animations AND prefers-reduced-motion is no-preference.
          ===================================================================== */}
      <div className="pillars-desktop-stage">
        <div ref={shellRef} className="pillars-scrolly-shell">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            {chapters.map((chapter, idx) => (
              <div
                key={chapter.id}
                ref={(el) => {
                  sentinelRefs.current[idx] = el;
                }}
                data-chapter-index={idx}
                className="h-1/3 w-full"
              />
            ))}
          </div>

          <div className="pillars-sticky-stage">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Unordered pillar selector & continuous scroll progress rail */}
              <div className="mb-14">
                <div
                  role="tablist"
                  aria-label="Core areas of the Data Science Lab"
                  className="grid grid-cols-3 gap-6 pb-4"
                >
                  {chapters.map((chapter, idx) => {
                    const isCurrent = activeIndex === idx;
                    const dotClass =
                      idx === 0
                        ? "pillar-dot-1"
                        : idx === 1
                          ? "pillar-dot-2"
                          : "pillar-dot-3";
                    return (
                      <button
                        key={chapter.id}
                        type="button"
                        role="tab"
                        aria-selected={isCurrent}
                        onClick={() => scrollToChapter(idx)}
                        className="group text-left flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm transition-colors duration-150"
                      >
                        <span
                          className="relative w-2 h-2 shrink-0"
                          aria-hidden="true"
                        >
                          <span className="absolute inset-0 rounded-full bg-[#111827]/20 dark:bg-[#eef0f5]/20 group-hover:bg-[#0074a3] dark:group-hover:bg-[#38bdf8] transition-colors duration-150" />
                          <span
                            className={`${dotClass} absolute inset-0 rounded-full bg-[#E30613]`}
                          />
                        </span>
                        <span
                          className={`body-5 transition-colors duration-150 ${
                            isCurrent
                              ? "text-[#111827] dark:text-[#eef0f5]"
                              : "text-[#4b5565] dark:text-[#a3a9b8] group-hover:text-[#111827] dark:group-hover:text-[#eef0f5]"
                          }`}
                        >
                          {chapter.shortLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Native CSS scroll-driven continuous rail */}
                <div
                  className="relative h-[2px] w-full bg-[#111827]/10 dark:bg-[#eef0f5]/10 overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="pillars-rail-fill absolute inset-0 bg-[#0074a3] dark:bg-[#38bdf8]" />
                </div>
              </div>

              {/* Fluid open stage: large centered SVG emblem on left, copy on right */}
              <div className="grid grid-cols-12 gap-12 items-center">
                {/* Left: Large unboxed architectural emblem centered with right-hand copy */}
                <div className="col-span-5 pillars-stage-stack">
                  {chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className={`${chapter.visualAnimClass} flex flex-col items-center justify-center text-center`}
                    >
                      <PillarEmblem
                        id={chapter.id}
                        className="w-64 h-64 xl:w-72 xl:h-72"
                      />

                      <p className="mt-4 caption-2 font-mono tabular-nums text-[#647084] dark:text-[#858d9f]">
                        {chapter.metaLine}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right: Primary narrative copy, highlights, and actions */}
                <div className="col-span-7 pillars-stage-stack">
                  {chapters.map((chapter, idx) => {
                    const isCurrent = activeIndex === idx;
                    return (
                      <article
                        key={chapter.id}
                        onFocusCapture={() => {
                          if (!isCurrent) scrollToChapter(idx);
                        }}
                        className={`${chapter.copyAnimClass} flex flex-col justify-center ${
                          isCurrent
                            ? "z-20 pointer-events-auto"
                            : "z-10 pointer-events-none"
                        }`}
                      >
                        <h2 className="heading-2 text-[#111827] dark:text-[#eef0f5]">
                          {chapter.title}
                        </h2>

                        <p className="mt-5 title-2 font-normal text-[#4b5565] dark:text-[#a3a9b8] max-w-[54ch]">
                          {chapter.description}
                        </p>

                        <ul className="mt-8 pt-6 border-t border-[#111827]/8 dark:border-[#eef0f5]/8 space-y-3 body-3 text-[#111827] dark:text-[#eef0f5] max-w-[56ch]">
                          {chapter.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-[#0074a3] dark:bg-[#38bdf8] mt-2.5 shrink-0"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-9 flex flex-wrap items-center gap-6">
                          <Link
                            href={chapter.primaryLink.href}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0074a3] hover:bg-[#005f87] dark:bg-[#38bdf8] dark:hover:bg-[#7dd3fc] dark:text-[#0b0d14] transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
                          >
                            <span>{chapter.primaryLink.label}</span>
                            <ArrowRight
                              className="w-4 h-4"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </Link>

                          <Link
                            href={chapter.secondaryLink.href}
                            className="inline-flex items-center gap-1.5 body-5 text-[#111827] dark:text-[#eef0f5] hover:text-[#0074a3] dark:hover:text-[#38bdf8] transition-colors duration-200"
                          >
                            <span>{chapter.secondaryLink.label}</span>
                            <ArrowRight
                              className="w-4 h-4"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          RESPONSIVE / REDUCED-MOTION / FALLBACK VERTICAL EDITORIAL SEQUENCE
          Automatically shown on mobile & tablet (< 1024px), under
          prefers-reduced-motion: reduce, or in browsers without
          @supports ((animation-timeline: view()) and (animation-range: entry)).
          ===================================================================== */}
      <div className="pillars-stacked-fallback py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
          {chapters.map((chapter) => (
            <article
              key={chapter.id}
              className="pillar-mobile-chapter grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              <div className="lg:col-span-5 flex items-center lg:flex-col lg:items-center lg:justify-center lg:text-center gap-4">
                <PillarEmblem
                  id={chapter.id}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-48 lg:h-48 -ml-2 lg:ml-0 shrink-0"
                />
                <span className="caption-2 font-mono tabular-nums text-[#647084] dark:text-[#858d9f]">
                  {chapter.metaLine}
                </span>
              </div>

              <div className="lg:col-span-7">
                <h2 className="heading-3 text-[#111827] dark:text-[#eef0f5]">
                  {chapter.title}
                </h2>

                <p className="mt-4 body-3 text-[#4b5565] dark:text-[#a3a9b8] max-w-[54ch]">
                  {chapter.description}
                </p>

                <ul className="mt-5 space-y-2.5 body-3 text-[#111827] dark:text-[#eef0f5]">
                  {chapter.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#0074a3] dark:bg-[#38bdf8] mt-2.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <Link
                    href={chapter.primaryLink.href}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0074a3] hover:bg-[#005f87] dark:bg-[#38bdf8] dark:hover:bg-[#7dd3fc] dark:text-[#0b0d14] transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
                  >
                    <span>{chapter.primaryLink.label}</span>
                    <ArrowRight
                      className="w-4 h-4"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href={chapter.secondaryLink.href}
                    className="inline-flex items-center gap-1.5 body-5 text-[#111827] dark:text-[#eef0f5] hover:text-[#0074a3] dark:hover:text-[#38bdf8] transition-colors duration-200"
                  >
                    <span>{chapter.secondaryLink.label}</span>
                    <ArrowRight
                      className="w-4 h-4"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
