import { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactMap } from "@/components/contact/ContactMap";
import { XIcon, LinkedInIcon, GithubIcon, BlueskyIcon } from "@/components/ui/icons";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with the Data Science Lab at Universidad Rey Juan Carlos campus in Móstoles/Madrid for research, partnership, or academic inquiries.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
      <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Contact us
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We welcome inquiries regarding research collaborations, joint projects, academic partnerships, training, or knowledge transfer.
          </p>
        </div>

        {/* Channels Grid: Email & Social Networks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* Email */}
          <a
              href="mailto:gr_inv.dslab@urjc.es"
              className="relative overflow-hidden p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA] shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 flex flex-col justify-center min-h-[96px] group text-right"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 text-[#0086BA] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
              <Mail className="w-16 h-16" strokeWidth={1.5} />
            </div>
            <div className="relative z-10 w-full">
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
                Email
              </div>
              <div className="text-xs text-[#0086BA] truncate mt-0.5">
                gr_inv.dslab@urjc.es
              </div>
            </div>
          </a>

          {/* X */}
          <a
              href="https://x.com/DSLAB_URJC"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 flex flex-col justify-center min-h-[96px] group text-right"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 text-slate-900 dark:text-slate-100 opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
              <XIcon className="w-16 h-16" />
            </div>
            <div className="relative z-10 w-full">
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100 transition-colors">
                X
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors truncate mt-0.5">
                @DSLAB_URJC
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
              href="https://www.linkedin.com/company/dslab"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0A66C2] shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 flex flex-col justify-center min-h-[96px] group text-right"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 text-[#0A66C2] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
              <LinkedInIcon className="w-16 h-16" />
            </div>
            <div className="relative z-10 w-full">
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-[#0A66C2] transition-colors">
                LinkedIn
              </div>
              <div className="text-xs text-[#0A66C2] truncate mt-0.5">
                DSLAB
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
              href="https://github.com/URJCDSLab"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 flex flex-col justify-center min-h-[96px] group text-right"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 text-slate-900 dark:text-slate-100 opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
              <GithubIcon className="w-16 h-16" />
            </div>
            <div className="relative z-10 w-full">
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100 transition-colors">
                GitHub
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors truncate mt-0.5">
                @URJCDSLab
              </div>
            </div>
          </a>

          {/* Bluesky */}
          <a
              href="https://bsky.app/profile/dslab-urjc.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0285FF] shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 flex flex-col justify-center min-h-[96px] group text-right"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 text-[#0285FF] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
              <BlueskyIcon className="w-16 h-16" />
            </div>
            <div className="relative z-10 w-full">
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-[#0285FF] transition-colors">
                Bluesky
              </div>
              <div className="text-xs text-[#0285FF] truncate mt-0.5">
                @dslab-urjc
              </div>
            </div>
          </a>
        </div>

        {/* Interactive Map Section */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#0086BA]" />
              Location &amp; campus map
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Department Building II, Móstoles Campus &mdash; Universidad Rey Juan Carlos (C/ Tulipán s/n, 28933 Móstoles, Madrid)
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-100 dark:bg-slate-900">
            <ContactMap />

            <div className="p-4 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-200 dark:border-slate-800">
            <span className="text-slate-600 dark:text-slate-400">
              Campus de Móstoles &bull; Metro: <strong>Universidad Rey Juan Carlos (Line 12)</strong> &bull; Cercanías: <strong>Móstoles-El Soto (C5)</strong>
            </span>
              <div>
                <a
                    href="https://www.google.com/maps/place/Data+Science+Laboratory+(DSLAB)/@40.3357945,-3.8805781,838m/data=!3m3!1e3!4b1!5s0xd418e6fd5f7824f:0x96720cbe481fc2f2!4m6!3m5!1s0xd418f002c2e0a21:0x6bbd9bf356e156cb!8m2!3d40.3357945!4d-3.8780032!16s%2Fg%2F11x0rlxb42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0086BA] hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
  );
}