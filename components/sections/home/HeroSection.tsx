import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-between pt-32 pb-12 px-6 sm:px-12 md:pl-[8vw] md:pr-12 bg-[#0C0C0C] tech-grid-bg relative overflow-hidden border-b border-[#1A1A1A]">
      {/* Ambient Radial Tech Glow */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />

      {/* Top micro-label with live enterprise telemetry */}
      <Reveal delay={100} direction="down">
        <div className="pt-6 relative z-10 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#161616]/90 backdrop-blur-sm border border-[#262626] text-[12px] text-[#A0A0A0] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-accentLime radar-pulse" />
            <span className="font-mono uppercase text-[11px] tracking-wider text-accentLime">STATUS: NOMINAL</span>
            <span className="text-[#444444]">|</span>
            <span>Available for Enterprise Engagements · 2026</span>
          </div>
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111]/80 border border-[#222222] font-mono text-[11px] text-[#666666] tracking-widest uppercase">
            <span>SOC2 · ISO-READY · HIGH-THROUGHPUT</span>
          </div>
        </div>
      </Reveal>

      {/* Main editorial headline */}
      <div className="my-auto py-10 relative z-10">
        <Reveal delay={200} direction="up" blur scale>
          <div className="inline-block font-mono text-[12px] uppercase tracking-[0.25em] text-[#888888] mb-4">
            [ ARCHITECTURE // DIGITAL TRANSFORMATION ]
          </div>
          <h1 className="text-[56px] sm:text-[76px] lg:text-[98px] leading-[0.95] tracking-[-0.035em] text-[#F0EDE8] select-none font-sans font-light">
            <span className="block">High-performance</span>
            <span className="block">software that earns</span>
            <span className="block font-bold italic font-serif text-accentLime tracking-tight drop-shadow-[0_0_20px_rgba(200,255,87,0.25)]">
              its keep.
            </span>
          </h1>
        </Reveal>

        {/* Descriptor with enterprise tone */}
        <Reveal delay={350} direction="up">
          <p className="mt-8 text-[17px] sm:text-[19px] text-[#A0A0A0] font-light max-w-2xl leading-relaxed">
            We partner with visionary founders and global product teams to engineer fault-tolerant cloud systems, bespoke AI models, and mission-critical applications with zero technical compromise.
          </p>
        </Reveal>

        {/* Enterprise Action buttons & links */}
        <Reveal delay={450} direction="up">
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accentLime text-[#0C0C0C] px-7 py-4 text-[14px] font-mono uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0C0C0C] transition-all duration-200 shadow-[0_0_20px_rgba(200,255,87,0.3)]"
            >
              <span>Consult an architect</span>
              <span>&rarr;</span>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 bg-[#141414] border border-[#2E2E2E] text-[#F0EDE8] px-7 py-4 text-[14px] font-mono uppercase tracking-wider font-medium hover:border-accentLime hover:text-accentLime transition-all duration-200"
            >
              <span>View deployments</span>
            </Link>
            <Link
              href="/#process"
              className="text-[#888888] hover:text-[#F0EDE8] text-[14px] underline underline-offset-8 transition-colors ml-2"
            >
              Engineering Cadence &rarr;
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Hero bottom telemetry row */}
      <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between pt-8 border-t border-[#1F1F1F] gap-4 relative z-10">
        <div className="flex flex-wrap items-center gap-6 text-[12px] text-[#777777] font-mono uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accentLime inline-block" />
            42+ Enterprise Deployments
          </span>
          <span className="text-[#333333]">/</span>
          <span>8 Sovereign Regions</span>
          <span className="text-[#333333]">/</span>
          <span>99.99% Architecture SLA</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-[#666666] uppercase tracking-widest font-mono">
          <span>Scroll to explore</span>
          <span className="text-accentLime text-xs transform -rotate-90 inline-block animate-bounce">&larr;</span>
        </div>
      </div>
    </section>
  );
}

