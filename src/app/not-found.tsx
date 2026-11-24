import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 max-w-2xl mx-auto px-4 text-center space-y-6">
      <div className="text-6xl font-bold tabular-nums text-[#0086BA] dark:text-[#38bdf8]">404</div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Page not found
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] transition-colors active:scale-[0.98]"
        >
          <Home className="w-4 h-4" aria-hidden="true" /> Back to home
        </Link>
      </div>
    </div>
  );
}
