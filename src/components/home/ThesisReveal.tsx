"use client";

import * as React from "react";

const THESIS_SENTENCE =
  "Theory matters only when it travels. We turn mathematical foundations into open teaching and operational systems.";

const THESIS_WORDS = THESIS_SENTENCE.split(" ");

export function ThesisReveal() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [useJsFallback, setUseJsFallback] = React.useState(false);
  const [litCount, setLitCount] = React.useState(THESIS_WORDS.length);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const supportsNativeViewTimeline = CSS.supports(
      "(animation-timeline: view()) and (animation-range: entry)"
    );
    if (supportsNativeViewTimeline) return;

    // Fallback for browsers without native CSS Scroll-Driven Animations:
    // rAF-throttled progress gated by IntersectionObserver so zero work runs off-screen.
    setUseJsFallback(true);
    setLitCount(0);

    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    let isIntersecting = false;

    const updateProgress = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // Maps section center traveling from 88% viewport height to 38% viewport height
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.88 - rect.top) / (vh * 0.52))
      );
      const nextLit = Math.round(progress * THESIS_WORDS.length);
      setLitCount(nextLit);
    };

    const handleScroll = () => {
      if (!isIntersecting || rafId) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          updateProgress();
        }
      },
      { threshold: 0, rootMargin: "80px 0px" }
    );
    observer.observe(section);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Research mission"
      className={`thesis-stage relative bg-[#f5f7fa] dark:bg-[#0b0d14] py-24 sm:py-28 lg:py-32 ${
        useJsFallback ? "thesis-js-fallback" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px]">
          <h2 className="heading-2 text-[#111827] dark:text-[#eef0f5]">
            {THESIS_WORDS.map((word, index) => {
              const total = THESIS_WORDS.length;
              const startPct = Math.round(16 + (index / total) * 32);
              const endPct = Math.min(58, startPct + 8);
              const style = {
                "--word-start": `cover ${startPct}%`,
                "--word-end": `cover ${endPct}%`,
              } as React.CSSProperties;

              return (
                <React.Fragment key={`${word}-${index}`}>
                  <span
                    className="thesis-word"
                    style={style}
                    data-lit={index < litCount ? "true" : "false"}
                  >
                    {word}
                  </span>
                  {index < total - 1 ? " " : ""}
                </React.Fragment>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}
