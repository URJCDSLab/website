"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Briefcase,
  Users,
  Award
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: { label: string; href: string; desc?: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about/", desc: "Who we are and our institutional mission" },
      { label: "Team", href: "/about/team/", desc: "Faculty, researchers, and contributors" },
    ],
  },
  {
    label: "Education",
    children: [
      { label: "Learning Resources", href: "/education/", desc: "Books, open R packages, and tutorials" },
      { label: "Training", href: "/education/training/", desc: "Specialized courses and professional workshops" },
      { label: "Practicum", href: "/education/practicum/", desc: "University internships and student projects" },
      { label: "DSLAB-TI", href: "/education/dslab-ti/", desc: "Teaching innovation initiatives" },
      { label: "¡CONECTA!", href: "/education/conecta/", desc: "Community engagement and gamification" },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Research Lines", href: "/research/", desc: "Optimization, ML foundations, and complexity" },
      { label: "Projects", href: "/research/projects/", desc: "Competitive public and national grants" },
      { label: "Partners", href: "/research/partners/", desc: "Academic and scientific institutions" },
      { label: "Publications", href: "/research/publications/", desc: "480+ papers with SJR quartiles & topics" },
    ],
  },
  {
    label: "Consulting",
    children: [
      { label: "Projects", href: "/consulting/", desc: "Applied data science for industry" },
      { label: "Clients", href: "/consulting/clients/", desc: "Companies and organizations we work with" },
    ],
  },
  { label: "Apps", href: "https://dslabapps.es/", external: true },
  { label: "Contact", href: "/contact/" },
  { label: "Blog", href: "/blog/" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Lab identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center">
              {/* SVG Logo Mark */}
              <div className="relative flex items-center">
                <span className="font-extrabold text-2xl tracking-tight text-[#0086BA]">
                  DS<span className="text-[#E30613]">L</span>AB
                </span>
                <span className="hidden sm:inline-block ml-3 pl-3 border-l border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-400 leading-tight">
                  Data Science Laboratory<br />
                  <span className="text-slate-400 dark:text-slate-500">Rey Juan Carlos University</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.children) {
                const isActive = item.children.some((c) => pathname.startsWith(c.href));
                return (
                  <div
                    key={item.label}
                    className="relative group"
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
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 opacity-70" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 ease-out">
                      <div className="rounded-xl p-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block p-2.5 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
                          >
                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover/item:text-[#0086BA]">
                              {child.label}
                            </div>
                            {child.desc && (
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                {child.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#0086BA] hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    {item.label}
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#0086BA] font-semibold bg-[#0086BA]/10 dark:bg-[#0086BA]/20"
                      : "text-slate-700 dark:text-slate-200 hover:text-[#0086BA] dark:hover:text-[#0086BA] hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Theme toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => {
            if (item.children) {
              const isOpen = openDropdown === item.label;
              return (
                <div key={item.label} className="border-b border-slate-100 dark:border-slate-800/50 py-1">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-900 dark:text-slate-100"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pl-3 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-[#0086BA]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-[#0086BA]"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="block py-2 text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-[#0086BA]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
