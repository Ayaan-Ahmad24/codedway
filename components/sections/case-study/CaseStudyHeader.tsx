import React from "react";
import Link from "next/link";
import { CaseStudyFrontmatter } from "@/lib/mdx";

interface CaseStudyHeaderProps {
  frontmatter: CaseStudyFrontmatter;
}

export function CaseStudyHeader({ frontmatter }: CaseStudyHeaderProps) {
  const clientName = frontmatter.client || "Client";
  const categoryBadge = frontmatter.categoryBadge || `${frontmatter.industry} · 2024`;
  const heroTitle = frontmatter.heroTitle || {
    line1: "Building the",
    line2: "treasury tool",
    accent: "CFOs didn't know they needed.",
  };
  const metaStrip = frontmatter.metadataStrip || {
    client: clientName,
    timeline: "14 weeks · Q1 2024",
    role: frontmatter.services?.join(" · ") || "Product Design · Full-stack Engineering",
  };
  const telemetry = frontmatter.telemetry || {
    screen: `SCREEN_${frontmatter.indexNumber || "01"} // ASSET_NAV`,
    latency: "12ms",
    status: "STATUS: LIVE",
    loc: "LON_EQX_03",
    enc: "AES-GCM-256",
    title: frontmatter.monogram || "PROJECT",
    subtitle: frontmatter.subtitle || "System Architecture & Core Infrastructure",
  };

  return (
    <section className="w-full pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-[#222222]" style={{ paddingLeft: "8vw", paddingRight: "8vw" }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-[#666666]">
          <Link href="/case-studies" className="hover:text-accentLime transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-[#F0EDE8]">{frontmatter.title.split("—")[0].trim()}</span>
        </div>

        {/* Micro Category Badge */}
        <div className="mt-4 inline-flex self-start items-center gap-2 px-3 py-1 border border-accentLime bg-[#0C0C0C]">
          <span className="w-1.5 h-1.5 bg-accentLime inline-block" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-accentLime">
            {categoryBadge}
          </span>
        </div>

        {/* Editorial Headline */}
        <h1 className="mt-8 flex flex-col font-sans text-[42px] sm:text-[60px] lg:text-[76px] tracking-tight leading-[1.05] max-w-5xl">
          <span className="font-light text-[#F0EDE8]">{heroTitle.line1}</span>
          {heroTitle.line2 && (
            <span className="font-light text-[#F0EDE8]">{heroTitle.line2}</span>
          )}
          <span className="font-serif italic text-accentLime font-normal">
            {heroTitle.accent}
          </span>
        </h1>

        {/* 3-Column Metadata Strip */}
        <div className="mt-14 border-t border-b border-[#222222] py-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-[#222222]">
          <div className="flex flex-col md:pr-8">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#777777]">
              {"//"} Client
            </span>
            <span className="text-[16px] text-[#F0EDE8] font-medium mt-1">
              {metaStrip.client}
            </span>
          </div>
          <div className="flex flex-col md:px-8">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#777777]">
              {"//"} Timeline
            </span>
            <span className="text-[16px] text-[#F0EDE8] font-medium mt-1">
              {metaStrip.timeline}
            </span>
          </div>
          <div className="flex flex-col md:pl-8">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#777777]">
              {"//"} Our Role
            </span>
            <span className="text-[16px] text-[#F0EDE8] font-medium mt-1">
              {metaStrip.role}
            </span>
          </div>
        </div>

        {/* Project Architectural Canvas / Hero Visual Block */}
        <div className="w-full h-[440px] bg-[#141414] border border-[#222222] relative mt-10 flex flex-col items-center justify-center overflow-hidden">
          {/* Micro Grid Background */}
          <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

          {/* Coordinate Headers */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 font-mono text-[11px] text-[#777777] tracking-widest uppercase">
            <span>{telemetry.screen}</span>
            <span className="text-[#333333]">|</span>
            <span>LATENCY: {telemetry.latency}</span>
          </div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 font-mono text-[11px] text-[#777777]">
            <span className="w-2 h-2 bg-accentLime inline-block" />
            <span className="uppercase tracking-wider text-accentLime">
              {telemetry.status}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-mono text-[11px] text-[#777777]">
            <span>LOC: {telemetry.loc}</span>
          </div>
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 font-mono text-[11px] text-[#777777]">
            <span>ENC: {telemetry.enc}</span>
          </div>

          {/* Center Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <div className="w-12 h-1 bg-accentLime mb-6" />
            <span className="text-[36px] sm:text-[48px] font-bold tracking-wider text-[#F0EDE8] uppercase font-mono">
              {telemetry.title || frontmatter.title.split("—")[0].trim()}
            </span>
            <p className="font-mono text-[13px] sm:text-[14px] text-[#888888] mt-2 max-w-xl">
              {telemetry.subtitle}
            </p>

            {/* Inline Data Visualizer (Liquidity/Event Telemetry Curve) */}
            <div className="w-72 h-12 mt-6 flex items-end gap-1 px-4 py-2 bg-[#0C0C0C] border border-[#222222]">
              <div className="telemetry-bar w-full h-3 bg-[#2a2a2a] cursor-pointer hover:opacity-75" />
              <div className="telemetry-bar w-full h-5 bg-[#2a2a2a] cursor-pointer hover:opacity-75" />
              <div className="telemetry-bar w-full h-4 bg-[#2a2a2a] cursor-pointer hover:opacity-75" />
              <div className="telemetry-bar w-full h-8 bg-[#2a2a2a] cursor-pointer hover:opacity-75" />
              <div className="telemetry-bar w-full h-6 bg-accentLime cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="telemetry-bar w-full h-9 bg-accentLime cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="telemetry-bar w-full h-7 bg-accentLime cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="telemetry-bar w-full h-10 bg-accentLime cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
