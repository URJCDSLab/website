"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service or console
    console.error("Application error boundary caught:", error);
  }, [error]);

  return (
    <div className="py-24 sm:py-32 max-w-2xl mx-auto px-4 text-center space-y-6">
      <div className="text-6xl font-black text-[#E30613]">500</div>
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        Internal server error
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        An unexpected error occurred while loading this page. You can try refreshing the component or navigate back to the home page.
      </p>
      <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] transition-colors shadow-sm"
        >
          <RotateCcw className="w-4 h-4" /> Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}
