import React from "react";
import { CaseStudyFrontmatter } from "@/lib/mdx";

interface CaseStudyProblemSectionProps {
  frontmatter: CaseStudyFrontmatter;
}

export function CaseStudyProblemSection({ frontmatter }: CaseStudyProblemSectionProps) {
  const problem = frontmatter.problem || {
    headline: "The client had spreadsheets. The bank had APIs. Nobody had connected them.",
    paragraphs: [
      "Mid-market companies scaling past $10M ARR routinely juggle six to twelve separate commercial banking portals. Treasury teams were spending the first half of every business day exporting CSVs, running brittle macro scripts, and manually reconciling cash balances across international entities.",
      "By the time executive leadership received the consolidated cash position report at 2 PM, the underlying data was already stale. Currency rate fluctuations across GBP, EUR, and USD were quietly eroding operational margins without triggering warnings.",
      "Vaultly came to us with a clear thesis: SME financial teams deserve the algorithmic speed and multi-entity liquidity intelligence that Fortune 500 treasuries take for granted, without an eighteen-month ERP deployment.",
    ],
    stats: [
      { value: "4 hrs/day", label: "time finance team spent on manual reconciliation" },
      { value: "£120k/yr", label: "estimated cost of manual reconciliation errors pre-deployment" },
      { value: "0", label: "real-time visibility tools available across banking feeds before us" },
    ],
  };

  return (
    <section
      className="w-full py-20 lg:py-28 border-b border-[#222222]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="font-mono text-[12px] uppercase tracking-widest text-accentLime mb-8">
          01 / The Problem
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left 60% Column */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-[28px] sm:text-[34px] font-light text-[#F0EDE8] leading-tight mb-8 max-w-2xl">
              {problem.headline}
            </h2>
            <div className="space-y-6 text-[16px] text-[#888888] leading-relaxed font-light">
              {problem.paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right 40% Stat Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-[#222222] border-t lg:border-t-0 lg:border-l border-[#222222] lg:pl-12 pt-8 lg:pt-0">
            {problem.stats?.map((stat, sIdx) => (
              <div key={sIdx} className="py-6 first:pt-0 last:pb-0">
                <div className="font-serif text-[42px] sm:text-[48px] italic text-accentLime leading-none">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#777777] mt-3 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
