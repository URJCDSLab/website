import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Users } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { BentoGrid } from "@/components/home/BentoGrid";
import { GroupCarousel } from "@/components/home/GroupCarousel";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { createPageMetadata } from "@/lib/metadata";
import publicationsData from "@/data/publications/publications.json";
import publicationsManual from "@/data/publications/publications_manual.json";
import teamData from "@/data/team.json";
import researchLines from "@/data/research_lines.json";

export const metadata: Metadata = createPageMetadata({
  title: "Data Science Lab | Rey Juan Carlos University (URJC)",
  description:
    "Data Science Laboratory at Rey Juan Carlos University (URJC). Research, education, and knowledge transfer in machine learning, mathematical optimization, and big data.",
  path: "/",
});

function getGroupPhotos(): string[] {
  const dir = path.join(process.cwd(), "public/assets/images/group");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => /^group.*\.(jpe?g|png|webp)$/i.test(file))
    .toSorted()
    .toReversed()
    .map((file) => `/assets/images/group/${file}`);
}

export default function HomePage() {
  const groupPhotos = getGroupPhotos();
  const publicationsCount = publicationsData.length + publicationsManual.length;
  const membersCount =
    teamData.faculty.length + teamData.researchers.length + teamData.affiliated.length;
  const researchLinesCount = researchLines.length;

  return (
    <div className="flex flex-col">
      {/* Interactive Hero Section with CSS Scroll-Driven Depth */}
      <HeroSection
        publicationsCount={publicationsCount}
        membersCount={membersCount}
        researchLinesCount={researchLinesCount}
      />

      {/* Three Core Pillars */}
      <BentoGrid />

      {/* Research Community Section with native 4:3 Group Carousel */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="scroll-reveal lg:col-span-5 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-slate-100">
                Our research community
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-[52ch]">
                Professors, postdoctoral researchers, and doctoral candidates collaborating across computer science, statistics, and engineering at Rey Juan Carlos University.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <strong className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                  {teamData.faculty.length} faculty members
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                  {teamData.researchers.length} PhD &amp; postdoctoral researchers
                </strong>
                , and international visiting scholars advancing open science together.
              </p>

              <div className="pt-2">
                <Link
                  href="/about/team/"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] shadow-sm transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Users className="w-4 h-4" aria-hidden="true" />
                  <span>Meet the team</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="scroll-stage-reveal lg:col-span-7">
              <GroupCarousel photos={groupPhotos} />
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="pb-16 sm:pb-24 bg-slate-50 dark:bg-[#090d16]">
        <div className="scroll-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Interested in our research or training?"
            description="Reach out to explore joint publications, PhD supervision, institutional partnerships, or applied data science projects."
            buttonText="Contact DSLAB"
            buttonHref="/contact/"
            variant="brand"
          />
        </div>
      </section>
    </div>
  );
}
