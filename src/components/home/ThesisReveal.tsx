"use client";

import * as React from "react";

const THESIS_SENTENCE =
  "Theory matters only when it travels. We turn mathematical foundations into open teaching and operational systems.";

interface ThesisToken {
  id: string;
  word: string;
  startRange: string;
  endRange: string;
  hasTrailingSpace: boolean;
}

const RAW_WORDS = THESIS_SENTENCE.split(" ");

const THESIS_TOKENS: ThesisToken[] = RAW_WORDS.map((word, idx) => {
  const startPct = Math.round(16 + (idx / RAW_WORDS.length) * 32);
  const endPct = Math.min(58, startPct + 8);
  return {
    id: `thesis-w${idx + 1}-${word.toLowerCase().replace(/[^a-z0-9]/g, "")}`,
    word,
    startRange: `cover ${startPct}%`,
    endRange: `cover ${endPct}%`,
    hasTrailingSpace: idx < RAW_WORDS.length - 1,
  };
});

export function ThesisReveal() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) return;

    const section = sectionRef.current;
    if (!section) return;

    const wordNodes = Array.from(
      section.querySelectorAll<HTMLSpanElement>(".thesis-word")
    );
    if (wordNodes.length === 0) return;

    // Fallback for browsers without native CSS Scroll-Driven Animations:
    // DOM-direct rAF updates gated by IntersectionObserver (zero React re-renders).
    section.classList.add("thesis-js-fallback");

    let rafId = 0;
    let isIntersecting = false;

    const updateProgress = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.88 - rect.top) / (vh * 0.52))
      );
      const litCount = Math.round(progress * wordNodes.length);
      wordNodes.forEach((node, i) => {
        node.dataset.lit = i < litCount ? "true" : "false";
      });
    };

    const handleScroll = () => {
      if (!isIntersecting || rafId) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) updateProgress();
      },
      { threshold: 0, rootMargin: "80px 0px" }
    );
    observer.observe(section);

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      section.classList.remove("thesis-js-fallback");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Research mission"
      className="thesis-stage relative bg-[#f5f7fa] dark:bg-[#0b0d14] py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px]">
          <h2 className="heading-2 text-[#111827] dark:text-[#eef0f5]">
            {THESIS_TOKENS.map((token) => {
              const style = {
                "--word-start": token.startRange,
                "--word-end": token.endRange,
              } as React.CSSProperties;

              return (
                <React.Fragment key={token.id}>
                  <span className="thesis-word" style={style} data-lit="true">
                    {token.word}
                  </span>
                  {token.hasTrailingSpace ? " " : ""}
                </React.Fragment>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}
