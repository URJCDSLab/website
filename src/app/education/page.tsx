import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { BooksSection } from "@/components/education/BooksSection";
import { PackagesSection } from "@/components/education/PackagesSection";
import { DashboardsSection } from "@/components/education/DashboardsSection";
import { SlidesSection } from "@/components/education/SlidesSection";
import { ExercisesSection } from "@/components/education/ExercisesSection";
import { createPageMetadata } from "@/lib/metadata";
import { CtaBanner } from "@/components/ui/CtaBanner";

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

      {/* CTA to Training */}
      <CtaBanner
        badge={{
          icon: GraduationCap,
          text: "Executive & specialized programs",
        }}
        title="Professional training courses"
        description="Master degrees, executive certifications, and university courses in data science and big data."
        buttonText="View training courses"
        buttonHref="/education/training/"
        variant="subtle"
      />

    </div>
  );
}
