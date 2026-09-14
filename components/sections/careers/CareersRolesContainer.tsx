"use client";

import React, { useState } from "react";
import { OPEN_ROLES, JobPosition } from "@/lib/jobsData";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "design", label: "Design" },
  { id: "product", label: "Product" },
  { id: "operations", label: "Operations" },
] as const;

export function CareersRolesContainer() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredRoles =
    activeFilter === "all"
      ? OPEN_ROLES
      : OPEN_ROLES.filter((role) => role.category === activeFilter);

  return (
    <section
      className="w-full bg-[#0C0C0C] py-20 lg:py-28 border-b border-[#222222]"
      id="open-roles"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="font-mono text-[12px] uppercase tracking-widest text-accentLime block mb-2">
              {"//"} 002 &mdash; OPEN ROLES
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-light text-[#F0EDE8] tracking-tight">
              Where you&apos;d fit in.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-6 text-[14px]">
            {FILTERS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`pb-1 border-b transition-all ${
                    isActive
                      ? "text-[#F0EDE8] border-accentLime font-medium"
                      : "text-[#888888] hover:text-[#F0EDE8] border-transparent font-normal"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Job Rows Stack */}
        <div className="flex flex-col border-t border-[#222222]">
          {filteredRoles.length === 0 ? (
            <div className="py-16 text-center text-[#777777] font-mono text-[13px]">
              No active roles currently open in this discipline.{" "}
              <a
                href="mailto:careers@codedway.com?subject=Open%20Application"
                className="text-accentLime underline underline-offset-4"
              >
                Send an open application &rarr;
              </a>
            </div>
          ) : (
            filteredRoles.map((role) => (
              <a
                key={role.id}
                href={`mailto:careers@codedway.com?subject=${encodeURIComponent(
                  role.applySubject
                )}`}
                className="border-b border-[#222222] py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-150 hover:translate-x-1 hover:bg-[#121212] px-4 group cursor-pointer"
              >
                <div className="w-full sm:w-5/12">
                  <span className="text-[18px] sm:text-[20px] font-medium text-[#F0EDE8] group-hover:text-accentLime transition-colors block">
                    {role.title}
                  </span>
                </div>

                <div className="w-full sm:w-4/12 flex items-center gap-4">
                  <span className="px-2.5 py-1 bg-[#181818] border border-[#282828] font-mono text-[10px] text-accentLime uppercase tracking-wider">
                    {role.categoryLabel}
                  </span>
                  <span className="font-mono text-[12px] text-[#888888]">
                    {role.location}
                  </span>
                </div>

                <div className="w-full sm:w-3/12 flex justify-start sm:justify-end">
                  <span className="font-mono text-[13px] text-accentLime group-hover:text-white flex items-center gap-1.5 transition-colors">
                    <span>Apply</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
