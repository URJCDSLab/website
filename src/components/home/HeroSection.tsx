import Link from "next/link";
import { FlaskConical, BookOpen, Users } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Dynamic interactive Canvas in background */}
      <HeroCanvas />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Pioneering intelligence in <span className="text-[#0086BA]">data science</span> &amp; <span className="text-[#E30613]">AI</span>
          </h1>

          {/* Slogan */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We foster cutting-edge research, academic training, and strategic knowledge transfer in machine learning, optimization, and complex systems.
          </p>

          {/* Action CTAs with integrated stats */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/research/publications/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <BookOpen className="w-4 h-4 text-[#0086BA]" />
              <span>480+ publications</span>
            </Link>

            <Link
              href="/about/team/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <Users className="w-4 h-4 text-emerald-500" />
              <span>25+ faculty &amp; researchers</span>
            </Link>

            <Link
              href="/research/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <FlaskConical className="w-4 h-4 text-[#E30613]" />
              <span>15 research lines</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
