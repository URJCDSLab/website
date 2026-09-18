import { BookOpen, ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons"; // Ensure this path matches where you saved icons.tsx
import booksData from "@/data/education_books.json";
import { Book } from "@/types";

const books = booksData as Book[];

export function BooksSection() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[#0086BA]" />
                    Open-access books ({books.length})
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Peer-reviewed textbooks authored by DSLAB professors for statistical modeling, machine learning, and data analysis.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <div
                        key={book.title}
                        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA]/60 dark:hover:border-[#0086BA]/60 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div>
              <span className="text-xs font-semibold text-[#0086BA] block mb-1">
                {book.date}
              </span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                {book.title}
                            </h3>
                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                {book.authors}
                            </p>
                            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {book.description}
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                            <a
                                href={book.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
                            >
                                Read online <ExternalLink className="w-3.5 h-3.5" />
                            </a>

                            {book.sourceUrl && (
                                <a
                                    href={book.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                                >
                                    <GithubIcon className="w-3.5 h-3.5" /> Source
                                </a>
                            )}

                            {book.pdfUrl && (
                                <a
                                    href={book.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                                >
                                    <FileText className="w-3.5 h-3.5" /> PDF
                                </a>
                            )}

                            {book.burjcUrl && (
                                <a
                                    href={book.burjcUrl}
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