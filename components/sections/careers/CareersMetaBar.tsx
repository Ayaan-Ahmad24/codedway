import React from "react";
import Link from "next/link";

export function CareersMetaBar() {
  return (
    <div
      className="w-full bg-[#0C0C0C] border-b border-[#222222] py-3 flex items-center justify-between"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#666666] tracking-wider uppercase">
        <Link href="/" className="hover:text-[#888888] transition-colors">
          Index
        </Link>
        <span className="text-[#333333]">/</span>
        <span>System</span>
        <span className="text-[#333333]">/</span>
        <span className="text-accentLime font-semibold">Careers [Node: 06_ACTIVE]</span>
      </div>

      <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-[#777777]">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accentLime inline-block" />
          PIPELINE: UNRESTRICTED
        </span>
        <span className="text-[#333333]">|</span>
        <span>LATENCY: 0.04ms</span>
      </div>
    </div>
  );
}
