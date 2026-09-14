import React from "react";
import { CaseStudyFrontmatter } from "@/lib/mdx";

interface CaseStudyBuildSectionProps {
  frontmatter: CaseStudyFrontmatter;
}

export function CaseStudyBuildSection({ frontmatter }: CaseStudyBuildSectionProps) {
  const features = frontmatter.features || [
    {
      title: "Real-time Event Processing Engine",
      desc: "Sub-second event sourcing architecture tracking continuous state changes and telemetry streams across distributed clusters.",
      tech: "Node.js · PostgreSQL · WebSockets",
    },
    {
      title: "Resilient API Aggregation Layer",
      desc: "Unified normalization layer abstracting disparate third-party protocol specifications into a fault-tolerant connection pool.",
      tech: "TypeScript · Redis · REST",
    },
    {
      title: "Predictive Analytics & Forecasting",
      desc: "Heuristic variance forecasting simulating key performance metrics and operating runways under volatile traffic scenarios.",
      tech: "Python · Pandas · AI Models",
    },
    {
      title: "Role-Based Security Architecture",
      desc: "Granular approval matrices, zero-trust cryptographic access policies, and hardware step-up verification.",
      tech: "Auth0 · RBAC · Next.js",
    },
    {
      title: "Immutable Audit Ledger",
      desc: "Cryptographically verified tamper-evident activity log maintaining audit-compliant histories for external regulators.",
      tech: "PostgreSQL · AWS S3 · Encryption",
    },
    {
      title: "High-Performance Mobile Interface",
      desc: "Condensed mobile viewport delivering critical operational ratios, anomaly push notifications, and instant authorizations.",
      tech: "React Native · Flutter · WebGL",
    },
  ];

  return (
    <section
      className="w-full py-20 lg:py-28 border-b border-[#222222]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="font-mono text-[12px] uppercase tracking-widest text-accentLime mb-4">
          03 / What We Built
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#222222] p-8 relative hover:border-accentLime/40 transition-colors flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 font-mono text-accentLime text-[16px] select-none">
                ✓
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-[#F0EDE8] mb-3 pr-6">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#888888] leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
              <div className="font-mono text-[11px] text-accentLime uppercase mt-8 tracking-wider">
                {card.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
