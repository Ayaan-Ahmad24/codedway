import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 sm:px-12 md:pl-[8vw] md:pr-12 bg-[#0C0C0C] border-b border-[#1A1A1A]">
      {/* Top micro-label */}
      <Reveal delay={100} direction="down">
        <div className="pt-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#161616] border border-[#222222] text-[12px] text-[#888888] tracking-wide">
            <span className="w-2 h-2 rounded-none bg-accentLime animate-lime-blink" />
            <span>Available for new projects · 2026</span>
          </div>
        </div>
      </Reveal>

      {/* Main editorial headline */}
      <div className="my-auto py-12">
        <Reveal delay={200} direction="up">
          <h1 className="text-[64px] sm:text-[80px] lg:text-[96px] leading-[0.95] tracking-[-0.035em] text-[#F0EDE8] select-none font-sans">
            <span className="block font-light">Software</span>
            <span className="block font-light">that earns</span>
            <span className="block font-bold italic font-serif text-accentLime tracking-tight">
              its keep.
            </span>
          </h1>
        </Reveal>

        {/* Single line definition-style descriptor */}
        <Reveal delay={350} direction="up">
          <p className="mt-10 text-[17px] text-[#888888] font-light max-w-2xl leading-relaxed">
            We partner with founders and product teams to design, build, and ship &mdash; fast.
          </p>
        </Reveal>

        {/* Inline links */}
        <Reveal delay={500} direction="up">
          <div className="mt-8 flex items-center gap-4 text-[15px]">
            <Link
              href="/case-studies"
              className="text-[#F0EDE8] underline underline-offset-8 decoration-1 decoration-[#F0EDE8] hover:text-accentLime hover:decoration-accentLime transition-all"
            >
              &rarr; View our work
            </Link>
            <span className="text-[#444444]">·</span>
            <Link
              href="/#process"
              className="text-[#888888] hover:text-[#F0EDE8] transition-colors"
            >
              See how we work
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Hero bottom row */}
      <div className="w-full flex items-end justify-between pt-8 border-t border-[#1A1A1A]/60">
        <div className="text-[12px] text-[#666666] tracking-wider uppercase font-mono">
          42 projects shipped · 8 countries
        </div>

        <div className="flex items-center gap-2 text-[11px] text-[#666666] uppercase tracking-widest font-mono">
          <span>Scroll to explore</span>
          <span className="text-accentLime text-xs transform -rotate-90 inline-block">&larr;</span>
        </div>
      </div>
    </section>
  );
}
