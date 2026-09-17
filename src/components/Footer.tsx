import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Identity & Mission (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-[#0086BA]">
                DS<span className="text-[#E30613]">L</span>AB
              </span>
              <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                Data Science Laboratory
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              A high-impact research group at Rey Juan Carlos University (URJC). 
              Pioneering research, education, and knowledge transfer in scalable data mining, 
              applied machine learning, mathematical optimization, and big data technologies.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://twitter.com/URJCDScLab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0086BA] hover:bg-slate-200 transition-colors"
                aria-label="Twitter / X"
                title="@DSLAB_URJC"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/URJCDSLab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0086BA] hover:bg-slate-200 transition-colors"
                aria-label="GitHub"
                title="URJCDSLab"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Research & Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Research & Innovation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/research/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                  Research Lines
                </Link>
              </li>
              <li>
                <Link href="/research/projects/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                  Projects & Grants
                </Link>
              </li>
              <li>
                <Link href="/research/publications/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/research/partners/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                  Academic Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Transfer & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Community & Transfer
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/education/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/education/practicum/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                  Practicum & Internships
                </Link>
              </li>
              <li>
                <Link href="/consulting/" className="text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <a 
                  href="https://dslabapps.es/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#0086BA] dark:hover:text-[#0086BA] transition-colors"
                >
                  DSLab Web Apps <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0086BA] shrink-0 mt-0.5" />
                <span>
                  Edif. Departamental II, Desp. 0054-0060<br />
                  Universidad Rey Juan Carlos<br />
                  C/ Tulipán s/n, 28933 Móstoles, Madrid
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0086BA] shrink-0" />
                <a href="mailto:gr_inv.dslab@urjc.es" className="hover:text-[#0086BA] transition-colors">
                  gr_inv.dslab@urjc.es
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0086BA] shrink-0" />
                <span>+34 91 488 46 30</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {currentYear} Data Science Laboratory &mdash; CETINIA &mdash; Universidad Rey Juan Carlos.
          </div>
          <div>
            Licensed under{" "}
            <a 
              href="https://creativecommons.org/licenses/by-sa/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#0086BA]"
            >
              CC-BY-SA 4.0
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
