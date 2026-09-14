import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

export function ServicesCtaSection() {
  return (
    <section className="w-full bg-[#C8FF57] text-[#0C0C0C] px-6 sm:px-12 lg:px-[8vw] py-20">
      <Reveal direction="up">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-[620px]">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-[#0C0C0C] leading-tight mb-3 font-sans">
              Still figuring out what you need?
            </h2>
            <p className="text-[16px] text-[#0C0C0C] font-normal leading-relaxed">
              That&apos;s fine. Most of our best projects started with a single Loom video.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="inline-flex items-center justify-center font-mono text-[12px] font-bold uppercase tracking-wider bg-[#0C0C0C] text-[#F0EDE8] px-8 py-4 hover:bg-[#222222] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] select-none"
              href="/contact?type=call"
            >
              Book 30 min call
            </Link>
            <Link
              className="inline-flex items-center justify-center font-mono text-[12px] font-bold uppercase tracking-wider border border-[#0C0C0C] text-[#0C0C0C] px-8 py-4 bg-transparent hover:bg-[#0C0C0C] hover:text-[#C8FF57] transition-colors select-none"
              href="/contact?type=voicenote"
            >
              Send a voice note &rarr;
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
