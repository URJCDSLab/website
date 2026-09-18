import { Code2, ExternalLink } from "lucide-react";
// Adjust this import path depending on where you saved icons.tsx
import { GithubIcon } from "@/components/ui/icons";
import packagesData from "@/data/education_packages.json";
import { RPackage } from "@/types";

const rPackages = packagesData as RPackage[];

export function PackagesSection() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-[#E30613]" />
                    R packages &amp; toolboxes ({rPackages.length})
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Open-source libraries and algorithms authored by our team published on CRAN, GitHub, and academic repositories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rPackages.map((pkg) => (
                    <div
                        key={pkg.title}
                        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                {pkg.title}
                            </h3>
                            {pkg.authors && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    {pkg.authors}
                                </p>
                            )}
                            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {pkg.description}
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                            {pkg.cranUrl && (
                                <a
                                    href={pkg.cranUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
                                >
                                    View on CRAN <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                            {pkg.url && !pkg.cranUrl && (
                                <a
                                    href={pkg.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
                                >
                                    Access repository <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                            {pkg.githubUrl && (
                                <a
                                    href={pkg.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                                >
                                    {/* Using your custom component here */}
                                    <GithubIcon className="w-3.5 h-3.5" /> GitHub
                                </a>
                            )}
                            {pkg.paperUrl && (
                                <a
                                    href={pkg.paperUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                >
                                    Paper DOI <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}