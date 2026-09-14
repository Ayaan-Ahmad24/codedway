import React from "react";

export function TestimonialSection() {
  return (
    <section className="py-24 px-6 bg-[#0C0C0C]">
      <div className="max-w-[820px] mx-auto">
        <div className="border-l-2 border-accentLime pl-8 sm:pl-10 py-2">
          <blockquote className="font-serif italic text-[22px] sm:text-[26px] text-[#D0CCC4] leading-relaxed mb-6 font-normal">
            &ldquo;Codedway didn&apos;t just build our MVP &mdash; they caught three architectural issues we would have paid six figures to fix later. Worth every penny.&rdquo;
          </blockquote>
          <cite className="not-italic text-[12px] text-[#777777] uppercase tracking-widest font-mono block">
            &mdash; Head of Product, Series A Fintech Startup, London
          </cite>
        </div>
      </div>
    </section>
  );
}
