import React from "react";
import Link from "next/link";

export function CareersCtaBanner() {
  return (
    <section
      className="w-full bg-accentLime py-20 lg:py-24 text-[#0C0C0C]"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#0C0C0C] leading-tight tracking-tight">
            Great work starts somewhere.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#0C0C0C]/80 font-medium">
            Ours started with a Google Doc and a bad client. Yours could start here.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            className="inline-flex items-center justify-center font-mono text-[13px] uppercase tracking-wider bg-[#0C0C0C] text-accentLime px-8 py-4 hover:bg-[#1a1a1a] transition-all"
            href="#open-roles"
          >
            View open roles &uarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
