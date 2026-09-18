"use client";

import * as React from "react";

export function DataScienceLifecycle() {
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
    { id: 1, text: ["Business", "understanding"], color: "#0086BA", angle: -90, textColor: "fill-white" },
    { id: 2, text: ["Data", "preparation"], color: "#EAB308", angle: -30, textColor: "fill-slate-900" },
    { id: 3, text: ["Modelling"], color: "#E30613", angle: 30, textColor: "fill-white" },
    { id: 4, text: ["Evaluation"], color: "#16A34A", angle: 90, textColor: "fill-white" },
    { id: 5, text: ["Visualization"], color: "#9333EA", angle: 150, textColor: "fill-white" },
    { id: 6, text: ["Deployment"], color: "#EA580C", angle: 210, textColor: "fill-white" },
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
        <div className="w-full aspect-square max-w-[520px] flex items-center justify-center">
          <svg
              viewBox="40 40 460 460"
              className="w-full h-full select-none"
              role="img"
              aria-label="Typical Data Science project lifecycle flow"
          >
            <defs>
              <marker id="lifecycle-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#0086BA" />
              </marker>
              <filter id="hex-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* Central Hexagon: Data */}
            <g filter="url(#hex-shadow)">
              <polygon points={getHexagonPoints(center.x, center.y, hexRadius + 8)} className="fill-slate-900 dark:fill-slate-950" />
              <text x={center.x} y={center.y + 7} textAnchor="middle" className="fill-white font-extrabold text-[22px] pointer-events-none tracking-wide">
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
                      stroke="#0086BA"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      markerEnd="url(#lifecycle-arrow)"
                      className="opacity-90"
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
                      className="transition-transform duration-200 hover:scale-105"
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                  >
                    <polygon points={getHexagonPoints(cx, cy, hexRadius)} fill={stage.color} />

                    {stage.text.length === 1 ? (
                        <text x={cx} y={cy + 4.5} textAnchor="middle" className={`${stage.textColor} font-bold text-[14px] pointer-events-none`}>
                          {stage.text[0]}
                        </text>
                    ) : (
                        <>
                          <text x={cx} y={cy - 4} textAnchor="middle" className={`${stage.textColor} font-bold text-[13px] pointer-events-none`}>
                            {stage.text[0]}
                          </text>
                          <text x={cx} y={cy + 13} textAnchor="middle" className={`${stage.textColor} font-bold text-[13px] pointer-events-none`}>
                            {stage.text[1]}
                          </text>
                        </>
                    )}
                  </g>
              );
            })}
          </svg>
        </div>

        <p className="mt-2 text-sm text-center text-slate-500 dark:text-slate-400">
          Typical data science project lifecycle
        </p>
      </div>
  );
}