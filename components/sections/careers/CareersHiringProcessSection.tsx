import React from "react";

const STEPS = [
  {
    step: "STEP 01",
    title: "30-min intro call",
    description:
      "No prep needed, just an open discussion about alignment, expectations, and craft.",
  },
  {
    step: "STEP 02",
    title: "Paid trial task",
    description:
      "Real work, real pay, real production context. No artificial algorithmic puzzles or leetcode.",
  },
  {
    step: "STEP 03",
    title: "Team interview",
    description:
      "Meet the engineers and product designers you’d actually execute and deploy with.",
  },
  {
    step: "STEP 04",
    title: "Offer within 5 days",
    description:
      "We respect your time and velocity. We never ghost candidates or draw out decisions.",
  },
];

export function CareersHiringProcessSection() {
  return (
    <section
      className="w-full bg-[#0C0C0C] py-20 lg:py-28 border-b border-[#222222]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="mb-14">
          <span className="font-mono text-[12px] uppercase tracking-widest text-accentLime block mb-2">
            {"//"} 003 &mdash; HOW WE HIRE
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-light text-[#F0EDE8] tracking-tight">
            No whiteboard interviews. No trick questions.
          </h2>
        </div>

        {/* 4 Horizontal Step Boxes connected by line */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-[28px] left-[32px] right-[32px] h-[1px] bg-[#222222] pointer-events-none z-0" />

          {STEPS.map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-[#121212] border border-[#222222] p-8 flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[11px] text-[#F0EDE8] font-semibold bg-[#0C0C0C] px-3 py-1 border border-[#222222]">
                    {item.step}
                  </span>
                  <span className="w-2 h-2 bg-accentLime" />
                </div>
                <h4 className="text-[18px] font-medium text-[#F0EDE8] mb-3">
                  {item.title}
                </h4>
                <p className="text-[14px] text-[#888888] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
