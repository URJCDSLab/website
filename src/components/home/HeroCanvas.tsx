"use client";

import * as React from "react";
import { useTheme } from "next-themes";

interface DataPoint {
  nx: number;
  ny: number;
  cluster: "cerulean" | "neutral" | "support";
  phase: number;
  amp: number;
  radius: number;
}

interface PointerState {
  x: number;
  y: number;
  active: boolean;
}

interface HeroCanvasProps {
  paused?: boolean;
}

function createStructuredPoints(): DataPoint[] {
  const points: DataPoint[] = [];
  let seed = 4219;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < 26; i++) {
    points.push({
      nx: 0.56 + rand() * 0.4,
      ny: 0.12 + rand() * 0.44,
      cluster: "cerulean",
      phase: rand() * Math.PI * 2,
      amp: 2.5 + rand() * 3.5,
      radius: 2 + rand() * 1.4,
    });
  }

  for (let i = 0; i < 24; i++) {
    points.push({
      nx: 0.46 + rand() * 0.5,
      ny: 0.58 + rand() * 0.34,
      cluster: "neutral",
      phase: rand() * Math.PI * 2,
      amp: 2 + rand() * 3,
      radius: 1.8 + rand() * 1.2,
    });
  }

  const supportAnchors: Array<[number, number]> = [
    [0.53, 0.62],
    [0.64, 0.53],
    [0.75, 0.48],
    [0.86, 0.39],
    [0.93, 0.31],
  ];
  supportAnchors.forEach(([nx, ny], idx) => {
    points.push({
      nx,
      ny,
      cluster: "support",
      phase: idx * 1.15,
      amp: 2.2,
      radius: 3.2,
    });
  });

  return points;
}

function boundaryY(xNorm: number, t: number, compact: boolean): number {
  const base = compact ? 0.92 - xNorm * 0.18 : 0.88 - xNorm * 0.62;
  const ampScale = compact ? 0.5 : 1;
  const wave =
    (Math.sin(xNorm * 4.8 + t * 0.35) * 0.045 +
      Math.cos(xNorm * 2.4 - t * 0.22) * 0.025) *
    ampScale;
  return base + wave;
}

function drawSeparabilityField(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  points: DataPoint[],
  t: number,
  isDark: boolean,
  pointer: PointerState
): void {
  const isCompact = width < 768;

  const gridColor = isDark ? "rgba(238, 240, 245, 0.045)" : "rgba(17, 24, 39, 0.045)";
  const axisTickColor = isDark ? "rgba(238, 240, 245, 0.14)" : "rgba(17, 24, 39, 0.14)";
  const cerulean = isDark ? "#38bdf8" : "#0086BA";
  const ceruleanSoft = isDark ? "rgba(56, 189, 248, 0.24)" : "rgba(0, 134, 186, 0.2)";
  const ceruleanMargin = isDark ? "rgba(56, 189, 248, 0.11)" : "rgba(0, 134, 186, 0.11)";
  const neutralDot = isDark ? "rgba(163, 169, 184, 0.45)" : "rgba(75, 85, 101, 0.36)";
  const neutralEdge = isDark ? "rgba(163, 169, 184, 0.1)" : "rgba(75, 85, 101, 0.09)";
  const redAccent = "#E30613";
  const redRing = isDark ? "rgba(227, 6, 19, 0.34)" : "rgba(227, 6, 19, 0.28)";

  ctx.clearRect(0, 0, width, height);

  // 1. Orthographic coordinate grid
  const step = isCompact ? 56 : 72;
  ctx.beginPath();
  for (let x = step; x < width; x += step) {
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
  }
  for (let y = step; y < height; y += step) {
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(width, y + 0.5);
  }
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Crosshair ticks on the right hemisphere
  ctx.beginPath();
  const startCol = Math.floor((width * (isCompact ? 0.35 : 0.52)) / step) * step;
  for (let x = startCol; x < width; x += step * 2) {
    for (let y = step; y < height; y += step * 2) {
      ctx.moveTo(x - 3.5, y + 0.5);
      ctx.lineTo(x + 4.5, y + 0.5);
      ctx.moveTo(x + 0.5, y - 3.5);
      ctx.lineTo(x + 0.5, y + 4.5);
    }
  }
  ctx.strokeStyle = axisTickColor;
  ctx.lineWidth = 1;
  ctx.stroke();

  // 2. Kernel decision boundary & parallel SVM margin contours
  const startX = isCompact ? 0.04 : 0.36;
  const samples = 64;
  const drawContour = (offset: number, stroke: string, lineWidth: number, dashed: boolean) => {
    ctx.save();
    ctx.beginPath();
    if (dashed) ctx.setLineDash([4, 6]);
    for (let i = 0; i <= samples; i++) {
      const xNorm = startX + (1 - startX) * (i / samples);
      const px = xNorm * width;
      const py = (boundaryY(xNorm, t, isCompact) + offset) * height;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.restore();
  };

  const marginOffset = isCompact ? 0.045 : 0.085;
  drawContour(-marginOffset, ceruleanMargin, 1, true);
  drawContour(marginOffset, ceruleanMargin, 1, true);
  drawContour(0, ceruleanSoft, 1.5, false);

  // 3. Resolve point coordinates
  const resolved = points.map((pt) => {
    const shiftX = isCompact ? 0.06 + (pt.nx - 0.45) * 1.75 : pt.nx;
    const shiftY = isCompact ? 0.72 + pt.ny * 0.24 : pt.ny;

    let x = shiftX * width + Math.cos(t * 0.55 + pt.phase) * pt.amp;
    let y = shiftY * height + Math.sin(t * 0.48 + pt.phase) * pt.amp;

    if (pt.cluster === "support") {
      const anchorX = isCompact ? 0.14 + (pt.nx - 0.53) * 1.9 : pt.nx;
      x = anchorX * width;
      y = boundaryY(anchorX, t, isCompact) * height;
    }

    if (pointer.active) {
      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0 && dist < 130) {
        const push = ((130 - dist) / 130) * 9;
        x += (dx / dist) * push;
        y += (dy / dist) * push;
      }
    }

    return { ...pt, x, y };
  });

  // 4. Local k-NN edges
  const maxEdgeDist = isCompact ? 86 : 118;
  for (let i = 0; i < resolved.length; i++) {
    const a = resolved[i];
    if (a.x < 0 || a.x > width || a.y < 0 || a.y > height) continue;
    for (let j = i + 1; j < resolved.length; j++) {
      const b = resolved[j];
      if (a.cluster !== b.cluster && a.cluster !== "support" && b.cluster !== "support") {
        continue;
      }
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < maxEdgeDist) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle =
          a.cluster === "cerulean" && b.cluster === "cerulean"
            ? ceruleanMargin
            : neutralEdge;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  // 5. Render nodes & support vector rings
  for (const pt of resolved) {
    if (pt.x < -10 || pt.x > width + 10 || pt.y < -10 || pt.y > height + 10) continue;

    if (pt.cluster === "support") {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.radius + 5.5, 0, Math.PI * 2);
      ctx.strokeStyle = redRing;
      ctx.lineWidth = 1.25;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
      ctx.fillStyle = redAccent;
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
      ctx.fillStyle = pt.cluster === "cerulean" ? cerulean : neutralDot;
      ctx.fill();
    }
  }
}

