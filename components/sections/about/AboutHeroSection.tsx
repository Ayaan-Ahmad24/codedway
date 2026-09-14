import Link from "next/link";

export function AboutHeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-between px-6 sm:px-12 lg:px-12 py-12 lg:py-16 border-b border-[#201f1f]">
      <div className="flex flex-col items-start max-w-5xl my-auto">
        {/* Breadcrumb & Micro-label */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="font-mono text-[12px] tracking-widest text-[#8d937c] uppercase">
            Home / About
          </span>
          <span className="text-[#201f1f] text-xs hidden sm:inline">/</span>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1c1b1b] border border-[#201f1f]">
            <span className="w-1.5 h-1.5 bg-[#bef44d]" />
            <span className="font-mono text-[11px] text-[#bef44d] uppercase tracking-wider">
              Est. 2021 · Lahore, Pakistan · Remote-first
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="flex flex-col tracking-tight select-none mb-8">
          <span className="text-4xl sm:text-6xl lg:text-[88px] lg:leading-[92px] font-light text-[#e5e2e1] font-sans">
            We&apos;re not
          </span>
          <span className="text-4xl sm:text-6xl lg:text-[88px] lg:leading-[92px] font-light text-[#e5e2e1] font-sans">
            an agency.
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[88px] lg:leading-[92px] italic text-[#bef44d] font-normal mt-1">
            We&apos;re engineers.
          </h1>
        </div>

        {/* Subheadline (AIO target) */}
        <p className="text-[16px] sm:text-[18px] text-[#c9c6c1] max-w-xl font-normal leading-relaxed">
          Codedway is a product engineering company. We happen to work for clients.
        </p>
      </div>

      {/* Bottom Architectural Indicator */}
      <div className="w-full flex items-end justify-between pt-8 border-t border-[#201f1f]/60">
        <div className="flex items-center gap-4 font-mono text-[11px] text-[#8d937c] uppercase tracking-widest">
          <span>SYS_REF: 000//ABOUT</span>
          <span>•</span>
          <span>LATENCY: 18MS</span>
        </div>
        <Link
          href="#origin"
          className="flex items-center gap-2 font-mono text-[11px] text-[#8d937c] uppercase tracking-widest hover:text-[#bef44d] transition-colors"
        >
          <span className="hidden sm:inline">EXPLORE ARCHITECTURE</span>
          <span className="text-[#bef44d] font-bold">&darr;</span>
        </Link>
      </div>
    </section>
  );
}
