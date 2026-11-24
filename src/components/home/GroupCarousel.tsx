"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface GroupCarouselProps {
  photos: string[];
}

export function GroupCarousel({ photos }: GroupCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userPaused, setUserPaused] = React.useState(false);
  const [hoverPaused, setHoverPaused] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  const total = photos.length;

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const nextSlide = React.useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = React.useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const isAutoplayActive = !userPaused && !hoverPaused && !prefersReducedMotion && total > 1;

  React.useEffect(() => {
    if (!isAutoplayActive) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplayActive, total]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  if (total === 0) return null;

  const progressScale = (currentIndex + 1) / total;

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 dark:border-slate-800 bg-slate-900 group"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Data Science Lab group gallery"
    >
      {/* Native 4:3 frame matches every group image (1.33 ratio) so zero heads are cropped */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {photos.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${total}`}
            >
              <img
                src={src}
                alt={`Data Science Lab research team, slide ${index + 1} of ${total}`}
                className="w-full h-full object-cover object-center"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Integrated Floating Prev / Next Controls */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/45 hover:bg-slate-950/75 text-white border border-white/15 backdrop-blur-md shadow-md opacity-85 sm:opacity-75 group-hover:opacity-100 focus-visible:opacity-100 transition-[opacity,background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/45 hover:bg-slate-950/75 text-white border border-white/15 backdrop-blur-md shadow-md opacity-85 sm:opacity-75 group-hover:opacity-100 focus-visible:opacity-100 transition-[opacity,background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Discreet Pause / Play Floating Control (WCAG 2.2.2) */}
        {!prefersReducedMotion && total > 1 && (
          <button
            type="button"
            onClick={() => setUserPaused((prev) => !prev)}
            aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
            title={userPaused ? "Play slideshow" : "Pause slideshow"}
            className="absolute bottom-3.5 right-3.5 z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-950/45 hover:bg-slate-950/75 text-white border border-white/15 backdrop-blur-md shadow-md opacity-80 group-hover:opacity-100 focus-visible:opacity-100 transition-[opacity,background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95"
          >
            {userPaused ? (
              <Play className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Pause className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        )}

        {/* Ultra-slim integrated bottom progress line */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 h-1 bg-slate-950/35 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="h-full w-full bg-[#38bdf8] origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `scaleX(${progressScale})` }}
          />
        </div>
      </div>
    </div>
  );
}
