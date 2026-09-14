import React from "react";
import Link from "next/link";

export function PortfolioCtaSection() {
  return (
    <section
      className="bg-accentLime text-[#0C0C0C] py-20 lg:py-24"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Left: Headline & Sub */}
        <div className="max-w-2xl">
          <h2 className="text-[38px] sm:text-[48px] font-bold tracking-tight text-[#0C0C0C] leading-tight mb-3">
            Have a project? Let&apos;s scope it.
          </h2>
          <p className="text-[16px] text-[#0C0C0C]/80 font-medium">
            We&apos;ll tell you honestly if we&apos;re the right fit.
          </p>
        </div>

        {/* Right: Sharp Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="bg-black text-[#F0EDE8] text-[13px] font-mono font-medium px-7 py-4 hover:bg-[#1a1a1a] transition-colors uppercase tracking-wider inline-flex items-center justify-center"
          >
            Start a Project
          </Link>
          <Link
            href="/#process"
            className="border border-black text-black text-[13px] font-mono font-medium px-7 py-4 hover:bg-black hover:text-accentLime transition-colors uppercase tracking-wider inline-flex items-center justify-center"
          >
            View Our Process &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
