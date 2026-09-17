import { Metadata } from "next";
import { Mail, MapPin, Building2, ExternalLink, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Data Science Lab at Rey Juan Carlos University.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Mail className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Contact DSLAB
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          We welcome inquiries regarding research collaborations, joint projects, internships, training, or media contacts.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Building */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[#0086BA]/10 text-[#0086BA] flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
            Building
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Departamental II &bull; Desp. 0054-0060<br />
            Móstoles Campus, URJC
          </p>
        </div>

        {/* Address */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[#0086BA]/10 text-[#0086BA] flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
            Postal Address
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            C/ Tulipán s/n, 28933<br />
            Móstoles, Madrid, Spain
          </p>
        </div>

        {/* Email */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[#E30613]/10 text-[#E30613] flex items-center justify-center mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
            Email
          </h3>
          <a
            href="mailto:gr_inv.dslab@urjc.es"
            className="text-sm font-semibold text-[#0086BA] hover:underline"
          >
            gr_inv.dslab@urjc.es
          </a>
        </div>

      </div>

      {/* Social Networks */}
      <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Connect with us across academic and digital networks
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a
            href="https://twitter.com/DSLAB_URJC"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA] text-center shadow-sm transition-colors duration-200"
          >
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
              X / Twitter
            </div>
            <div className="text-xs text-[#0086BA] mt-0.5">
              @DSLAB_URJC
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/dslab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA] text-center shadow-sm transition-colors duration-200"
          >
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
              LinkedIn
            </div>
            <div className="text-xs text-[#0086BA] mt-0.5">
              DSLAB
            </div>
          </a>

          <a
            href="https://github.com/URJCDSLab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA] text-center shadow-sm transition-colors duration-200"
          >
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
              GitHub
            </div>
            <div className="text-xs text-[#0086BA] mt-0.5">
              @URJCDSLab
            </div>
          </a>

          <a
            href="https://bsky.app/profile/dslab-urjc.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA] text-center shadow-sm transition-colors duration-200"
          >
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
              Bluesky
            </div>
            <div className="text-xs text-[#0086BA] mt-0.5">
              @dslab-urjc
            </div>
          </a>
        </div>
      </div>

    </div>
  );
}
