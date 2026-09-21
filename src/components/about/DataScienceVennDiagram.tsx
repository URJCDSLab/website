"use client";

import * as React from "react";

type HoverArea = 'hacking' | 'math' | 'expertise' | 'ml' | 'danger' | 'traditional' | 'ds' | null;

const INTERSECTION_LABELS = [
  {
    area: 'ml' as const,
    origin: '270px 152px',
    x: 270,
    y1: 145,
    y2: 160,
    line1: 'Machine',
    line2: 'learning',
    activeColor: '#b1cfcc',
    defaultColor: '#784d4e',
  },
  {
    area: 'danger' as const,
    origin: '182px 307px',
    x: 182,
    y1: 300,
    y2: 315,
    line1: 'Danger',
    line2: 'zone!',
    activeColor: '#f3cae3',
    defaultColor: '#b02080',
  },
  {
    area: 'traditional' as const,
    origin: '358px 307px',
    x: 358,
    y1: 300,
    y2: 315,
    line1: 'Traditional',
    line2: 'research',
    activeColor: '#c5d5f5',
    defaultColor: '#4567bb',
  },
] as const;

function VennDefs() {
  return (
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
  );
}

function VennBaseLayers({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      <g style={{ opacity: isHovered ? 0.15 : 1, transition: 'opacity 0.4s ease-out' }}>
        <use href="#venn-c1" fill="#E30613" fillOpacity="0.25" />
        <use href="#venn-c2" fill="#0D9488" fillOpacity="0.25" />
        <use href="#venn-c3" fill="#7C3AED" fillOpacity="0.25" />
      </g>

      <g style={{ opacity: isHovered ? 0.4 : 1, transition: 'opacity 0.4s ease-out' }} fill="none" strokeWidth="2.5">
        <use href="#venn-c1" stroke="#E30613" />
        <use href="#venn-c2" stroke="#0D9488" />
        <use href="#venn-c3" stroke="#7C3AED" />
      </g>
    </>
  );
}

function VennHighlights({ hovered }: { hovered: HoverArea }) {
  return (
    <g className="transition-opacity duration-300 pointer-events-none">
      {/* Dominios puros */}
      <g mask="url(#venn-not-c2)">
        <g mask="url(#venn-not-c3)">
          <use href="#venn-c1" fill="#e30613" style={{ opacity: hovered === 'hacking' ? 0.55 : 0, transition: 'opacity 0.3s' }} />
        </g>
      </g>

      <g mask="url(#venn-not-c1)">
        <g mask="url(#venn-not-c3)">
          <use href="#venn-c2" fill="#0d9488" style={{ opacity: hovered === 'math' ? 0.55 : 0, transition: 'opacity 0.3s' }} />
        </g>
      </g>

      <g mask="url(#venn-not-c1)">
        <g mask="url(#venn-not-c2)">
          <use href="#venn-c3" fill="#7c3aed" style={{ opacity: hovered === 'expertise' ? 0.55 : 0, transition: 'opacity 0.3s' }} />
        </g>
      </g>

      {/* Intersecciones dobles (Mezcla visual con superposición de los padres) */}
      <g clipPath="url(#venn-only-c2)" mask="url(#venn-not-c3)" style={{ opacity: hovered === 'ml' ? 1 : 0, transition: 'opacity 0.3s' }}>
        <use href="#venn-c1" fill="#e30613" fillOpacity="0.55" />
        <use href="#venn-c1" fill="#0d9488" fillOpacity="0.55" />
      </g>

      <g clipPath="url(#venn-only-c3)" mask="url(#venn-not-c2)" style={{ opacity: hovered === 'danger' ? 1 : 0, transition: 'opacity 0.3s' }}>
        <use href="#venn-c1" fill="#e30613" fillOpacity="0.55" />
        <use href="#venn-c1" fill="#7c3aed" fillOpacity="0.55" />
      </g>

      <g clipPath="url(#venn-only-c3)" mask="url(#venn-not-c1)" style={{ opacity: hovered === 'traditional' ? 1 : 0, transition: 'opacity 0.3s' }}>
        <use href="#venn-c2" fill="#0d9488" fillOpacity="0.55" />
        <use href="#venn-c2" fill="#7c3aed" fillOpacity="0.55" />
      </g>

      {/* Intersección central */}
      <g clipPath="url(#venn-only-c2)" style={{ opacity: hovered === 'ds' ? 1 : 0, transition: 'opacity 0.3s' }}>
        <g clipPath="url(#venn-only-c3)">
          <use href="#venn-c1" fill="#0086BA" fillOpacity="0.85" />
        </g>
      </g>
    </g>
  );
}

