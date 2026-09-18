import { Presentation, ExternalLink } from "lucide-react";
import slidesData from "@/data/education_slides.json";
import { LectureSlide } from "@/types";

const slides = slidesData as LectureSlide[];

export function SlidesSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Presentation className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          Lecture slides &amp; short courses
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Slides and teaching repositories accompanying published books and specialized short courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide) => (
          <div
            key={slide.title}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                {slide.date}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {slide.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {slide.authors}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {slide.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
              >
                Access materials <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
