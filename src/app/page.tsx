import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { ThesisReveal } from "@/components/home/ThesisReveal";
import { PillarsScrollyStage } from "@/components/home/PillarsScrollyStage";
import { GroupCarousel } from "@/components/home/GroupCarousel";
import { createPageMetadata } from "@/lib/metadata";
import publicationsData from "@/data/publications/publications.json";
import publicationsManual from "@/data/publications/publications_manual.json";
import teamData from "@/data/team.json";
import researchLines from "@/data/research_lines.json";
import researchProjects from "@/data/research_projects.json";
import educationBooks from "@/data/education_books.json";
import educationPackages from "@/data/education_packages.json";
import consultingProjects from "@/data/consulting_projects.json";
import consultingClients from "@/data/consulting_clients.json";

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
    teamData.faculty.length +
    teamData.researchers.length +
    teamData.affiliated.length;
  const researchLinesCount = researchLines.length;

  return (
    <div className="flex flex-col">
      {/* Act 1: Opening Monumental Hero + Mathematical Separability Field */}
      <HeroSection
        publicationsCount={publicationsCount}
        membersCount={membersCount}
        researchLinesCount={researchLinesCount}
      />

      {/* Act 2: Scroll-Driven Word-by-Word Mission Thesis */}
      <ThesisReveal />

      {/* Act 3: Pinned 3-Chapter Scrollytelling Stage (Research -> Education -> Consulting) */}
      <PillarsScrollyStage
        metrics={{
          publicationsCount,
          researchLinesCount,
          researchProjectsCount: researchProjects.length,
          booksCount: educationBooks.length,
          packagesCount: educationPackages.length,
          consultingProjectsCount: consultingProjects.length,
          consultingClientsCount: consultingClients.length,
        }}
      />

      {/* Act 4: The Researchers Behind the Lab */}
      <section className="py-20 sm:py-28 bg-[#f5f7fa] dark:bg-[#0b0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="scroll-reveal lg:col-span-5">
              <h2 className="heading-2 text-[#111827] dark:text-[#eef0f5]">
                Our research community
              </h2>

              <p className="mt-5 body-3 text-[#4b5565] dark:text-[#a3a9b8] max-w-[48ch]">
                Faculty, researchers, and doctoral candidates collaborating across computer science, statistics, and engineering at Universidad Rey Juan Carlos.
              </p>

              {/* Hairline-divided verified team ledger */}
              <dl className="mt-8 pt-6 border-t border-[#111827]/10 dark:border-[#eef0f5]/10 grid grid-cols-3 gap-4">
                <div>
                  <dt className="caption-4 text-[#647084] dark:text-[#858d9f]">
                    Faculty
                  </dt>
                  <dd className="mt-1 text-2xl font-medium font-mono tabular-nums text-[#111827] dark:text-[#eef0f5]">
                    {teamData.faculty.length}
                  </dd>
                </div>
                <div>
                  <dt className="caption-4 text-[#647084] dark:text-[#858d9f]">
                    Researchers &amp; PhD
                  </dt>
                  <dd className="mt-1 text-2xl font-medium font-mono tabular-nums text-[#111827] dark:text-[#eef0f5]">
                    {teamData.researchers.length}
                  </dd>
                </div>
                <div>
                  <dt className="caption-4 text-[#647084] dark:text-[#858d9f]">
                    Affiliated
                  </dt>
                  <dd className="mt-1 text-2xl font-medium font-mono tabular-nums text-[#111827] dark:text-[#eef0f5]">
                    {teamData.affiliated.length}
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <Link
                  href="/about/team/"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0074a3] hover:bg-[#005f87] dark:bg-[#38bdf8] dark:hover:bg-[#7dd3fc] dark:text-[#0b0d14] transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
                >
                  <span>Meet the team</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="scroll-stage-reveal lg:col-span-7">
              <GroupCarousel photos={groupPhotos} />
            </div>
          </div>
        </div>
      </section>

      {/* Act 5: Closing Architectural Invitation (seamlessly integrated on the unified canvas) */}
      <section className="pb-24 sm:pb-32 bg-[#f5f7fa] dark:bg-[#0b0d14]">
        <div className="scroll-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-14 sm:pt-16 border-t border-[#111827]/10 dark:border-[#eef0f5]/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-[580px]">
              <h2 className="heading-2 text-[#111827] dark:text-[#eef0f5]">
                Work with the Data Science Lab
              </h2>
              <p className="mt-4 body-3 text-[#4b5565] dark:text-[#a3a9b8]">
                Reach out to discuss joint publications, doctoral supervision, specialized workshops, or applied AI transfer projects.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 shrink-0">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0074a3] hover:bg-[#005f87] dark:bg-[#38bdf8] dark:hover:bg-[#7dd3fc] dark:text-[#0b0d14] transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
              >
                <span>Contact DSLAB</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>

              <Link
                href="/collaboration/"
                className="inline-flex items-center gap-1.5 body-5 text-[#111827] dark:text-[#eef0f5] hover:text-[#0074a3] dark:hover:text-[#38bdf8] transition-colors duration-200"
              >
                <span>Collaboration pathways</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
