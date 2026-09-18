import { Layout, ExternalLink, Presentation } from "lucide-react";
import dashboardsData from "@/data/education_dashboards.json";
import { ShinyApp } from "@/types";

const dashboards = dashboardsData as ShinyApp[];

export function DashboardsSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Layout className="w-6 h-6 text-[#0086BA]" />
          Interactive dashboards &amp; web apps
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Web-based exploratory tools and decision-support apps developed for educational and practical applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboards.map((app) => (
          <div
            key={app.title}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-[#0086BA] block mb-1">
                {app.date}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {app.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {app.authors}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {app.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0086BA] hover:underline"
              >
                Launch application <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {app.slidesUrl && (
                <a
                  href={app.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                >
                  <Presentation className="w-3.5 h-3.5" /> Slides
                </a>
              )}
              {app.sourceUrl && (
                <a
                  href={app.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  BURJC <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
