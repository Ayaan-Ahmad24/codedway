import React from "react";
import Link from "next/link";

interface PortfolioHeroSectionProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  counts: {
    ALL: number;
    WEB: number;
    MOBILE: number;
    "AI & ML": number;
    INFRA: number;
  };
}

const CATEGORIES = ["ALL", "WEB", "MOBILE", "AI & ML", "INFRA"] as const;

export function PortfolioHeroSection({
  activeCategory,
  onSelectCategory,
  counts,
}: PortfolioHeroSectionProps) {
  return (
    <header
      className="pt-32 pb-12 lg:pt-36 lg:pb-16 border-b border-[#1A1A1A] relative"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Meta Row: Breadcrumb & Micro-Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav aria-label="Breadcrumb" className="text-[12px] uppercase tracking-widest text-[#555555] font-mono">
            <Link href="/" className="hover:text-[#888888] transition-colors">
              HOME
            </Link>{" "}
            / <span className="text-[#888888]">WORK</span>
          </nav>
          <div className="inline-flex items-center space-x-2 border border-[#222222] bg-[#111111] px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 bg-accentLime animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-accentLime font-mono font-medium">
              SELECTED WORKS · 2021–2026
            </span>
          </div>
        </div>

        {/* Editorial Headline & Subtitle */}
        <div className="max-w-4xl mb-14">
          <h1 className="text-[48px] sm:text-[64px] lg:text-[76px] leading-[1.02] tracking-tight mb-6 font-sans">
            <span className="font-light text-[#F0EDE8]">Work we&apos;d </span>
            <span className="font-normal italic font-serif text-accentLime">put our name on.</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#888888] max-w-xl leading-relaxed font-light">
            Every project here shipped. Every client came back.
          </p>
        </div>

        {/* Clean High-Precision Filter Row with Counts & Telemetry */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-6 border-t border-[#1A1A1A]">
          <div className="flex items-center space-x-6 sm:space-x-8 text-[12px] font-mono tracking-wider overflow-x-auto pb-2 lg:pb-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count = counts[cat] ?? 0;
              const formattedCount = String(count).padStart(2, "0");

              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`pb-1.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? "text-[#F0EDE8] border-accentLime font-medium"
                      : "text-[#666666] hover:text-[#F0EDE8] border-transparent font-normal"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 border ${
                      isActive
                        ? "text-accentLime bg-[#1a2512] border-accentLime/30"
                        : "text-[#555555] bg-[#161616] border-[#222]"
                    }`}
                  >
                    [{formattedCount}]
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-[#555555] tracking-widest uppercase flex items-center space-x-3 select-none">
            <span className="w-1.5 h-1.5 bg-[#444]" />
            <span>SYS_REF: ARCHIVE_V2.6</span>
            <span className="text-[#333]">•</span>
            <span className="text-[#777]">INDEXING {counts.ALL ?? 6} REPOS</span>
          </div>
        </div>
      </div>
    </header>
  );
}
