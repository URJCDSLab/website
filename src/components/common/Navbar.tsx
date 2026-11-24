"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavSubChild {
  label: string;
  href: string;
  desc?: string;
}

interface NavChild {
  label: string;
  href?: string;
  desc?: string;
  children?: NavSubChild[];
}

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About us", href: "/about/", desc: "Who we are and our institutional mission" },
      { label: "Team", href: "/about/team/", desc: "Faculty, researchers, and contributors" },
      { label: "Collaboration", href: "/collaboration/", desc: "Partner with us or join our lab" },
    ],
  },
  {
    label: "Education",
    children: [
      { label: "Learning resources", href: "/education/", desc: "Books, open R packages, slides, and tutorials" },
      { label: "Training", href: "/education/training/", desc: "Specialized courses and professional workshops" },
      { label: "Practicum", href: "/education/practicum/", desc: "University internships and student projects" },
      {
        label: "Teaching innovation",
        desc: "Pedagogical tools and gamified experiences",
        children: [
          { label: "DSLAB-TI", href: "/education/dslab-ti/", desc: "Virtual labs and educational initiatives" },
          { label: "¡CONECTA!", href: "/education/conecta/", desc: "Interactive educational network game" },
        ],
      },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Research lines", href: "/research/", desc: "Optimization, ML foundations, and complexity" },
      { label: "Research projects", href: "/research/projects/", desc: "Competitive public and national grants" },
      { label: "Research partners", href: "/research/partners/", desc: "Academic and scientific institutions" },
      { label: "Publications", href: "/research/publications/", desc: "490+ papers with SJR quartiles and topics" },
    ],
  },
  {
    label: "Consulting",
    children: [
      { label: "Consulting projects", href: "/consulting/", desc: "Applied data science for industry" },
      { label: "Clients", href: "/consulting/clients/", desc: "Companies and organizations we work with" },
    ],
  },
  { label: "Apps", href: "https://dslabapps.es/", external: true },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

function isPathMatch(pathname: string, href?: string): boolean {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const normalizedHref = href.endsWith("/") ? href : `${href}/`;
  return normalizedPath === normalizedHref;
}

function isSectionMatch(pathname: string, item: NavItem): boolean {
  if (!item.children) return isPathMatch(pathname, item.href);
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return item.children.some(
    (c) =>
      (c.href && normalizedPath.startsWith(c.href)) ||
      (c.children && c.children.some((sub) => normalizedPath.startsWith(sub.href)))
  );
}

interface DesktopDropdownProps {
  item: NavItem;
  pathname: string;
  isOpen: boolean;
  openSubDropdown: string | null;
  onTriggerClick: (label: string) => void;
  onPointerEnter: (e: React.PointerEvent, label: string) => void;
  onPointerLeave: (e: React.PointerEvent, label: string) => void;
  onBlur: (e: React.FocusEvent<HTMLDivElement>, label: string) => void;
  onSubDropdownChange: (label: string | null) => void;
}

