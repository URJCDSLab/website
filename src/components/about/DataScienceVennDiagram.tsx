"use client";

import * as React from "react";

type HoverArea = 'hacking' | 'math' | 'expertise' | 'ml' | 'danger' | 'traditional' | 'ds' | null;

export function DataScienceVennDiagram() {
  const [hovered, setHovered] = React.useState<HoverArea>(null);

  return (
      <div className="w-full flex flex-col items-center justify-center h-full">
        <div className="w-full aspect-square max-w-[520px] flex items-center justify-center">
          <svg
              viewBox="40 40 460 440"
              className="w-full h-full select-none"
              role="img"
              aria-label="Venn diagram showing the multidisciplinary foundations of Data Science"
          >
            {/* 1. DEFINICIONES DE MÁSCARAS Y RECORTES */}
            <defs>
              <circle id="venn-c1" cx="200" cy="200" r="140" />
              <circle id="venn-c2" cx="340" cy="200" r="140" />
              <circle id="venn-c3" cx="270" cy="320" r="140" />

              <mask id="venn-not-c1">
                <rect x="-200" y="-200" width="1000" height="1000" fill="white" />
                <use href="#venn-c1" fill="black" />
              </mask>
              <mask id="venn-not-c2">
                <rect x="-200" y="-200" width="1000" height="1000" fill="white" />
                <use href="#venn-c2" fill="black" />
              </mask>
              <mask id="venn-not-c3">
                <rect x="-200" y="-200" width="1000" height="1000" fill="white" />
                <use href="#venn-c3" fill="black" />
              </mask>

              <clipPath id="venn-only-c1"><use href="#venn-c1" /></clipPath>
              <clipPath id="venn-only-c2"><use href="#venn-c2" /></clipPath>
              <clipPath id="venn-only-c3"><use href="#venn-c3" /></clipPath>
            </defs>

            {/* 2. RELLENOS BASE */}
            <g style={{ opacity: hovered ? 0.15 : 0.3, transition: 'opacity 0.4s ease-out' }}>
              <use href="#venn-c1" fill="#E30613" />
              <use href="#venn-c2" fill="#0D9488" />
              <use href="#venn-c3" fill="#7C3AED" />
            </g>

            {/* 3. BORDES BASE */}
            <g style={{ opacity: hovered ? 0.4 : 1, transition: 'opacity 0.4s ease-out' }} fill="none" strokeWidth="2.5">
              <use href="#venn-c1" stroke="#E30613" />
              <use href="#venn-c2" stroke="#0D9488" />
              <use href="#venn-c3" stroke="#7C3AED" />
            </g>

            {/* 4. CAPA DE ILUMINACIÓN EXCLUSIVA */}
            <g className="transition-opacity duration-300">
              <g mask="url(#venn-not-c2)"><g mask="url(#venn-not-c3)">
                <use href="#venn-c1" fill="#e30613" style={{ opacity: hovered === 'hacking' ? 0.5 : 0, transition: 'opacity 0.3s' }} />
              </g></g>
              
              <g mask="url(#venn-not-c1)"><g mask="url(#venn-not-c3)">
                <use href="#venn-c2" fill="#0d9488" style={{ opacity: hovered === 'math' ? 0.5 : 0, transition: 'opacity 0.3s' }} />
              </g></g>
              
              <g mask="url(#venn-not-c1)"><g mask="url(#venn-not-c2)">
                <use href="#venn-c3" fill="#7c3aed" style={{ opacity: hovered === 'expertise' ? 0.5 : 0, transition: 'opacity 0.3s' }} />
              </g></g>
              
              <g clipPath="url(#venn-only-c2)" mask="url(#venn-not-c3)">
                <use href="#venn-c1" fill="#784d4e" style={{ opacity: hovered === 'ml' ? 0.65 : 0, transition: 'opacity 0.3s' }} />
              </g>
              
              <g clipPath="url(#venn-only-c3)" mask="url(#venn-not-c2)">
                <use href="#venn-c1" fill="#b02080" style={{ opacity: hovered === 'danger' ? 0.65 : 0, transition: 'opacity 0.3s' }} />
              </g>
              
              <g clipPath="url(#venn-only-c3)" mask="url(#venn-not-c1)">
                <use href="#venn-c2" fill="#4567bb" style={{ opacity: hovered === 'traditional' ? 0.65 : 0, transition: 'opacity 0.3s' }} />
              </g>
              
              <g clipPath="url(#venn-only-c2)"><g clipPath="url(#venn-only-c3)">
                <use href="#venn-c1" fill="#0086BA" style={{ opacity: hovered === 'ds' ? 0.85 : 0, transition: 'opacity 0.3s' }} />
              </g></g>
            </g>

            {/* 5. TEXTOS */}
            <g className="pointer-events-none">
              {/* Textos exteriores con colores originales fijos */}
              <g className="font-bold text-[23px]">
                <g style={{ transformOrigin: '140px 181px', transform: hovered === 'hacking' ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <text transform="rotate(-45, 120, 160)" x="140" y="170" textAnchor="middle" fill="#e30613">Hacking</text>
                  <text transform="rotate(-45, 120, 160)" x="140" y="192" textAnchor="middle" fill="#e30613">skills</text>
                </g>

                <g style={{ transformOrigin: '400px 191px', transform: hovered === 'math' ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <text transform="rotate(45, 420, 160)" x="400" y="180" textAnchor="middle" fill="#0d9488">Math &amp; statistics</text>
                  <text transform="rotate(45, 420, 160)" x="400" y="202" textAnchor="middle" fill="#0d9488">knowledge</text>
                </g>

                <g style={{ transformOrigin: '280px 401px', transform: hovered === 'expertise' ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <text x="280" y="390" textAnchor="middle" fill="#7c3aed">Substantive</text>
                  <text x="280" y="412" textAnchor="middle" fill="#7c3aed">expertise</text>
                </g>
              </g>

              {/* Textos de intersecciones menores con colores originales fijos */}
              <g className="font-bold text-[16px]">
                <g style={{ transformOrigin: '270px 152px', transform: hovered === 'ml' ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <text x="270" y="145" textAnchor="middle" fill="#784d4e">Machine</text>
                  <text x="270" y="160" textAnchor="middle" fill="#784d4e">learning</text>
                </g>

                <g style={{ transformOrigin: '182px 307px', transform: hovered === 'danger' ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <text x="182" y="300" textAnchor="middle" fill="#b02080">Danger</text>
                  <text x="182" y="315" textAnchor="middle" fill="#b02080">zone!</text>
                </g>

                <g style={{ transformOrigin: '358px 307px', transform: hovered === 'traditional' ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <text x="358" y="300" textAnchor="middle" fill="#4567bb">Traditional</text>
                  <text x="358" y="315" textAnchor="middle" fill="#4567bb">research</text>
                </g>
              </g>

              {/* Texto central con transición a blanco en hover */}
              <g style={{ transformOrigin: '270px 248px', transform: hovered === 'ds' ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                <text x="270" y="235" textAnchor="middle" className="font-extrabold text-[24px] tracking-wide" style={{ fill: hovered === 'ds' ? '#ffffff' : '#0086BA', transition: 'fill 0.3s' }}>Data</text>
                <text x="270" y="262" textAnchor="middle" className="font-extrabold text-[24px] tracking-wide" style={{ fill: hovered === 'ds' ? '#ffffff' : '#0086BA', transition: 'fill 0.3s' }}>science</text>
              </g>
            </g>

            {/* 6. HITBOXES TRANSPARENTES */}
            <g fill="transparent" pointerEvents="all" className="cursor-pointer">
              <g onMouseEnter={() => setHovered('hacking')} onMouseLeave={() => setHovered(null)} mask="url(#venn-not-c2)"><g mask="url(#venn-not-c3)"><use href="#venn-c1" /></g></g>
              <g onMouseEnter={() => setHovered('math')} onMouseLeave={() => setHovered(null)} mask="url(#venn-not-c1)"><g mask="url(#venn-not-c3)"><use href="#venn-c2" /></g></g>
              <g onMouseEnter={() => setHovered('expertise')} onMouseLeave={() => setHovered(null)} mask="url(#venn-not-c1)"><g mask="url(#venn-not-c2)"><use href="#venn-c3" /></g></g>
              
              <g onMouseEnter={() => setHovered('ml')} onMouseLeave={() => setHovered(null)} clipPath="url(#venn-only-c2)" mask="url(#venn-not-c3)"><use href="#venn-c1" /></g>
              <g onMouseEnter={() => setHovered('danger')} onMouseLeave={() => setHovered(null)} clipPath="url(#venn-only-c3)" mask="url(#venn-not-c2)"><use href="#venn-c1" /></g>
              <g onMouseEnter={() => setHovered('traditional')} onMouseLeave={() => setHovered(null)} clipPath="url(#venn-only-c3)" mask="url(#venn-not-c1)"><use href="#venn-c2" /></g>
              
              <g onMouseEnter={() => setHovered('ds')} onMouseLeave={() => setHovered(null)} clipPath="url(#venn-only-c2)"><g clipPath="url(#venn-only-c3)"><use href="#venn-c1" /></g></g>
            </g>

          </svg>
        </div>

        <p className="mt-2 text-sm text-center text-slate-500 dark:text-slate-400">
          Interdisciplinary nature of data science skills
        </p>
      </div>
  );
}
