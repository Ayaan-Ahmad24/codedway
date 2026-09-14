import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

import { Reveal } from "@/components/ui/Reveal";

export function AboutCtaSection() {
  return (
    <section className="w-full bg-[#bef44d] px-6 sm:px-12 lg:px-12 py-20 lg:py-24 text-[#0C0C0C]">
      <Reveal direction="up">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-[#141f00] tracking-tight leading-none mb-4 font-sans">
              We&apos;re not hard to reach.
            </h2>
            <p className="text-[16px] text-[#141f00] font-normal opacity-90 leading-relaxed">
              No contact form maze. Just an email and a human engineer on the other end.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="bg-[#0C0C0C] text-[#bef44d] hover:bg-[#353534] transition-colors px-8 py-4 font-mono text-[12px] uppercase tracking-widest font-bold inline-block select-none"
              href="/contact"
            >
              Start a project
            </Link>
            <Link
              className="border border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-[#bef44d] transition-all px-8 py-4 font-mono text-[12px] uppercase tracking-widest font-bold inline-block select-none"
              href="/case-studies"
            >
              See our work &rarr;
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
