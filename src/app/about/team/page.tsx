import { Metadata } from "next";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import teamData from "@/data/team.json";
import { TeamMember } from "@/types";
import { createPageMetadata } from "@/lib/metadata";

interface OtherMember {
  firstName: string;
  lastName: string;
}

function sortBySpanishSurname(a: { lastName?: string }, b: { lastName?: string }): number {
  return (a.lastName ?? "").localeCompare(b.lastName ?? "", "es", { sensitivity: "base" });
}

function sortOtherBySurname(a: OtherMember, b: OtherMember): number {
  return a.lastName.localeCompare(b.lastName, "es", { sensitivity: "base" });
}

// Seniority rank hierarchies:
// 1. Faculty: General Coordinator first -> Full Professor -> Associate Professor -> Assistant Professor -> Junior Assistant Professor -> Postdoc
const facultyRankOrder: Record<string, number> = {
  "Full Professor": 1,
  "Associate Professor": 2,
  "Assistant Professor": 3,
  "Junior Assistant Professor": 4,
  "Postdoctoral Researcher": 5,
};

// 2. Researchers: Postdoc -> PhD Student -> Researcher
const researcherRankOrder: Record<string, number> = {
  "Postdoctoral Researcher": 1,
  "PhD. Student": 2,
  "PhD Student": 2,
  "Researcher": 3,
};

// 3. Affiliated Faculty: Postdoc -> Researcher
const affiliatedRankOrder: Record<string, number> = {
  "Postdoctoral Researcher": 1,
  "Researcher": 2,
};

function sortFaculty(a: TeamMember, b: TeamMember): number {
  // General Coordinator is strictly first
  const isCoordA = a.title === "General Coordinator" || a.id === "isaac-martin";
  const isCoordB = b.title === "General Coordinator" || b.id === "isaac-martin";
  if (isCoordA && !isCoordB) return -1;
  if (!isCoordA && isCoordB) return 1;

  const rankA = facultyRankOrder[a.role] ?? 99;
  const rankB = facultyRankOrder[b.role] ?? 99;
  if (rankA !== rankB) return rankA - rankB;
  return sortBySpanishSurname(a, b);
}

function sortResearchers(a: TeamMember, b: TeamMember): number {
  const rankA = researcherRankOrder[a.role] ?? 99;
  const rankB = researcherRankOrder[b.role] ?? 99;
  if (rankA !== rankB) return rankA - rankB;
  return sortBySpanishSurname(a, b);
}

function sortAffiliated(a: TeamMember, b: TeamMember): number {
  const rankA = affiliatedRankOrder[a.role] ?? 99;
  const rankB = affiliatedRankOrder[b.role] ?? 99;
  if (rankA !== rankB) return rankA - rankB;
  return sortBySpanishSurname(a, b);
}

const facultyMembers: TeamMember[] = ([...(teamData.faculty as TeamMember[])]).sort(sortFaculty);
const researchers: TeamMember[] = ([...(teamData.researchers as TeamMember[])]).sort(sortResearchers);
const affiliatedMembers: TeamMember[] = ([...(teamData.affiliated as TeamMember[])]).sort(sortAffiliated);

const visitingResearchers: string[] = ([...(teamData.visiting as OtherMember[])])
  .sort(sortOtherBySurname)
  .map((m) => `${m.firstName} ${m.lastName}`);

const formerMembers: string[] = ([...(teamData.former as OtherMember[])])
  .sort(sortOtherBySurname)
  .map((m) => `${m.firstName} ${m.lastName}`);

export const metadata: Metadata = createPageMetadata({
  title: "Faculty & Researchers",
  description:
    "Meet the professors, postdoctoral researchers, PhD candidates, and scholars powering the Data Science Lab at Universidad Rey Juan Carlos (URJC).",
  path: "/about/team/",
});

export default function TeamPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Faculty &amp; researchers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
          The Data Science Lab brings together multidisciplinary faculty, postdoctoral researchers, and doctoral students across computer science, statistics, telecommunications, and health sciences.
        </p>
      </div>

      {/* Section 1: Faculty */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Faculty ({facultyMembers.length})
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Professors leading teaching and high-impact research projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facultyMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Section 2: Researchers & PhD Students */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            PhD students &amp; Researchers ({researchers.length})
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Early-career researchers and doctoral candidates driving experimental development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {researchers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Section 3: Affiliated Faculty */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Affiliated faculty &amp; collaborators ({affiliatedMembers.length})
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Researchers from partner universities collaborating closely with DSLAB.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {affiliatedMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Section 4: Visiting Researchers & Former Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
        
        {/* Visiting */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Visiting researchers
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            International academics and scholars who have joined us for research stays:
          </p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {visitingResearchers.map((name) => (
              <li key={name} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0086BA]" />
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Former members */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Former members
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Alumni and researchers who contributed to the lab:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {formerMembers.map((name) => (
              <li key={name} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                <span className="truncate">{name}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}
