import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 max-w-2xl mx-auto px-4 text-center space-y-6">
      <div className="text-6xl font-black text-[#0086BA]">404</div>
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        Page Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] transition-colors"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
