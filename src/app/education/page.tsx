import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { BooksSection } from "@/components/education/BooksSection";
import { PackagesSection } from "@/components/education/PackagesSection";
import { DashboardsSection } from "@/components/education/DashboardsSection";
import { SlidesSection } from "@/components/education/SlidesSection";
import { ExercisesSection } from "@/components/education/ExercisesSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Learning Resources",
  description:
    "Open-access books, CRAN R packages, interactive web dashboards, slides, and hands-on exercises created by Data Science Lab URJC.",
  path: "/education/",
});

export default function EducationPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Learning resources
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Explore DSLAB’s curated collection of open-access books, CRAN R packages, interactive web apps, and instructional materials designed to empower university students, researchers, and data science professionals.
        </p>
      </div>

      {/* Modular sections */}
      <BooksSection />
      <PackagesSection />
      <DashboardsSection />
      <SlidesSection />
      <ExercisesSection />

      {/* Professional Training Banner */}
      <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] mb-2">
            <GraduationCap className="w-4 h-4" />
            Executive &amp; specialized programs
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Professional training courses
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Master degrees, executive certifications, and university courses in data science and big data.
          </p>
        </div>
        <Link
          href="/education/training/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shrink-0 transition-colors shadow-md"
        >
          View training courses <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
