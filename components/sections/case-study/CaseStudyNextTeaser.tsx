import React from "react";
import Link from "next/link";
import { CaseStudyFrontmatter, ContentItem } from "@/lib/mdx";

interface CaseStudyNextTeaserProps {
  nextProject: ContentItem<CaseStudyFrontmatter>;
}

export function CaseStudyNextTeaser({ nextProject }: CaseStudyNextTeaserProps) {
  const fm = nextProject.frontmatter;
  const title = fm.title;
  const techStack = fm.stack?.slice(0, 3).join(" · ") || fm.services?.slice(0, 3).join(" · ");

  return (
    <section
      className="w-full bg-[#0C0C0C] py-20 lg:py-24 border-b border-[#222222]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Monolithic Marker */}
        <div className="font-serif text-[60px] sm:text-[76px] lg:text-[96px] text-[#222222] font-light select-none leading-none">
          Next &rarr;
        </div>

        {/* Project Content */}
        <div className="flex flex-col max-w-xl">
          <h3 className="text-[22px] sm:text-[26px] font-light text-[#F0EDE8] mb-2">
            {title}
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-widest text-accentLime">
            {techStack}
          </span>
        </div>

        {/* Action Link */}
        <Link
          href={`/case-studies/${nextProject.slug}`}
          className="inline-flex items-center gap-2 text-[14px] text-[#F0EDE8] hover:text-accentLime transition-colors pb-1 border-b border-accentLime tracking-wide font-medium font-mono"
        >
          <span>View case study &rarr;</span>
        </Link>
      </div>
    </section>
  );
}
