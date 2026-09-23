"use client";

import * as React from "react";
import { DiagramPopover } from "./DiagramPopover";

const STAGE_DESCRIPTIONS: Record<number | 'data', { title: string; desc: string; color: string }> = {
  1: {
    title: "Business understanding",
    desc: "Framing project objectives, success criteria, and key analytical requirements.",
    color: "#0086BA",
  },
  2: {
    title: "Data preparation",
    desc: "Ingesting, enrichment, normalizing, and feature-engineering datasets for modeling.",
    color: "#EAB308",
  },
  3: {
    title: "Modelling",
    desc: "Selecting, training, optimizing, and calibrating predictive and statistical models.",
    color: "#E30613",
  },
  4: {
    title: "Evaluation",
    desc: "Validating model performance against business metrics and statistical baselines.",
    color: "#16A34A",
  },
  5: {
    title: "Visualization",
    desc: "Translating quantitative discoveries into actionable dashboards and visual insights.",
    color: "#9333EA",
  },
  6: {
    title: "Deployment",
    desc: "Integrating validated models into production environments for automated decisions.",
    color: "#EA580C",
  },
  data: {
    title: "Data",
    desc: "The central core asset and ground truth connecting every phase of the lifecycle.",
    color: "#0086BA",
  },
};

const STAGE_ANCHORS: Record<number | 'data', { x: number; y: number; placement: 'top' | 'bottom' | 'left' | 'right' }> = {
  1: { x: 50, y: 15, placement: 'bottom' },
  2: { x: 80, y: 33, placement: 'left' },
  3: { x: 80, y: 67, placement: 'left' },
  4: { x: 50, y: 85, placement: 'top' },
  5: { x: 20, y: 67, placement: 'right' },
  6: { x: 20, y: 33, placement: 'right' },
  data: { x: 50, y: 50, placement: 'top' },
};

function LifecyclePopover({
  hoveredStage,
}: {
  hoveredStage: number | 'data' | null;
}) {
  if (!hoveredStage) return null;
  const current = STAGE_DESCRIPTIONS[hoveredStage];
  const anchor = STAGE_ANCHORS[hoveredStage];

  return (
    <DiagramPopover
      title={current.title}
      desc={current.desc}
      color={current.color}
      posX={anchor.x}
      posY={anchor.y}
      placement={anchor.placement}
    />
  );
}