function VennAnimatedLabel({
  origin,
  isActive,
  children,
}: {
  origin: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <g
      style={{
        transformOrigin: origin,
        transform: isActive ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {children}
    </g>
  );
}

function VennTwoLineText({
  origin,
  isActive,
  x,
  y1,
  y2,
  line1,
  line2,
  activeColor,
  defaultColor,
  className,
}: {
  origin: string;
  isActive: boolean;
  x: number;
  y1: number;
  y2: number;
  line1: string;
  line2: string;
  activeColor: string;
  defaultColor: string;
  className?: string;
}) {
  const fillColor = isActive ? activeColor : defaultColor;

  return (
    <VennAnimatedLabel origin={origin} isActive={isActive}>
      <text
        x={x}
        y={y1}
        textAnchor="middle"
        className={className}
        style={{ fill: fillColor, transition: 'fill 0.3s' }}
      >
        {line1}
      </text>
      <text
        x={x}
        y={y2}
        textAnchor="middle"
        className={className}
        style={{ fill: fillColor, transition: 'fill 0.3s' }}
      >
        {line2}
      </text>
    </VennAnimatedLabel>
  );
}

function VennLabels({ hovered }: { hovered: HoverArea }) {
  return (
    <g className="pointer-events-none">
      {/* Textos exteriores (Colores fijos) */}
      <g className="font-bold text-[23px]">
        <VennAnimatedLabel origin="140px 181px" isActive={hovered === 'hacking'}>
          <text transform="rotate(-45, 120, 160)" x="140" y="170" textAnchor="middle" fill="#e30613">Hacking</text>
          <text transform="rotate(-45, 120, 160)" x="140" y="192" textAnchor="middle" fill="#e30613">skills</text>
        </VennAnimatedLabel>

        <VennAnimatedLabel origin="400px 191px" isActive={hovered === 'math'}>
          <text transform="rotate(45, 420, 160)" x="400" y="180" textAnchor="middle" fill="#0d9488">Math &amp; statistics</text>
          <text transform="rotate(45, 420, 160)" x="400" y="202" textAnchor="middle" fill="#0d9488">knowledge</text>
        </VennAnimatedLabel>

        <VennAnimatedLabel origin="280px 401px" isActive={hovered === 'expertise'}>
          <text x="280" y="390" textAnchor="middle" fill="#7c3aed">Substantive</text>
          <text x="280" y="412" textAnchor="middle" fill="#7c3aed">expertise</text>
        </VennAnimatedLabel>
      </g>

      {/* Textos de intersecciones (Transición a tonos pastel claros derivados de sus colores) */}
      <g className="font-bold text-[16px]">
        {INTERSECTION_LABELS.map((item) => (
          <VennTwoLineText
            key={item.area}
            origin={item.origin}
            isActive={hovered === item.area}
            x={item.x}
            y1={item.y1}
            y2={item.y2}
            line1={item.line1}
            line2={item.line2}
            activeColor={item.activeColor}
            defaultColor={item.defaultColor}
          />
        ))}
      </g>

      {/* Texto central (Transición a blanco puro) */}
      <VennTwoLineText
        origin="270px 248px"
        isActive={hovered === 'ds'}
        x={270}
        y1={235}
        y2={262}
        line1="Data"
        line2="science"
        activeColor="#ffffff"
        defaultColor="#0086BA"
        className="font-extrabold text-[24px] tracking-wide"
      />
    </g>
  );
}

function VennHitboxes({
  setHovered,
}: {
  setHovered: (area: HoverArea) => void;
}) {
  return (
    <g fill="transparent" pointerEvents="all">
      <use href="#venn-c1" onMouseEnter={() => setHovered('hacking')} onMouseLeave={() => setHovered(null)} />
      <use href="#venn-c2" onMouseEnter={() => setHovered('math')} onMouseLeave={() => setHovered(null)} />
      <use href="#venn-c3" onMouseEnter={() => setHovered('expertise')} onMouseLeave={() => setHovered(null)} />

      <g clipPath="url(#venn-only-c2)">
        <use href="#venn-c1" onMouseEnter={() => setHovered('ml')} onMouseLeave={() => setHovered(null)} />
      </g>
      <g clipPath="url(#venn-only-c3)">
        <use href="#venn-c1" onMouseEnter={() => setHovered('danger')} onMouseLeave={() => setHovered(null)} />
      </g>
      <g clipPath="url(#venn-only-c3)">
        <use href="#venn-c2" onMouseEnter={() => setHovered('traditional')} onMouseLeave={() => setHovered(null)} />
      </g>

      <g clipPath="url(#venn-only-c2)">
        <g clipPath="url(#venn-only-c3)">
          <use href="#venn-c1" onMouseEnter={() => setHovered('ds')} onMouseLeave={() => setHovered(null)} />
        </g>
      </g>
    </g>
  );
}

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
            <VennDefs />
            <VennBaseLayers isHovered={hovered !== null} />
            <VennHighlights hovered={hovered} />
            <VennLabels hovered={hovered} />
            <VennHitboxes setHovered={setHovered} />
          </svg>
        </div>

        {/* Pie / Título de la figura restaurado */}
        <p className="mt-2 text-sm text-center text-slate-500 dark:text-slate-400">
          Interdisciplinary nature of data science skills
        </p>
      </div>
  );
}
