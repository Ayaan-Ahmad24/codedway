import React from "react";
import Link from "next/link";
import { CaseStudyFrontmatter, ContentItem } from "@/lib/mdx";
import { Reveal } from "@/components/ui/Reveal";

interface ProjectGridSectionProps {
  projects: ContentItem<CaseStudyFrontmatter>[];
}

export function ProjectGridSection({ projects }: ProjectGridSectionProps) {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => {
            const fm = project.frontmatter;
            const indexStr = fm.indexNumber || "01";
            const monogram = fm.monogram || "CW";
            const status = fm.statusBadge || "LIVE IN PRODUCTION";
            const categoryBadge = fm.categoryBadge || `${fm.industry?.toUpperCase()} · 2024`;
            const title = fm.title;
            const subtitle =
              fm.subtitle ||
              (project.content
                ? project.content.split("\n\n")[0]?.replace(/^#+\s+/g, "")
                : "");
            const metrics = fm.metrics || [];
            const stack = fm.stack || fm.services || [];

            return (
              <Reveal key={project.slug} delay={(idx % 2) * 100} direction="up" className="h-full">
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="group flex flex-col justify-between border border-[#222222] bg-[#121212] p-8 sm:p-10 hover:border-[#444444] transition-colors h-full"
                >
                <div>
                  {/* Top Row: Index, Monogram, Status */}
                  <div className="flex items-center justify-between border-b border-[#1C1C1C] pb-5 mb-7">
                    <div className="flex items-center space-x-3">
                      <span className="text-[13px] font-mono font-medium text-[#666666]">
                        {indexStr} {"//"}
                      </span>
                      <div className="w-8 h-8 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
                        <span className="text-[13px] font-bold text-[#F0EDE8] font-mono">
                          {monogram}
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex items-center space-x-2 text-[11px] font-mono text-[#999999] bg-[#181818] px-3 py-1 border border-[#282828]">
                      <span className="w-1.5 h-1.5 bg-accentLime" />
                      <span>{status}</span>
                    </div>
                  </div>

                  {/* Taxonomy */}
                  <div className="text-[11px] uppercase tracking-widest text-[#777777] font-mono mb-2">
                    {categoryBadge}
                  </div>

                  {/* Project Title */}
                  <h2 className="text-[26px] sm:text-[28px] font-medium text-[#F0EDE8] mb-3 tracking-tight group-hover:text-accentLime transition-colors">
                    {title}
                  </h2>

                  {/* Architecture Subtitle */}
                  <p className="text-[14px] text-[#888888] font-light leading-relaxed mb-8">
                    {subtitle}
                  </p>

                  {/* Key Metrics Bar */}
                  {metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {metrics.slice(0, 2).map((m, idx) => (
                        <div
                          key={idx}
                          className="bg-[#181818] border border-[#222222] p-3"
                        >
                          <div className="text-[10px] font-mono uppercase text-[#666666] mb-1">
                            {m.label}
                          </div>
                          <div className="text-[14px] font-mono font-medium text-[#E5E2E1]">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row: Tech Stack & CTA */}
                <div className="pt-6 border-t border-[#1C1C1C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono text-[#888888] border border-[#262626] bg-[#161616] px-2.5 py-1 uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1.5 text-accentLime text-[13px] font-mono font-medium select-none whitespace-nowrap">
                    <span>Explore Architecture</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
        </div>

        {/* Centered Bottom Inscription */}
        <div className="mt-16 text-center border-t border-[#1A1A1A] pt-10">
          <p className="text-[13px] text-[#555555] font-mono">
            More work available on request —{" "}
            <a
              className="text-[#888888] hover:text-accentLime underline underline-offset-4 transition-colors"
              href="mailto:enquiries@codedway.com"
            >
              enquiries@codedway.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
