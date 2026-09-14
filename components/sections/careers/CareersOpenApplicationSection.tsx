import React from "react";

export function CareersOpenApplicationSection() {
  return (
    <section
      className="w-full bg-[#111111] py-[60px] border-b border-[#222222]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[28px] sm:text-[32px] font-light text-[#F0EDE8] tracking-tight">
            Don’t see your role?
          </h3>
          <p className="text-[15px] text-[#888888] font-light">
            We hire on talent, not headcount plans. Send us your work.
          </p>
        </div>
        <div className="shrink-0">
          <a
            className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-wider text-accentLime border border-accentLime bg-transparent px-8 py-3.5 hover:bg-accentLime hover:text-black transition-all"
            href="mailto:careers@codedway.com?subject=Open%20Application"
          >
            Send an open application &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
