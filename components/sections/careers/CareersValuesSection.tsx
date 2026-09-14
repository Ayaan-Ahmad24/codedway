import React from "react";

const VALUES = [
  {
    title: "You own your work.",
    description:
      "We don’t have 4 layers of review. If you built it, it ships with your name on it.",
  },
  {
    title: "Async by default.",
    description:
      "No mandatory standups. No 9-to-5 theater. Results over presence, always.",
  },
  {
    title: "You’ll learn, fast.",
    description:
      "Our average engineer works across 3 domains per year. Boredom is not something we’ve heard complained about.",
  },
  {
    title: "Honest comp.",
    description:
      "Market rate, transparent bands, reviewed every 6 months. No negotiation games.",
  },
];

export function CareersValuesSection() {
  return (
    <section
      className="w-full bg-[#0C0C0C] py-20 lg:py-28 border-b border-[#222222]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <span className="font-mono text-[12px] uppercase tracking-widest text-accentLime">
            {"//"} 001 &mdash; THE DEAL
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#666666]">
            PROTOCOL_CORE_VALUES
          </span>
        </div>

        {/* Value Rows */}
        <div className="flex flex-col">
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className={`border-t border-[#222222] py-[36px] flex flex-col md:flex-row md:items-start justify-between gap-6 group hover:bg-[#121212] transition-colors px-4 ${
                idx === VALUES.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="w-full md:w-5/12">
                <h3 className="text-[26px] sm:text-[28px] leading-[36px] font-medium text-[#F0EDE8] tracking-tight group-hover:text-accentLime transition-colors">
                  {val.title}
                </h3>
              </div>
              <div className="w-full md:w-7/12">
                <p className="text-[16px] text-[#888888] max-w-[560px] leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
