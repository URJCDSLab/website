"use client";

import * as React from "react";

export function DataScienceVennDiagram() {
  return (
      <div className="w-full flex flex-col items-center justify-center h-full">
        <div className="w-full aspect-square max-w-[520px] flex items-center justify-center">
          <svg
              viewBox="40 40 460 440"
              className="w-full h-full select-none"
              role="img"
              aria-label="Venn diagram showing the multidisciplinary foundations of Data Science"
          >
            {/* VENN CIRCLES */}
            <g>
              {/* Top Left: Hacking (Red) */}
              <circle cx="200" cy="200" r="140" fill="#E30613" fillOpacity="0.3" stroke="#E30613" strokeWidth="2.5" />
              {/* Top Right: Math (Teal) */}
              <circle cx="340" cy="200" r="140" fill="#0D9488" fillOpacity="0.3" stroke="#0D9488" strokeWidth="2.5" />
              {/* Bottom: Expertise (Purple) */}
              <circle cx="270" cy="320" r="140" fill="#7C3AED" fillOpacity="0.3" stroke="#7C3AED" strokeWidth="2.5" />
            </g>

            {/* PRIMARY DOMAIN LABELS */}
            <g className="font-bold text-[23px] fill-slate-900 dark:fill-slate-100 pointer-events-none">
              {/* Hacking (Rotated to fit circle edge) */}
              <text transform="rotate(-45, 120, 160)" x="140" y="170" textAnchor="middle" fill="#e30613">
                Hacking
              </text>
              <text transform="rotate(-45, 120, 160)" x="140" y="192" textAnchor="middle" fill="#e30613">
                skills
              </text>

              {/* Math & Stats (Rotated to fit circle edge) */}
              <text transform="rotate(45, 420, 160)" x="400" y="180" textAnchor="middle" fill="#0d9488">
                Math &amp; statistics
              </text>
              <text transform="rotate(45, 420, 160)" x="400" y="202" textAnchor="middle" fill="#0d9488">
                knowledge
              </text>

              {/* Substantive Expertise */}
              <text x="280" y="390" textAnchor="middle" fill="#7c3aed">
                Substantive
              </text>
              <text x="280" y="412" textAnchor="middle" fill="#7c3aed">
                expertise
              </text>
            </g>

            {/* INTERSECTION LABELS */}
            <g className="font-bold text-[16px] fill-slate-800 dark:fill-slate-100 pointer-events-none">
              {/* Machine Learning (Split into 2 lines) */}
              <text x="270" y="145" textAnchor="middle" fill="#784d4e">
                Machine
              </text>
              <text x="270" y="160" textAnchor="middle" fill="#784d4e">
                learning
              </text>

              {/* Danger Zone */}
              <text x="182" y="300" textAnchor="middle" fill="#b02080">
                Danger
              </text>
              <text x="182" y="315" textAnchor="middle" fill="#b02080">
                zone!
              </text>

              {/* Traditional Research */}
              <text x="358" y="300" textAnchor="middle" fill="#4567bb">
                Traditional
              </text>
              <text x="358" y="315" textAnchor="middle" fill="#4567bb">
                research
              </text>
            </g>

            {/* CENTER INTERSECTION: Data Science */}
            <g>
              <text x="270" y="235" textAnchor="middle" className="font-extrabold text-[24px] pointer-events-none tracking-wide">
                Data
              </text>
              <text x="270" y="262" textAnchor="middle" className="font-extrabold text-[24px] pointer-events-none tracking-wide">
                science
              </text>
            </g>
          </svg>
        </div>

        <p className="mt-2 text-sm text-center text-slate-500 dark:text-slate-400">
          Interdisciplinary nature of data science skills
        </p>
      </div>
  );
}