export function DataScienceLifecycle() {
  const [hoveredStage, setHoveredStage] = React.useState<number | 'data' | null>(null);
  const center = { x: 270, y: 270 };

  const circleRadius = 158;
  const hexRadius = 62;

  // Helper to generate a pointing-up hexagon's vertices dynamically
  const getHexagonPoints = (cx: number, cy: number, r: number) => {
    return Array.from({ length: 6 }).map((_, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  };

  const stages = [
    {
      id: 1,
      text: ["Business", "understanding"],
      colorClass: "fill-[#0086BA] dark:fill-[#0284C7]",
      strokeClass: "stroke-white/20 dark:stroke-white/30",
      angle: -90,
      textColor: "fill-white",
    },
    {
      id: 2,
      text: ["Data", "preparation"],
      colorClass: "fill-[#EAB308] dark:fill-[#CCA80B]",
      strokeClass: "stroke-black/10 dark:stroke-white/25",
      angle: -30,
      textColor: "fill-white",
    },
    {
      id: 3,
      text: ["Modelling"],
      colorClass: "fill-[#E30613] dark:fill-[#EF4444]",
      strokeClass: "stroke-white/20 dark:stroke-white/30",
      angle: 30,
      textColor: "fill-white",
    },
    {
      id: 4,
      text: ["Evaluation"],
      colorClass: "fill-[#16A34A] dark:fill-[#22C55E]",
      strokeClass: "stroke-white/20 dark:stroke-white/30",
      angle: 90,
      textColor: "fill-white",
    },
    {
      id: 5,
      text: ["Visualization"],
      colorClass: "fill-[#9333EA] dark:fill-[#A855F7]",
      strokeClass: "stroke-white/20 dark:stroke-white/30",
      angle: 150,
      textColor: "fill-white",
    },
    {
      id: 6,
      text: ["Deployment"],
      colorClass: "fill-[#EA580C] dark:fill-[#F97316]",
      strokeClass: "stroke-white/20 dark:stroke-white/30",
      angle: 210,
      textColor: "fill-white",
    },
  ];

  // Helper to draw perfectly circular arrows between stages
  const renderArrow = (startAngle: number, endAngle: number) => {
    const padding = 23;
    const arrowheadGap = 4;

    const a1 = (startAngle + padding) * (Math.PI / 180);
    const a2 = (endAngle - padding - arrowheadGap) * (Math.PI / 180);

    const x1 = center.x + circleRadius * Math.cos(a1);
    const y1 = center.y + circleRadius * Math.sin(a1);
    const x2 = center.x + circleRadius * Math.cos(a2);
    const y2 = center.y + circleRadius * Math.sin(a2);

    return `M ${x1} ${y1} A ${circleRadius} ${circleRadius} 0 0 1 ${x2} ${y2}`;
  };

  return (
      <div className="w-full flex flex-col items-center justify-center h-full">
        <div className="relative w-full aspect-square max-w-[520px] flex items-center justify-center">
          <svg
              viewBox="40 40 460 460"
              className="w-full h-full select-none"
              role="img"
              aria-label="Typical Data Science project lifecycle flow"
          >
            <defs>
              <marker
                id="lifecycle-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" className="fill-[#0086BA] dark:fill-[#38BDF8] transition-colors duration-300" />
              </marker>
              <filter id="hex-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.2" />
              </filter>
            </defs>

            {/* Central Hexagon: Data */}
            <g
              filter="url(#hex-shadow)"
              onMouseEnter={() => setHoveredStage('data')}
              onMouseLeave={() => setHoveredStage(null)}
              className="cursor-default transition-transform duration-200 hover:scale-105"
              style={{ transformOrigin: `${center.x}px ${center.y}px` }}
            >
              {/* Subtle outer dashed orbit ring */}
              <polygon
                points={getHexagonPoints(center.x, center.y, hexRadius + 14)}
                className="fill-none stroke-slate-300 dark:stroke-[#38BDF8]/40"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Core Data hexagon */}
              <polygon
                points={getHexagonPoints(center.x, center.y, hexRadius + 6)}
                className="fill-slate-900 dark:fill-slate-800 stroke-slate-700/60 dark:stroke-slate-600/80 transition-colors duration-300"
                strokeWidth="2"
              />
              <text
                x={center.x}
                y={center.y + 7}
                textAnchor="middle"
                className="fill-white dark:fill-slate-100 font-extrabold text-[22px] pointer-events-none tracking-wide"
              >
                Data
              </text>
            </g>

            {/* Render Flow Arrows */}
            {stages.map((stage, index) => {
              const nextStage = stages[(index + 1) % stages.length];
              const endAngle = nextStage.angle < stage.angle ? nextStage.angle + 360 : nextStage.angle;

              return (
                  <path
                      key={`arrow-${stage.id}`}
                      d={renderArrow(stage.angle, endAngle)}
                      fill="none"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      markerEnd="url(#lifecycle-arrow)"
                      className="stroke-[#0086BA] dark:stroke-[#38BDF8] opacity-80 dark:opacity-90 transition-colors duration-300"
                  />
              );
            })}

            {/* Render Stages */}
            {stages.map((stage) => {
              const rad = stage.angle * (Math.PI / 180);
              const cx = center.x + circleRadius * Math.cos(rad);
              const cy = center.y + circleRadius * Math.sin(rad);

              return (
                  <g
                      key={stage.id}
                      filter="url(#hex-shadow)"
                      onMouseEnter={() => setHoveredStage(stage.id)}
                      onMouseLeave={() => setHoveredStage(null)}
                      className="transition-transform duration-200 hover:scale-105 cursor-default"
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                  >
                    <polygon
                      points={getHexagonPoints(cx, cy, hexRadius)}
                      strokeWidth="1.5"
                      className={`${stage.colorClass} ${stage.strokeClass} transition-colors duration-300`}
                    />

                    {stage.text.length === 1 ? (
                        <text x={cx} y={cy + 4.5} textAnchor="middle" className={`${stage.textColor} font-bold text-[15px] pointer-events-none`}>
                          {stage.text[0]}
                        </text>
                    ) : (
                        <>
                          <text x={cx} y={cy - 4} textAnchor="middle" className={`${stage.textColor} font-bold text-[14px] pointer-events-none`}>
                            {stage.text[0]}
                          </text>
                          <text x={cx} y={cy + 13} textAnchor="middle" className={`${stage.textColor} font-bold text-[14px] pointer-events-none`}>
                            {stage.text[1]}
                          </text>
                        </>
                    )}
                  </g>
              );
            })}
          </svg>
          <LifecyclePopover hoveredStage={hoveredStage} />
        </div>

        <p className="mt-2 text-sm text-center text-slate-500 dark:text-slate-400">
          Typical data science project lifecycle
        </p>
      </div>
  );
}
