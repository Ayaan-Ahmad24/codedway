import React from "react";

export function ContactTrustStrip() {
  return (
    <section className="w-full bg-[#111111] border-y border-[#1A1A1A] py-14">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-4 text-sm sm:text-[15px] text-[#888888] font-light tracking-wide">
          <span>40+ projects shipped</span>
          <span className="text-accentLime select-none font-bold">·</span>
          <span>US, UK, MENA clients</span>
          <span className="text-accentLime select-none font-bold">·</span>
          <span className="text-[#F0EDE8]/90 font-normal">
            Zero ghost clients &mdash; we finish what we start
          </span>
        </div>
      </div>
    </section>
  );
}
