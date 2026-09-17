"use client";

import * as React from "react";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";
import { TeamMember } from "@/types";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [currentPhoto, setCurrentPhoto] = React.useState(member.photo);

  return (
    <div
      id={member.id}
      className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Profile Photo with hover Easter egg */}
      <div 
        className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-slate-200 dark:border-slate-700 group-hover:border-[#0086BA] transition-colors shadow-md"
        onMouseEnter={() => {
          if (member.hoverPhoto) setCurrentPhoto(member.hoverPhoto);
        }}
        onMouseLeave={() => {
          if (member.hoverPhoto) setCurrentPhoto(member.photo);
        }}
      >
        <img
          src={currentPhoto}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback if image path not found
            (e.target as HTMLElement).style.display = "none";
          }}
        />
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
            className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0086BA] transition-colors"
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
            className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-blue-600 transition-colors font-bold text-xs"
            title="Google Scholar"
          >
            GS
          </a>
        )}

        {member.orcid && (
          <a
            href={member.orcid}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`ORCID of ${member.name}`}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#A6CE39]/15 text-[#88a927] dark:text-[#a6ce39] hover:bg-[#A6CE39] hover:text-white transition-colors font-bold text-xs"
            title={`ORCID: ${member.orcid}`}
          >
            iD
          </a>
        )}
      </div>
    </div>
  );
}
