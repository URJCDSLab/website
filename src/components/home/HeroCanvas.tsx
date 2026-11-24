"use client";

import * as React from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isRedNode: boolean;
}

interface HeroCanvasProps {
  paused?: boolean;
}

export function HeroCanvas({ paused = false }: HeroCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  // Persistent refs so toggling Play/Pause or switching theme NEVER resets particle positions
  const particlesRef = React.useRef<Particle[]>([]);
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
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let animationFrameId = 0;
    let width = parent.clientWidth || window.innerWidth;
    let height = parent.clientHeight || 560;
    let isVisible = true;
    const maxDistance = 128;

    const setupSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth || window.innerWidth;
      height = parent.clientHeight || 560;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupSize();

    // Initialize particles once and preserve them across pause/resume & theme changes
    if (particlesRef.current.length === 0) {
      const particleCount = Math.floor(Math.min(width * 0.065, 76));
      const initial: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        const isRed = i % 9 === 0;
        initial.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          radius: isRed ? 3.2 : Math.random() * 1.8 + 1.4,
          isRedNode: isRed,
        });
      }
      particlesRef.current = initial;
    }

    const mouse = { x: -1000, y: -1000, radius: 135 };

    const handleMouseMove = (e: MouseEvent) => {
      if (pausedRef.current || reducedMotionRef.current) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const drawFrame = (advance: boolean) => {
      const particles = particlesRef.current;
      const isDark = isDarkRef.current;
      const primaryColor = isDark ? "#38bdf8" : "#0086BA";
      const accentColor = "#E30613";
      const primaryLineRgb = isDark ? "56, 189, 248" : "0, 134, 186";

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (advance) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          const dxMouse = mouse.x - p.x;
          const dyMouse = mouse.y - p.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);
          if (distMouse > 0 && distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius;
            p.x -= (dxMouse / distMouse) * force * 2.4;
            p.y -= (dyMouse / distMouse) * force * 2.4;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isRedNode ? accentColor : primaryColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.3 : 0.18);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle =
              p.isRedNode || p2.isRedNode
                ? `rgba(227, 6, 19, ${alpha * 0.75})`
                : `rgba(${primaryLineRgb}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (advance) {
          const distMouse = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (distMouse < mouse.radius) {
            const alpha = (1 - distMouse / mouse.radius) * (isDark ? 0.42 : 0.32);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${primaryLineRgb}, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }
    };

    const canRun = () =>
      !pausedRef.current && !reducedMotionRef.current && isVisible && !document.hidden;

    const tick = () => {
      if (!canRun()) {
        animationFrameId = 0;
        return;
      }
      drawFrame(true);
      animationFrameId = requestAnimationFrame(tick);
    };

    const syncLoop = () => {
      if (canRun()) {
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(tick);
        }
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
        // Redraw frozen particles in place (e.g. on pause or theme switch) without advancing
        drawFrame(false);
      }
    };

    syncLoopRef.current = syncLoop;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => {
      reducedMotionRef.current = mediaQuery.matches;
      syncLoop();
    };
    handleMotionChange();
    mediaQuery.addEventListener("change", handleMotionChange);

    const resizeObserver = new ResizeObserver(() => {
      setupSize();
      for (const p of particlesRef.current) {
        p.x = Math.min(Math.max(p.x, 0), width);
        p.y = Math.min(Math.max(p.y, 0), height);
      }
      if (!canRun()) {
        drawFrame(false);
      }
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

    const handleVisibilityChange = () => syncLoop();

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    syncLoop();

    return () => {
      syncLoopRef.current = null;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      mediaQuery.removeEventListener("change", handleMotionChange);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-scroll-canvas absolute inset-0 w-full h-full pointer-events-none opacity-75 dark:opacity-80"
      aria-hidden="true"
    />
  );
}
