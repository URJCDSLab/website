"use client";

import * as React from "react";

interface PublicationsKpiCardsProps {
  totalCount: number;
  q1Count: number;
  journalCount: number;
  confCount: number;
  yearlyTotalStats: { year: number; count: number }[];
  yearlyQ1Stats: { year: number; count: number }[];
  yearlyJournalStats: { year: number; count: number }[];
  yearlyConfStats: { year: number; count: number }[];
}

function SparklineChart({
  data,
  gradientId,
  lineColor,
  gradientFrom,
  gradientTo,
}: {
  data: { year: number; count: number }[];
  gradientId: string;
  lineColor: string;
  gradientFrom: string;
  gradientTo: string;
}) {
  const width = 240;
  const height = 64;
  const maxVal = Math.max(...data.map((d) => d.count), 1);

  if (!data || data.length === 0) return null;

  // Zero horizontal padding so the sparkline reaches the absolute borders of the card
  const points = data.map((d, i) => {
    const x = data.length > 1 ? (i / (data.length - 1)) * width : width / 2;
    const y = height - 4 - (d.count / maxVal) * (height - 14);
    return { x, y, count: d.count, year: d.year };
  });

  let linePath = `M ${points[0].x} ${points[0].y}`;
  if (points.length === 1) {
    linePath = `M 0 ${points[0].y} L ${width} ${points[0].y}`;
  } else {
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = i > 0 ? points[i - 1] : points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = i < points.length - 2 ? points[i + 2] : p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = Math.max(2, Math.min(height - 2, p1.y + (p2.y - p0.y) / 6));
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = Math.max(2, Math.min(height - 2, p2.y - (p3.y - p1.y) / 6));

      linePath += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
  }

  const areaPath =
    points.length === 1
      ? `${linePath} L ${width} ${height} L 0 ${height} Z`
      : `${linePath} L ${width} ${height} L 0 ${height} Z`;
  const lastPoint = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-full block select-none"
      preserveAspectRatio="none"
      role="img"
      aria-label="Annual publication trend sparkline"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientFrom} stopOpacity={0.45} />
          <stop offset="70%" stopColor={gradientTo} stopOpacity={0.12} />
          <stop offset="100%" stopColor={gradientTo} stopOpacity={0.0} />
        </linearGradient>
      </defs>

      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path
        d={linePath}
        fill="none"
        stroke={lineColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastPoint.x} cy={lastPoint.y} r="3" fill={lineColor} />
    </svg>
  );
}

export function PublicationsKpiCards({
  totalCount,
  q1Count,
  journalCount,
  confCount,
  yearlyTotalStats,
  yearlyQ1Stats,
  yearlyJournalStats,
  yearlyConfStats,
}: PublicationsKpiCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      
      {/* Total Publications Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Total publications
          </span>
          <div className="mt-2 text-3xl sm:text-4xl font-black text-[#0086BA]">
            {totalCount}
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            2016–present scientific volume
          </div>
        </div>

        <div className="mt-4 -mx-6 -mb-6 h-16 w-[calc(100%+3rem)] block overflow-hidden">
          <SparklineChart
            data={yearlyTotalStats}
            gradientId="sparkline-total"
            lineColor="#0086BA"
            gradientFrom="#0086BA"
            gradientTo="#0086BA"
          />
        </div>
      </div>

      {/* Q1 Ranked Papers Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Q1 ranked papers
          </span>
          <div className="mt-2 text-3xl sm:text-4xl font-black text-amber-500 flex items-center gap-1.5">
            {q1Count}
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Top quartile journals (SJR)
          </div>
        </div>

        <div className="mt-4 -mx-6 -mb-6 h-16 w-[calc(100%+3rem)] block overflow-hidden">
          <SparklineChart
            data={yearlyQ1Stats}
            gradientId="sparkline-q1"
            lineColor="#F59E0B"
            gradientFrom="#F59E0B"
            gradientTo="#10B981"
          />
        </div>
      </div>

      {/* Journal Articles Card with embedded sparkline */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Journal articles
          </span>
          <div className="mt-2 text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
            {journalCount}
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Peer-reviewed scientific journals
          </div>
        </div>

        <div className="mt-4 -mx-6 -mb-6 h-16 w-[calc(100%+3rem)] block overflow-hidden">
          <SparklineChart
            data={yearlyJournalStats}
            gradientId="sparkline-journal"
            lineColor="#10B981"
            gradientFrom="#10B981"
            gradientTo="#10B981"
          />
        </div>
      </div>

      {/* Conferences Card with embedded sparkline */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Conferences
          </span>
          <div className="mt-2 text-3xl sm:text-4xl font-black text-indigo-500">
            {confCount}
          </div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Proceedings &amp; congresses
          </div>
        </div>

        <div className="mt-4 -mx-6 -mb-6 h-16 w-[calc(100%+3rem)] block overflow-hidden">
          <SparklineChart
            data={yearlyConfStats}
            gradientId="sparkline-conf"
            lineColor="#6366F1"
            gradientFrom="#6366F1"
            gradientTo="#6366F1"
          />
        </div>
      </div>

    </div>
  );
}