function DesktopDropdown({
  item,
  pathname,
  isOpen,
  openSubDropdown,
  onTriggerClick,
  onPointerEnter,
  onPointerLeave,
  onBlur,
  onSubDropdownChange,
}: DesktopDropdownProps) {
  const isActive = isSectionMatch(pathname, item);
  const panelId = `nav-panel-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div
      className="relative"
      onPointerEnter={(e) => onPointerEnter(e, item.label)}
      onPointerLeave={(e) => onPointerLeave(e, item.label)}
      onBlur={(e) => onBlur(e, item.label)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onTriggerClick(item.label)}
        className={`flex items-center gap-1 pl-3.5 pr-2.5 py-1.5 rounded-lg text-sm transition-colors ${
          isActive
            ? "text-[#0086BA] dark:text-[#38bdf8] font-semibold bg-[#0086BA]/10 dark:bg-[#38bdf8]/14 ring-1 ring-inset ring-[#0086BA]/20 dark:ring-[#38bdf8]/25"
            : "font-medium text-slate-700 dark:text-slate-200 hover:text-[#0086BA] dark:hover:text-[#38bdf8] hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-4 h-4 opacity-70 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        className={`absolute left-0 top-full pt-2 w-80 transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible motion-safe:-translate-y-1 pointer-events-none"
        }`}
      >
        <ul className="rounded-xl p-2 bg-white/98 dark:bg-[#111827]/98 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-0.5">
          {item.children!.map((child) => {
            if (child.children) {
              const isSubOpen = openSubDropdown === child.label;
              const subPanelId = `nav-sub-${child.label.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <li
                  key={child.label}
                  className="relative"
                  onPointerEnter={(e) => {
                    if (e.pointerType !== "touch") onSubDropdownChange(child.label);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType !== "touch") onSubDropdownChange(null);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isSubOpen}
                    aria-controls={subPanelId}
                    onClick={() => onSubDropdownChange(isSubOpen ? null : child.label)}
                    className="w-full text-left flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {child.label}
                      </div>
                      {child.desc && (
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          {child.desc}
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" aria-hidden="true" />
                  </button>

                  <div
                    id={subPanelId}
                    className={`absolute left-full top-0 pl-1.5 w-72 transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isSubOpen
                        ? "opacity-100 visible translate-x-0"
                        : "opacity-0 invisible motion-safe:-translate-x-1 pointer-events-none"
                    }`}
                  >
                    <ul className="rounded-xl p-2 bg-white/98 dark:bg-[#111827]/98 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-0.5">
                      {child.children.map((sub) => {
                        const subActive = isPathMatch(pathname, sub.href);
                        return (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              aria-current={subActive ? "page" : undefined}
                              className={`block p-2.5 rounded-lg transition-colors ${
                                subActive
                                  ? "bg-[#0086BA]/10 text-[#0086BA] dark:text-[#38bdf8]"
                                  : "hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
                              }`}
                            >
                              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                {sub.label}
                              </div>
                              {sub.desc && (
                                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                  {sub.desc}
                                </div>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            }

            const childActive = isPathMatch(pathname, child.href);
            return (
              <li key={child.href}>
                <Link
                  href={child.href!}
                  aria-current={childActive ? "page" : undefined}
                  className={`block p-2.5 rounded-lg transition-colors group/item ${
                    childActive
                      ? "bg-[#0086BA]/10"
                      : "hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
                  }`}
                >
                  <div
                    className={`text-sm font-semibold transition-colors ${
                      childActive
                        ? "text-[#0086BA] dark:text-[#38bdf8]"
                        : "text-slate-900 dark:text-slate-100 group-hover/item:text-[#0086BA] dark:group-hover/item:text-[#38bdf8]"
                    }`}
                  >
                    {child.label}
                  </div>
                  {child.desc && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      {child.desc}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

interface MobileNavDrawerProps {
  pathname: string;
  openDropdown: string | null;
  openSubDropdown: string | null;
  onToggleDropdown: (label: string | null) => void;
  onToggleSubDropdown: (label: string | null) => void;
}

function MobileNavDrawer({
  pathname,
  openDropdown,
  openSubDropdown,
  onToggleDropdown,
  onToggleSubDropdown,
}: MobileNavDrawerProps) {
  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50/98 dark:bg-[#090d16]/98 backdrop-blur-xl px-4 pt-4 pb-8 space-y-2 min-h-[calc(100dvh-5rem)] max-h-[calc(100dvh-5rem)] overflow-y-auto"
    >
      {navItems.map((item) => {
        if (!item.children) {
          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2.5 px-2 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-[#0086BA] dark:hover:text-[#38bdf8] transition-colors"
              >
                <span>{item.label}</span>
                <ExternalLink className="w-4 h-4 opacity-70" aria-hidden="true" />
              </a>
            );
          }

          const isActive = isPathMatch(pathname, item.href);
          return (
            <Link
              key={item.label}
              href={item.href!}
              aria-current={isActive ? "page" : undefined}
              className={`block py-2.5 px-2 rounded-lg text-base font-semibold transition-colors ${
                isActive
                  ? "text-[#0086BA] dark:text-[#38bdf8] bg-[#0086BA]/10"
                  : "text-slate-900 dark:text-slate-100 hover:text-[#0086BA] dark:hover:text-[#38bdf8]"
              }`}
            >
              {item.label}
            </Link>
          );
        }

        const isMainOpen = openDropdown === item.label;
        return (
          <div key={item.label} className="border-b border-slate-200/80 dark:border-slate-800 pb-2">
            <button
              type="button"
              aria-expanded={isMainOpen}
              onClick={() => onToggleDropdown(isMainOpen ? null : item.label)}
              className="w-full flex items-center justify-between py-2.5 px-2 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100"
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMainOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {isMainOpen && (
              <div className="pl-4 space-y-1.5 pt-1 pb-1">
                {item.children.map((child) => {
                  if (child.children) {
                    const isSubOpen = openSubDropdown === child.label;
                    return (
                      <div key={child.label} className="flex flex-col">
                        <button
                          type="button"
                          aria-expanded={isSubOpen}
                          onClick={() => onToggleSubDropdown(isSubOpen ? null : child.label)}
                          className="w-full flex items-center justify-between py-2 px-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#0086BA] dark:hover:text-[#38bdf8] transition-colors"
                        >
                          <span>{child.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSubOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {isSubOpen && (
                          <div className="pl-3 space-y-1 pt-0.5 pb-1.5">
                            {child.children.map((sub) => {
                              const subActive = isPathMatch(pathname, sub.href);
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  aria-current={subActive ? "page" : undefined}
                                  className={`block py-1.5 px-2 rounded-lg text-sm font-medium transition-colors ${
                                    subActive
                                      ? "text-[#0086BA] dark:text-[#38bdf8] bg-[#0086BA]/10"
                                      : "text-slate-600 dark:text-slate-300 hover:text-[#0086BA] dark:hover:text-[#38bdf8]"
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  const childActive = isPathMatch(pathname, child.href);
                  return (
                    <Link
                      key={child.href}
                      href={child.href!}
                      aria-current={childActive ? "page" : undefined}
                      className={`block py-2 px-2 rounded-lg text-sm font-medium transition-colors ${
                        childActive
                          ? "text-[#0086BA] dark:text-[#38bdf8] bg-[#0086BA]/10"
                          : "text-slate-700 dark:text-slate-300 hover:text-[#0086BA] dark:hover:text-[#38bdf8]"
                      }`}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = React.useState<string | null>(null);
  const pinnedDropdownRef = React.useRef<string | null>(null);
  const navRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    pinnedDropdownRef.current = null;
  }, [pathname]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setMobileOpen(false);
        pinnedDropdownRef.current = null;
      }
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        pinnedDropdownRef.current = null;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const handleDesktopTriggerClick = (label: string) => {
    if (pinnedDropdownRef.current === label) {
      pinnedDropdownRef.current = null;
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      pinnedDropdownRef.current = label;
      setOpenDropdown(label);
    }
  };

  const handleDesktopPointerEnter = (e: React.PointerEvent, label: string) => {
    if (e.pointerType === "touch") return;
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;
    setOpenDropdown(label);
  };

  const handleDesktopPointerLeave = (e: React.PointerEvent, label: string) => {
    if (e.pointerType === "touch") return;
    if (pinnedDropdownRef.current !== label) {
      setOpenDropdown((prev) => (prev === label ? null : prev));
      setOpenSubDropdown(null);
    }
  };

  const handleDropdownBlur = (e: React.FocusEvent<HTMLDivElement>, label: string) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      if (pinnedDropdownRef.current === label) {
        pinnedDropdownRef.current = null;
      }
      setOpenDropdown((prev) => (prev === label ? null : prev));
      setOpenSubDropdown(null);
    }
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center group py-1.5 rounded-lg"
            aria-label="Data Science Lab home"
          >
            <img
              src="/assets/images/logos/DSLab_logo.svg"
              alt="Data Science Lab"
              className="h-8 sm:h-9.5 w-auto object-contain py-0.5 px-1 transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#0086BA] dark:hover:text-[#38bdf8] hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                  </a>
                );
              }

              if (!item.children) {
                const isActive = isPathMatch(pathname, item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-3.5 py-1.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "text-[#0086BA] dark:text-[#38bdf8] font-semibold bg-[#0086BA]/10 dark:bg-[#38bdf8]/14 ring-1 ring-inset ring-[#0086BA]/20 dark:ring-[#38bdf8]/25"
                        : "font-medium text-slate-700 dark:text-slate-200 hover:text-[#0086BA] dark:hover:text-[#38bdf8] hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  isOpen={openDropdown === item.label}
                  openSubDropdown={openSubDropdown}
                  onTriggerClick={handleDesktopTriggerClick}
                  onPointerEnter={handleDesktopPointerEnter}
                  onPointerLeave={handleDesktopPointerLeave}
                  onBlur={handleDropdownBlur}
                  onSubDropdownChange={setOpenSubDropdown}
                />
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-[0.98]"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <MobileNavDrawer
          pathname={pathname}
          openDropdown={openDropdown}
          openSubDropdown={openSubDropdown}
          onToggleDropdown={setOpenDropdown}
          onToggleSubDropdown={setOpenSubDropdown}
        />
      )}

      {/* CSS Scroll-Driven reading progress bar */}
      <div
        className="nav-scroll-progress pointer-events-none absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-[#0086BA] dark:bg-[#38bdf8]"
        aria-hidden="true"
      />
    </header>
  );
}
