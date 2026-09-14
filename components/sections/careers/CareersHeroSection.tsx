import React from "react";

interface CareersHeroSectionProps {
  totalRoles?: number;
}

export function CareersHeroSection({ totalRoles = 6 }: CareersHeroSectionProps) {
  return (
    <section
      className="w-full bg-[#0C0C0C] pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-[#222222] flex flex-col justify-between"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Micro-label */}
        <div className="mb-12">
          <span className="inline-flex items-center px-3 py-1 border border-accentLime font-mono text-[11px] uppercase tracking-widest text-accentLime bg-[#0C0C0C]">
            REMOTE-FIRST · LAHORE HQ · ASYNC CULTURE
          </span>
        </div>

        {/* Main Stark Editorial Headline */}
        <div className="flex flex-col mb-12 tracking-tight leading-none">
          <h1 className="text-[48px] sm:text-[72px] lg:text-[88px] font-light text-[#F0EDE8] leading-[1.0] tracking-[-0.03em]">
            Work on things
          </h1>
          <h1 className="text-[48px] sm:text-[72px] lg:text-[88px] font-light text-[#F0EDE8] leading-[1.0] tracking-[-0.03em]">
            that ship.
          </h1>
          <h1 className="text-[48px] sm:text-[72px] lg:text-[88px] font-serif italic font-normal text-accentLime leading-[1.05] tracking-[-0.01em]">
            Not decks.
          </h1>
        </div>

        {/* Subtitle & Active Metric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6 border-t border-[#222222]">
          <p className="text-[16px] sm:text-[18px] text-[#888888] max-w-[650px] leading-relaxed font-light">
            We hire engineers who think, designers who code, and managers who get out of the way.
          </p>
          <div className="flex items-center gap-3 font-mono text-[12px] text-[#888888] shrink-0">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full bg-accentLime opacity-75" />
              <span className="relative inline-flex h-2 w-2 bg-accentLime" />
            </span>
            <span className="uppercase tracking-wider text-[#F0EDE8]">
              Currently {totalRoles} open roles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
