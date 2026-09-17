import Link from "next/link";
import { ArrowRight, BookOpen, Users, Star, Sparkles, ExternalLink } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { BentoGrid } from "@/components/BentoGrid";
import rawPubs from "../../_data/publications.json";
import { Publication } from "@/types";
import { facultyMembers } from "@/data/team";

const publications = rawPubs as unknown as Publication[];

export default function HomePage() {
  // Get top 4 recent publications
  const recentPubs = publications.slice(0, 4);
  // Get highlighted faculty
  const featuredTeam = facultyMembers.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Interactive Hero Section */}
      <HeroSection />

      {/* Strategic Pillars Bento Grid */}
      <BentoGrid />

      {/* Latest Research & Publications Spotlight */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Latest Contributions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Recent Scientific Publications
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Peer-reviewed articles, international conference papers, and contributions produced by our team members.
            </p>
          </div>

          <Link
            href="/research/publications/"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0086BA] hover:underline"
          >
            Browse all 480+ papers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPubs.map((pub) => (
            <article
              key={pub.id || pub.doi || pub.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0086BA]/60 dark:hover:border-[#0086BA]/60 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {pub.quartile && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      {pub.quartile === "Q1" && <Star className="w-3 h-3 fill-current" />}
                      {pub.quartile} (SJR)
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {pub.year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 capitalize">
                    {pub.work_type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {pub.landing_page_url ? (
                    <a
                      href={pub.landing_page_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0086BA] transition-colors"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {pub.authors.join(", ")}
                </p>

                {pub.journal && (
                  <p className="mt-1 text-xs italic text-slate-500 dark:text-slate-500 line-clamp-1">
                    {pub.journal}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                {pub.keywords && pub.keywords[0] ? (
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    #{pub.keywords[0]}
                  </span>
                ) : (
                  <span />
                )}

                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0086BA] hover:underline inline-flex items-center gap-1"
                  >
                    View DOI <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-16 sm:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
              <Users className="w-3.5 h-3.5" />
              Our People
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Meet the Research Team
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Professors, researchers, and doctoral candidates driving innovation across multiple departments at Rey Juan Carlos University.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeam.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-200 dark:border-slate-700">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 line-clamp-1">
                  {member.name}
                </h3>
                {member.title && (
                  <div className="text-xs font-bold text-[#E30613] mt-0.5">
                    {member.title}
                  </div>
                )}
                <div className="text-xs text-[#0086BA] font-medium mt-0.5">
                  {member.role}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about/team/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors duration-200"
            >
              View all faculty &amp; researchers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0086BA] to-[#006d96] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Collaborate on Data-Driven Solutions?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
            Whether you are looking for an academic partnership, industrial consulting, or pursuing doctoral research in data science, we look forward to hearing from you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="px-6 py-3.5 rounded-xl font-semibold text-[#0086BA] bg-white hover:bg-slate-50 shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              Contact the lab
            </Link>
            <Link
              href="/collaboration/"
              className="px-6 py-3.5 rounded-xl font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm transition-colors duration-200"
            >
              Explore collaboration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
