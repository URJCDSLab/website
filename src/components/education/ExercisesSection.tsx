import { FileCode2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons"; // Ensure this path matches where you saved icons.tsx
import exercisesData from "@/data/education_exercises.json";
import { ExerciseSet } from "@/types";

const exercises = exercisesData as ExerciseSet[];

export function ExercisesSection() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <FileCode2 className="w-6 h-6 text-[#0086BA]" />
                    Exercises &amp; laboratories
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Practical problem sets, interactive lab notebooks, and datasets.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exercises.map((item) => (
                    <div
                        key={item.title}
                        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div>
              <span className="text-xs font-semibold text-[#0086BA] block mb-1">
                {item.date}
              </span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                {item.title}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                {item.authors}
                            </p>
                            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
                            >
                                <GithubIcon className="w-3.5 h-3.5" /> Repository
                            </a>
                            {item.burjcUrl && (
                                <a
                                    href={item.burjcUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                >
                                    BURJC <ExternalLink className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}