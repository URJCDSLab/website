import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Hexagon } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { StatsCounter } from "./StatsCounter";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Dynamic interactive Canvas in background */}
      <HeroCanvas />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 border border-[#0086BA]/20 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Data Science Laboratory &bull; Rey Juan Carlos University</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Pioneering Intelligence in <span className="text-[#0086BA]">Data Science</span> &amp; <span className="text-[#E30613]">AI</span>
          </h1>

          {/* Slogan */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We foster cutting-edge research, academic training, and strategic knowledge transfer in machine learning, optimization, and complex systems.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/research/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shadow-lg shadow-[#0086BA]/25 transition-transform hover:-translate-y-0.5"
            >
              Research lines <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/research/publications/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 text-[#0086BA]" />
              Publications (480+)
            </Link>
          </div>
        </div>

        {/* Live Lab Stats Grid */}
        <div className="mt-12 sm:mt-16">
          <StatsCounter />
        </div>

      </div>
    </section>
  );
}
