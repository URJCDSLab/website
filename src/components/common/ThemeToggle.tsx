"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#0086BA] dark:hover:text-[#38bdf8] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-[0.98]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 motion-safe:transition-transform motion-safe:hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 motion-safe:transition-transform motion-safe:hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
