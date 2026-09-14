import React from "react";
import Link from "next/link";

export function ContactHeroSection() {
  return (
    <>
      <section
        className="pt-32 pb-16 lg:pt-36 lg:pb-20"
        style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="text-[12px] font-mono tracking-wider text-[#555555] uppercase mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-[#888888] transition-colors">
                Home
              </Link>
              <span className="text-[#333333]">/</span>
              <span className="text-[#888888]">Contact</span>
            </div>

            {/* Micro-label */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-[#141414] border border-accentLime text-accentLime text-[11px] font-mono uppercase tracking-wider">
                Response within 24hrs · No sales calls
              </span>
            </div>

            {/* Headline 2 lines */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F0EDE8] leading-[1.05] mb-6">
              Tell us what
              <br />
              <span className="font-serif italic font-normal text-accentLime">
                you&apos;re building.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#888888] font-light max-w-xl leading-relaxed">
              We read every brief personally. No auto-replies. No SDRs.
            </p>
          </div>
        </div>
      </section>

      {/* 1px divider */}
      <div style={{ paddingLeft: "8vw", paddingRight: "8vw" }}>
        <div className="max-w-[1440px] mx-auto w-full h-px bg-[#1A1A1A]" />
      </div>
    </>
  );
}
