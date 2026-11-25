import fs from "node:fs";
import path from "node:path";

interface ThemeLogoProps {
  src: string;
  alt: string;
  className?: string;
  /** Unique suffix if the same SVG renders multiple times on one page */
  instanceKey?: string;
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toSafeSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function prepareInlineSvg(
  rawSvg: string,
  prefix: string,
  alt: string,
  className: string
): string {
  let svg = rawSvg
    .replace(/^\uFEFF/, "")
    .replace(/<\?xml[\s\S]*?\?>/gi, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();

  // Strip standalone `color-scheme:light dark;` inside our theme style block so the
  // inlined SVG inherits `color-scheme: light` or `color-scheme: dark` directly from
  // `<html class="light|dark">` (making native `light-dark()` respond to next-themes).
  svg = svg.replace(
    /(<style\b[^>]*data-dslab-theme="true"[^>]*>)([\s\S]*?)(<\/style>)/gi,
    (_m, open, css, close) =>
      `${open}${css.replace(/color-scheme\s*:\s*light\s+dark\s*;?/gi, "")}${close}`
  );

  // 1. Collect and scope internal CSS classes from non-theme <style> blocks
  const internalClasses = new Set<string>();
  svg.replace(
    /<style\b(?![^>]*data-dslab-theme)[^>]*>([\s\S]*?)<\/style>/gi,
    (_m, css: string) => {
      for (const match of css.matchAll(/\.([A-Za-z_-][A-Za-z0-9_-]*)/g)) {
        const name = match[1];
        if (!name.startsWith("dslab-svg-")) {
          internalClasses.add(name);
        }
      }
      return "";
    }
  );

  if (internalClasses.size > 0) {
    const sortedClasses = [...internalClasses].sort((a, b) => b.length - a.length);

    svg = svg.replace(
      /(<style\b(?![^>]*data-dslab-theme)[^>]*>)([\s\S]*?)(<\/style>)/gi,
      (_m, open: string, css: string, close: string) => {
        let scopedCss = css;
        for (const cls of sortedClasses) {
          const re = new RegExp(`\\.${escapeRegExp(cls)}(?![A-Za-z0-9_-])`, "g");
          scopedCss = scopedCss.replace(re, `.${prefix}${cls}`);
        }
        return `${open}${scopedCss}${close}`;
      }
    );

    svg = svg.replace(/\bclass="([^"]*)"/g, (_m, attrVal: string) => {
      const next = attrVal
        .split(/\s+/)
        .filter(Boolean)
        .map((token) => (internalClasses.has(token) ? `${prefix}${token}` : token))
        .join(" ");
      return `class="${next}"`;
    });
  }

  // 2. Collect and scope internal IDs so gradients, masks, and clipPaths never collide
  const ids = new Set<string>();
  for (const match of svg.matchAll(/\bid="([^"]+)"/g)) {
    ids.add(match[1]);
  }

  if (ids.size > 0) {
    const sortedIds = [...ids].sort((a, b) => b.length - a.length);
    for (const id of sortedIds) {
      const esc = escapeRegExp(id);
      const nextId = `${prefix}${id}`;
      svg = svg
        .replace(new RegExp(`\\bid="${esc}"`, "g"), `id="${nextId}"`)
        .replace(new RegExp(`url\\(#${esc}\\)`, "g"), `url(#${nextId})`)
        .replace(
          new RegExp(`((?:xlink:)?href=["'])#${esc}(["'])`, "g"),
          `$1#${nextId}$2`
        );
    }
  }

  // 3. Extract viewBox dimensions so intrinsic aspect ratio works cleanly alongside CSS sizing
  const safeAlt = alt
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  svg = svg.replace(/<svg\b([^>]*)>/i, (_full, rawAttrs: string) => {
    const vbMatch = rawAttrs.match(/\bviewBox="([^"]+)"/i);
    let vbW: string | null = null;
    let vbH: string | null = null;
    if (vbMatch) {
      const parts = vbMatch[1].trim().split(/[\s,]+/);
      if (parts.length === 4) {
        vbW = parts[2];
        vbH = parts[3];
      }
    }

    // Preserve any existing root class (like `dslab-svg-urjc`)
    const existingClassMatch = rawAttrs.match(/\bclass="([^"]*)"/i);
    const existingClass = existingClassMatch ? existingClassMatch[1] : "";
    const mergedClass = [existingClass, className].filter(Boolean).join(" ");

    let attrs = rawAttrs
      .replace(/\bclass="[^"]*"/gi, "")
      .replace(/\bwidth="[^"]*"/gi, "")
      .replace(/\bheight="[^"]*"/gi, "")
      .replace(/\brole="[^"]*"/gi, "")
      .replace(/\baria-label="[^"]*"/gi, "")
      .trim();

    if (vbW && vbH) {
      let numW = Number.parseFloat(vbW);
      let numH = Number.parseFloat(vbH);
      if (Number.isFinite(numW) && Number.isFinite(numH) && numW > 0 && numH > 0) {
        // Ensure compact viewBoxes (e.g. 100x25) can scale cleanly up to CSS max-h / max-w bounds
        const maxDim = Math.max(numW, numH);
        if (maxDim < 400) {
          const factor = 400 / maxDim;
          numW = Math.round(numW * factor);
          numH = Math.round(numH * factor);
        }
        attrs += ` width="${numW}" height="${numH}"`;
      } else {
        attrs += ` width="${vbW}" height="${vbH}"`;
      }
    }

    return `<svg ${attrs} class="${mergedClass}" role="img" aria-label="${safeAlt}">`;
  });

  return svg;
}

export function ThemeLogo({
  src,
  alt,
  className = "max-h-20 max-w-[85%] w-auto h-auto",
  instanceKey = "",
}: ThemeLogoProps) {
  if (src.toLowerCase().endsWith(".svg") && src.startsWith("/")) {
    const filePath = path.join(process.cwd(), "public", src.replace(/^\/+/, ""));
    if (fs.existsSync(filePath)) {
      const rawSvg = fs.readFileSync(filePath, "utf8");
      const slug = toSafeSlug(
        `${path.basename(src, ".svg")}-${instanceKey || "default"}`
      );
      const inlineSvg = prepareInlineSvg(rawSvg, `s_${slug}_`, alt, className);
      return (
        <span
          className="contents"
          dangerouslySetInnerHTML={{ __html: inlineSvg }}
        />
      );
    }
  }

  return <img src={src} alt={alt} className={`${className} object-contain`} />;
}
