"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global root error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 p-4 font-sans">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-6xl font-black text-[#E30613]">500</div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Internal server error
          </h1>
          <p className="text-slate-600 text-sm">
            A critical system error occurred. You can retry the application or reload the page.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
