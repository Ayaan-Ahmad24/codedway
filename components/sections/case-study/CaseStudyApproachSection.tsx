import React from "react";
import { CaseStudyFrontmatter } from "@/lib/mdx";

interface CaseStudyApproachSectionProps {
  frontmatter: CaseStudyFrontmatter;
}

export function CaseStudyApproachSection({ frontmatter }: CaseStudyApproachSectionProps) {
  const approach = frontmatter.approach || {
    headline: "We started with their worst week, not their best case.",
    phases: [
      {
        phase: "Phase 01",
        title: "Discovery (Wk 1–2)",
        desc: "Shadowing domain operators, mapping payload variances across fragmented external APIs and data sources.",
        tag: "// RECON_MAP",
      },
      {
        phase: "Phase 02",
        title: "Architecture (Wk 3–4)",
        desc: "Designing idempotent webhook ingest pipelines, event-driven ledger sync, and strict encryption envelopes.",
        tag: "// SCHEMA_VALID",
      },
      {
        phase: "Phase 03",
        title: "Build Sprints (Wk 5–12)",
        desc: "Four dual-week production sprints covering core processing engines, real-time feeds, and automated rules.",
        tag: "// 4x_SPRINT_CYCLE",
      },
      {
        phase: "Phase 04",
        title: "QA & Launch (Wk 13–14)",
        desc: "Hermetic load tests simulating high-throughput load, compliance sign-offs, and zero-downtime cutover.",
        tag: "// AUDIT_PASS_01",
      },
    ],
    quote: {
      text: "The Codedway team joined our sprint on day three. By day five they'd already spotted an architectural issue we'd been living with for two years.",
      author: "— CTO",
    },
  };

  return (
    <section
      className="w-full py-20 lg:py-28 border-b border-[#222222] bg-[#0C0C0C]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="font-mono text-[12px] uppercase tracking-widest text-accentLime mb-4">
          02 / Our Approach
        </div>
        <h2 className="text-[32px] sm:text-[44px] font-light text-[#F0EDE8] mb-16 max-w-3xl">
          {approach.headline}
        </h2>

        {/* Timeline Grid with Structural Track Line */}
        <div className="relative w-full">
          <div className="hidden lg:block absolute top-0 left-0 w-full h-[1px] bg-[#222222]" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.phases?.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#121212] border border-[#222222] p-8 flex flex-col justify-between"
              >
                <div
                  className={`absolute -top-[5px] left-6 w-2 h-2 hidden lg:block ${
                    idx === 0 ? "bg-accentLime" : "bg-[#333333]"
                  }`}
                />
                <div>
                  <span className="font-mono text-[11px] text-accentLime block mb-2 uppercase tracking-wider">
                    {item.phase}
                  </span>
                  <h3 className="text-[18px] font-medium text-[#F0EDE8] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#888888] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#555555] mt-8 block">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Blockquote */}
        {approach.quote && (
          <div className="mt-14 p-8 bg-[#121212] border-l-4 border-accentLime">
            <blockquote className="font-serif text-[20px] sm:text-[24px] italic text-[#F0EDE8] leading-relaxed">
              &ldquo;{approach.quote.text}&rdquo;
            </blockquote>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#777777] mt-4">
              {approach.quote.author}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
