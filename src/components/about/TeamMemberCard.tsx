"use client";

import * as React from "react";
import { Mail } from "lucide-react";
import { TeamMember } from "@/types";

function GoogleScholarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
    </svg>
  );
}

function OrcidIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true" fill="currentColor">
      <path d="M86.3 186.2H70.9V79.1h15.4v107.1zm-7.7-123.7c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm43.8 123.7h-15.4V79.1h15.4v14.8c4.2-9.6 15.6-17.1 29.8-17.1 27.6 0 44.5 19.9 44.5 54.4s-17 55-44.5 55c-14.2 0-25.6-7.5-29.8-17.1v17.1zm27-14.7c18.5 0 29.4-14.2 29.4-39.7 0-25.5-10.9-39.7-29.4-39.7s-29.4 14.2-29.4 39.7 10.9 39.7 29.4 39.7z" />
    </svg>
  );
}

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-full h-full rounded-full bg-[#0086BA]/10 dark:bg-[#0086BA]/20 flex items-center justify-center">
      <span className="text-4xl font-bold text-[#0086BA] select-none">
        {initials}
      </span>
    </div>
  );
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isTargeted, setIsTargeted] = React.useState(false);
  const [frontError, setFrontError] = React.useState(false);
  const [backError, setBackError] = React.useState(false);

  /** Derive initials from the member's name for the fallback avatar */
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  React.useEffect(() => {
    function handleHashChange() {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.replace(/^#/, "");
        if (hash && hash === member.id) {
          setIsTargeted(true);
          const el = document.getElementById(member.id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        } else {
          setIsTargeted(false);
        }
      }
    }

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [member.id]);

  React.useEffect(() => {
    if (!isTargeted) return;
    const timer = setTimeout(() => {
      setIsTargeted(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, [isTargeted]);

  return (
    <div
      id={member.id}
      className={`group scroll-mt-28 rounded-2xl bg-white dark:bg-slate-900 border p-6 flex flex-col items-center text-center transition-[box-shadow,border-color,transform,ring-color] duration-700 ${
        isTargeted
          ? "ring-4 ring-[#0086BA] ring-offset-4 ring-offset-white dark:ring-offset-slate-900 shadow-2xl scale-[1.03] border-[#0086BA] animate-pulse"
          : "border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl"
      }`}
    >
      {/* Profile Photo with 3D flip on hover of the entire card */}
      <div className="relative w-40 h-40 mb-4 [perspective:1000px]">
        <div
          className={`relative w-full h-full rounded-full transition-transform duration-700 [transform-style:preserve-3d] shadow-md ring-4 ring-slate-100 dark:ring-slate-800 group-hover:ring-[#0086BA]/40 ${
            member.hoverPhoto ? "group-hover:[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front face (adult photo) */}
          <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden [backface-visibility:hidden]">
            {frontError ? (
              <InitialsAvatar initials={initials} />
            ) : (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={() => setFrontError(true)}
              />
            )}
          </div>

          {/* Back face (child photo Easter egg) */}
          {member.hoverPhoto && (
            <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
              {backError ? (
                <InitialsAvatar initials={initials} />
              ) : (
                <img
                  src={member.hoverPhoto}
                  alt={`${member.name} (childhood)`}
                  className="w-full h-full object-cover"
                  onError={() => setBackError(true)}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Name and Titles */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0086BA] transition-colors">
        {member.name}
      </h3>

      {member.title && (
        <span className="mt-0.5 inline-block text-xs font-bold text-[#E30613]">
          {member.title}
        </span>
      )}

      <p className="mt-1 text-sm font-medium text-[#0086BA]">
        {member.role}
      </p>

      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
        {member.department}
      </p>
      
      {member.institution && (
        <p className="text-xs text-slate-400 dark:text-slate-500">
          {member.institution}
        </p>
      )}

      <div className="w-12 h-px bg-slate-200 dark:bg-slate-800 my-4" />

      {/* Social / Academic badges */}
      <div className="mt-auto flex items-center justify-center gap-3">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            aria-label={`Email ${member.name}`}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0086BA] transition-colors duration-200 shadow-sm"
            title={member.email}
          >
            <Mail className="w-4 h-4" />
          </a>
        )}

        {member.scholar && (
          <a
            href={member.scholar}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Google Scholar of ${member.name}`}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#4285F4]/10 dark:bg-[#4285F4]/20 text-[#4285F4] hover:bg-[#4285F4] hover:text-white transition-colors duration-200 shadow-sm"
            title="Google Scholar"
          >
            <GoogleScholarIcon className="w-4 h-4" />
          </a>
        )}

        {member.orcid && (
          <a
            href={member.orcid}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`ORCID of ${member.name}`}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#A6CE39]/15 dark:bg-[#A6CE39]/25 text-[#A6CE39] hover:bg-[#A6CE39] hover:text-white transition-colors duration-200 shadow-sm"
            title={`ORCID: ${member.orcid}`}
          >
            <OrcidIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
