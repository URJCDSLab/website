import Link from "next/link";
import { Mail, MapPin, Building } from "lucide-react";
import { XIcon, LinkedInIcon, GithubIcon, BlueskyIcon } from "@/components/ui/icons";

export function Footer() {
  return (
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Column 1: Identity & Mission (span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <img
                    src="/assets/images/logos/DSLab_logo.svg"
                    alt="Data Science Lab URJC"
                    className="h-10 w-auto object-contain"
                />
              </Link>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                Group on Foundations and Applications of Data Science (DSLAB), at University Rey Juan Carlos.
              </p>

              <nav className="pt-2">
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  <li className="flex items-center gap-x-4 after:content-['·'] after:text-slate-400 dark:after:text-slate-500 last:after:hidden">
                    <Link href="/about/" className="hover:text-[#0086BA] transition-colors">
                      About us
                    </Link>
                  </li>
                  <li className="flex items-center gap-x-4 after:content-['·'] after:text-slate-400 dark:after:text-slate-500 last:after:hidden">
                    <a href="https://www.cetinia.es/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0086BA] transition-colors">
                      CETINIA
                    </a>
                  </li>
                  <li className="flex items-center gap-x-4 after:content-['·'] after:text-slate-400 dark:after:text-slate-500 last:after:hidden">
                    <a href="https://urjc.es" target="_blank" rel="noopener noreferrer" className="hover:text-[#0086BA] transition-colors">
                      URJC
                    </a>
                  </li>
                  <li className="flex items-center gap-x-4 after:content-['·'] after:text-slate-400 dark:after:text-slate-500 last:after:hidden">
                    <a href="https://blogs.etsii.urjc.es/musa/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0086BA] transition-colors">
                      MSc in Sports Analytics (MUSA)
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="pt-2 flex items-center gap-3">
                <a
                    href="mailto:gr_inv.dslab@urjc.es"
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0086BA] hover:bg-[#0086BA]/10 transition-colors"
                    aria-label="Email"
                    title="gr_inv.dslab@urjc.es"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                    href="https://x.com/DSLAB_URJC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
                    aria-label="X"
                    title="@DSLAB_URJC"
                >
                  <XIcon className="w-4 h-4" />
                </a>
                <a
                    href="https://www.linkedin.com/company/dslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                    aria-label="LinkedIn"
                    title="DSLAB"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                    href="https://github.com/URJCDSLab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
                    aria-label="GitHub"
                    title="URJCDSLab"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                    href="https://bsky.app/profile/dslab-urjc.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0285FF] hover:bg-[#0285FF]/10 transition-colors"
                    aria-label="Bluesky"
                    title="@dslab-urjc.bsky.social"
                >
                  <BlueskyIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Research */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Research
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/research/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Research lines
                  </Link>
                </li>
                <li>
                  <Link href="/research/publications/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="/research/projects/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Research projects
                  </Link>
                </li>
                <li>
                  <Link href="/research/partners/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Research partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Education & Consulting */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Education & consulting
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/education/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Learning resources
                  </Link>
                </li>
                <li>
                  <Link href="/education/practicum/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Practicum
                  </Link>
                </li>
                <li>
                  <Link href="/consulting/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Consulting projects
                  </Link>
                </li>
                <li>
                  <Link href="/consulting/clients/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                    Collaboration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Location */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Reach us
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-[#0086BA] shrink-0 mt-0.5" />
                  <span>
                  Department Building II<br />
                  Móstoles Campus, URJC
                </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0086BA] shrink-0 mt-0.5" />
                  <span>
                  Tulipán s/n, 28933 Móstoles<br />
                  Madrid, Spain
                </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
  );
}