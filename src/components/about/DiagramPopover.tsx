"use client";

import * as React from "react";

interface DiagramPopoverProps {
  title: string;
  desc: string;
  color: string;
  posX: number;
  posY: number;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

export function DiagramPopover({
  title,
  desc,
  color,
  posX,
  posY,
  placement,
}: DiagramPopoverProps) {
  const effectivePlacement = placement || (posX > 50 ? 'left' : 'right');

  let transformClass = "-translate-x-1/2 -translate-y-1/2";
  if (effectivePlacement === 'left') {
    transformClass = "-translate-x-[105%] -translate-y-1/2";
  } else if (effectivePlacement === 'right') {
    transformClass = "translate-x-3 -translate-y-1/2";
  } else if (effectivePlacement === 'top') {
    transformClass = "-translate-x-1/2 -translate-y-[105%]";
  } else if (effectivePlacement === 'bottom') {
    transformClass = "-translate-x-1/2 translate-y-3";
  }

  return (
    <div
      className={`pointer-events-none absolute z-30 transition-opacity duration-150 ease-out animate-in fade-in zoom-in-95 ${transformClass}`}
      style={{ left: `${posX}%`, top: `${posY}%` }}
    >
      <div className="bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xl rounded-xl p-3 w-[260px] text-xs">
        <div className="flex items-center gap-1.5 font-bold mb-1">
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
          <span className="text-slate-900 dark:text-white font-bold">{title}</span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs">
          {desc}
        </p>
      </div>
    </div>
  );
}
