import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

export function CallToActionSection() {
  return (
    <section id="contact" className="w-full bg-accentLime py-24 px-6 sm:px-12 text-[#0C0C0C]">
      <Reveal direction="up">
        <div className="max-w-[1560px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[40px] sm:text-[52px] font-bold tracking-tight text-[#0C0C0C] leading-none mb-4">
              Ready to build something real?
            </h2>
            <p className="text-[16px] text-[#0C0C0C]/80 font-medium">
              No pitches. No decks. Just a conversation about your product.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#0C0C0C] text-[#F0EDE8] px-6 py-4 text-[14px] font-mono uppercase tracking-wider font-medium hover:bg-[#1A1A1A] transition-colors select-none"
            >
              Schedule a call
            </Link>
            <Link
              href="/contact"
              className="border border-[#0C0C0C] text-[#0C0C0C] px-6 py-4 text-[14px] font-mono uppercase tracking-wider font-medium hover:bg-[#0C0C0C] hover:text-accentLime transition-colors select-none"
            >
              Send a brief &rarr;
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
