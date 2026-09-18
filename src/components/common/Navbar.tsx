"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavChild {
  label: string;
  href?: string;
  desc?: string;
  children?: { label: string; href: string; desc?: string }[];
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
        ]
      },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Research lines", href: "/research/", desc: "Optimization, ML foundations, and complexity" },
      { label: "Research projects", href: "/research/projects/", desc: "Competitive public and national grants" },
      { label: "Research partners", href: "/research/partners/", desc: "Academic and scientific institutions" },
      { label: "Publications", href: "/research/publications/", desc: "480+ papers with SJR quartiles and topics" },
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

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [pathname]);

  return (
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center group py-1.5" aria-label="Data Science Lab home">
              <img
                  src="/assets/images/logos/DSLab_logo.svg"
                  alt="Data Science Lab"
                  className="h-8 sm:h-9.5 w-auto object-contain py-0.5 px-1 transition-transform duration-200 group-hover:opacity-95"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                // Standard Links & External
                if (item.external) {
                  return (
                      <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#0086BA] dark:hover:text-[#0086BA] hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                  );
                }

                if (!item.children) {
                  const isActive = pathname === item.href;
                  return (
                      <Link
                          key={item.label}
                          href={item.href!}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              isActive
                                  ? "text-[#0086BA] font-semibold"
                                  : "text-slate-700 dark:text-slate-200 hover:text-[#0086BA] dark:hover:text-[#0086BA] hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                          }`}
                      >
                        {item.label}
                      </Link>
                  );
                }

                // Dropdowns
                // Calculate if any child or sub-child matches the current active route
                const isActive = item.children.some(
                    (c) =>
                        (c.href && pathname.startsWith(c.href)) ||
                        (c.children && c.children.some((sub) => pathname.startsWith(sub.href)))
                );

                return (
                    <div
                        key={item.label}
                        className="relative group/main"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              isActive
                                  ? "text-[#0086BA] font-semibold"
                                  : "text-slate-700 dark:text-slate-200 hover:text-[#0086BA] dark:hover:text-[#0086BA] hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                          }`}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-hover/main:rotate-180 opacity-70" />
                      </button>

                      {/* Level 1 Dropdown Menu */}
                      <div className="absolute left-0 top-full pt-2 w-80 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-opacity duration-150 ease-out">
                        <div className="rounded-xl p-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
                          {item.children.map((child) => {

                            // Render Level 2 Nested Dropdown
                            if (child.children) {
                              return (
                                  <div key={child.label} className="relative group/sub">
                                    <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors cursor-pointer">
                                      <div>
                                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover/sub:text-[#0086BA] transition-colors">
                                          {child.label}
                                        </div>
                                        {child.desc && (
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                              {child.desc}
                                            </div>
                                        )}
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover/sub:text-[#0086BA] transition-colors" />
                                    </div>

                                    {/* Level 2 Sub-menu (Flyout) */}
                                    <div className="absolute left-full top-0 ml-1 w-72 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-opacity duration-150 ease-out">
                                      <div className="rounded-xl p-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
                                        {child.children.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="block p-2.5 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors group/item"
                                            >
                                              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover/item:text-[#0086BA] transition-colors">
                                                {sub.label}
                                              </div>
                                              {sub.desc && (
                                                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                                    {sub.desc}
                                                  </div>
                                              )}
                                            </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                              );
                            }

                            // Render standard Level 1 links
                            return (
                                <Link
                                    key={child.href}
                                    href={child.href!}
                                    className="block p-2.5 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors group/item"
                                >
                                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover/item:text-[#0086BA] transition-colors">
                                    {child.label}
                                  </div>
                                  {child.desc && (
                                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                        {child.desc}
                                      </div>
                                  )}
                                </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
            <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
              {navItems.map((item) => {

                // Standard Mobile Links & External
                if (!item.children) {
                  if (item.external) {
                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between py-2 text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-[#0086BA] transition-colors"
                        >
                          <span>{item.label}</span>
                          <ExternalLink className="w-4 h-4 opacity-70" />
                        </a>
                    );
                  }

                  return (
                      <Link
                          key={item.label}
                          href={item.href!}
                          className="block py-2 text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-[#0086BA] transition-colors"
                      >
                        {item.label}
                      </Link>
                  );
                }

                // Mobile Dropdowns
                const isMainOpen = openDropdown === item.label;

                return (
                    <div key={item.label} className="border-b border-slate-100 dark:border-slate-800 pb-2">
                      <button
                          onClick={() => setOpenDropdown(isMainOpen ? null : item.label)}
                          className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-900 dark:text-slate-100"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMainOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isMainOpen && (
                          <div className="pl-4 space-y-2 pt-1">
                            {item.children.map((child) => {

                              // Render Mobile Level 2 Nested Dropdown (Accordion)
                              if (child.children) {
                                const isSubOpen = openSubDropdown === child.label;

                                return (
                                    <div key={child.label} className="flex flex-col">
                                      <button
                                          onClick={() => setOpenSubDropdown(isSubOpen ? null : child.label)}
                                          className="w-full flex items-center justify-between py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0086BA] transition-colors"
                                      >
                                        <span>{child.label}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isSubOpen ? "rotate-180" : ""}`} />
                                      </button>

                                      {isSubOpen && (
                                          <div className="pl-3 space-y-1 pt-0.5 pb-1.5">
                                            {child.children.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block py-1 text-sm font-medium text-slate-500 dark:text-slate-500 hover:text-[#0086BA] transition-colors"
                                                >
                                                  {sub.label}
                                                </Link>
                                            ))}
                                          </div>
                                      )}
                                    </div>
                                );
                              }

                              // Standard Mobile Level 1 Link
                              return (
                                  <Link
                                      key={child.href}
                                      href={child.href!}
                                      className="block py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0086BA] transition-colors"
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
            </div>
        )}
      </header>
  );
}