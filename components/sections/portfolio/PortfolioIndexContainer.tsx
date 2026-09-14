"use client";

import React, { useState, useMemo } from "react";
import { CaseStudyFrontmatter, ContentItem } from "@/lib/mdx";
import { PortfolioHeroSection } from "./PortfolioHeroSection";
import { ProjectGridSection } from "./ProjectGridSection";
import { ProofSection } from "./ProofSection";
import { TestimonialSection } from "./TestimonialSection";
import { PortfolioCtaSection } from "./PortfolioCtaSection";

interface PortfolioIndexContainerProps {
  initialProjects: ContentItem<CaseStudyFrontmatter>[];
}

export function PortfolioIndexContainer({
  initialProjects,
}: PortfolioIndexContainerProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const counts = useMemo(() => {
    return {
      ALL: initialProjects.length,
      WEB: initialProjects.filter((p) =>
        p.frontmatter.filterCategories?.includes("WEB")
      ).length,
      MOBILE: initialProjects.filter((p) =>
        p.frontmatter.filterCategories?.includes("MOBILE")
      ).length,
      "AI & ML": initialProjects.filter((p) =>
        p.frontmatter.filterCategories?.includes("AI & ML")
      ).length,
      INFRA: initialProjects.filter((p) =>
        p.frontmatter.filterCategories?.includes("INFRA")
      ).length,
    };
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return initialProjects;
    }
    return initialProjects.filter((p) =>
      p.frontmatter.filterCategories?.includes(activeCategory)
    );
  }, [initialProjects, activeCategory]);

  return (
    <div className="bg-[#0C0C0C] text-[#F0EDE8] min-h-screen">
      <PortfolioHeroSection
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={counts}
      />
      <ProjectGridSection projects={filteredProjects} />
      <ProofSection />
      <TestimonialSection />
      <PortfolioCtaSection />
    </div>
  );
}
