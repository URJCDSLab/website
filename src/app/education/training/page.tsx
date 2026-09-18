import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import trainingCoursesData from "@/data/training_courses.json";
import { TrainingCourse } from "@/types";

export const metadata: Metadata = {
  title: "Professional training | Data Science Lab",
  description: "Specialized data science and engineering training programs for professionals.",
};

const courses = trainingCoursesData as TrainingCourse[];

export default function TrainingPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Professional training
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          At DSLAB, we design and deliver advanced, hands-on training for professionals, research groups, and corporate engineering teams. The catalog below showcases <strong>courses we have already successfully conducted</strong> across key data science disciplines.
        </p>

        {/* Custom course tailored callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0086BA]/10 via-slate-50 to-emerald-500/10 dark:from-[#0086BA]/20 dark:via-slate-900 dark:to-emerald-500/20 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Need custom training for your team?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              We design and deliver bespoke training programs tailored specifically to your organization&apos;s technical requirements, domain challenges, and scheduling needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0086BA] text-white hover:bg-[#0086BA]/90 transition-colors shrink-0 inline-flex items-center gap-1.5 shadow-sm"
          >
            Request custom training <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id || course.title}
            className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Course Image */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors mb-2 leading-snug">
                  {course.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
