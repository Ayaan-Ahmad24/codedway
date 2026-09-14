import React from "react";
import { CaseStudyFrontmatter } from "@/lib/mdx";

interface CaseStudyResultsSectionProps {
  frontmatter: CaseStudyFrontmatter;
}

export function CaseStudyResultsSection({ frontmatter }: CaseStudyResultsSectionProps) {
  const resultsData = frontmatter.resultsData || {
    stats: [
      { value: "87%", label: "REDUCTION IN OPERATIONAL OVERHEAD" },
      { value: "14 wks", label: "FROM KICKOFF TO PRODUCTION" },
      { value: "3,200+", label: "ACTIVE USERS IN FIRST 90 DAYS" },
      { value: "0", label: "CRITICAL DEFECTS AT LAUNCH" },
    ],
    quote: {
      text: "Codedway gave us enterprise muscle on an agile startup timeline. Every benchmark promised was delivered with zero excuses.",
      author: "— Head of Product",
    },
  };

  return (
    <section
      className="w-full bg-[#101010] py-20 lg:py-28 border-b border-[#222222]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="font-mono text-[12px] uppercase tracking-widest text-accentLime mb-2">
          04 / Results
        </div>
        <h2 className="text-[36px] sm:text-[48px] font-light text-[#F0EDE8] mb-14">
          Numbers don&apos;t lie.
        </h2>

        {/* Results Horizontal Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#222222] divide-y md:divide-y-0 md:divide-x divide-[#222222] bg-[#0C0C0C]">
          {resultsData.stats?.map((stat, idx) => (
            <div key={idx} className="p-8 flex flex-col justify-center">
              <div className="font-serif text-[48px] sm:text-[56px] italic text-accentLime leading-none">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#777777] mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Second Client Pull Quote */}
        {resultsData.quote && (
          <div className="mt-14 max-w-4xl border-l-2 border-accentLime pl-8">
            <blockquote className="font-serif text-[20px] sm:text-[24px] italic text-[#F0EDE8] leading-relaxed">
              &ldquo;{resultsData.quote.text}&rdquo;
            </blockquote>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#777777] mt-3">
              {resultsData.quote.author}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
