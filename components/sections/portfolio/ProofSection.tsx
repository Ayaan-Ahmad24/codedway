import React from "react";

const INDUSTRIES = [
  "FINTECH",
  "HEALTHTECH",
  "SAAS",
  "AI",
  "ECOMMERCE",
  "EDTECH",
] as const;

export function ProofSection() {
  return (
    <section className="bg-[#111111] border-y border-[#222222] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Centered Statement */}
        <h2 className="text-[24px] sm:text-[30px] font-light text-[#F0EDE8] tracking-tight leading-snug mb-8 max-w-[760px] mx-auto">
          We&apos;ve shipped 40+ products across 8 countries. Every one of them on time.
        </h2>

        {/* Industry Badges with Hairline Dividers */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] uppercase tracking-widest text-accentLime font-mono">
          {INDUSTRIES.map((ind, idx) => (
            <React.Fragment key={ind}>
              <span>{ind}</span>
              {idx < INDUSTRIES.length - 1 && (
                <span className="text-[#333333]">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
