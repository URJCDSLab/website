import { Metadata } from "next";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { 
  facultyMembers, 
  researchers, 
  affiliatedMembers, 
  visitingResearchers, 
  formerMembers 
} from "@/data/team";
import { Users, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the professors, researchers, and doctoral students at Data Science Lab (URJC).",
};

export default function TeamPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Users className="w-3.5 h-3.5" />
          Our People
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Faculty &amp; Researchers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
          The Data Science Lab brings together multidisciplinary faculty, postdoctoral researchers, and doctoral students across computer science, statistics, telecommunications, and health sciences.
        </p>
      </div>

      {/* Section 1: Faculty */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
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
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Researchers &amp; PhD Students ({researchers.length})
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
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Affiliated Faculty &amp; Collaborators ({affiliatedMembers.length})
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Researchers from partner universities collaborating closely with DSLab.
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
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Visiting Researchers
          </h3>
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
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Former Members
          </h3>
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