export function HeroCanvas({ paused = false }: HeroCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  const pointsRef = React.useRef<DataPoint[]>([]);
  const timeRef = React.useRef(0);
  const pausedRef = React.useRef(paused);
  const isDarkRef = React.useRef(resolvedTheme === "dark");
  const reducedMotionRef = React.useRef(false);
  const syncLoopRef = React.useRef<(() => void) | null>(null);

  React.useEffect(() => {
    pausedRef.current = paused;
    syncLoopRef.current?.();
  }, [paused]);

  React.useEffect(() => {
    isDarkRef.current = resolvedTheme === "dark";
    syncLoopRef.current?.();
  }, [resolvedTheme]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    if (pointsRef.current.length === 0) {
      pointsRef.current = createStructuredPoints();
    }

    let animationFrameId = 0;
    let width = parent.clientWidth || window.innerWidth;
    let height = parent.clientHeight || 640;
    let isVisible = true;
    const pointer: PointerState = { x: -1000, y: -1000, active: false };

    const setupSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth || window.innerWidth;
      height = parent.clientHeight || 640;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupSize();

    const draw = (advance: boolean) => {
      if (advance) timeRef.current += 0.012;
      drawSeparabilityField(
        ctx,
        width,
        height,
        pointsRef.current,
        timeRef.current,
        isDarkRef.current,
        pointer
      );
    };

    const canRun = () =>
      !pausedRef.current && !reducedMotionRef.current && isVisible && !document.hidden;

    const tick = () => {
      if (!canRun()) {
        animationFrameId = 0;
        return;
      }
      draw(true);
      animationFrameId = requestAnimationFrame(tick);
    };

    const syncLoop = () => {
      if (canRun()) {
        if (!animationFrameId) animationFrameId = requestAnimationFrame(tick);
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
        draw(false);
      }
    };

    syncLoopRef.current = syncLoop;

    const handleMouseMove = (e: MouseEvent) => {
      if (pausedRef.current || reducedMotionRef.current) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 && pointer.x <= width && pointer.y >= 0 && pointer.y <= height;
    };
    const handleMouseLeave = () => {
      pointer.active = false;
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => {
      reducedMotionRef.current = mediaQuery.matches;
      syncLoop();
    };
    handleMotionChange();
    mediaQuery.addEventListener("change", handleMotionChange);

    const resizeObserver = new ResizeObserver(() => {
      setupSize();
      if (!canRun()) draw(false);
    });
    resizeObserver.observe(parent);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncLoop();
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(parent);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", syncLoop);

    syncLoop();

    return () => {
      syncLoopRef.current = null;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      mediaQuery.removeEventListener("change", handleMotionChange);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", syncLoop);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-scroll-canvas absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
