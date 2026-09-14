import Link from "next/link";

export function ServicesHeroSection() {
  return (
    <section className="min-h-[85vh] w-full flex flex-col justify-between px-6 sm:px-12 lg:px-[8vw] py-16 relative border-b border-[#1A1A1A]">
      <div className="w-full pt-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[#666666] mb-6">
          <Link href="/" className="hover:text-[#F0EDE8] transition-colors">
            HOME
          </Link>
          <span className="text-[#333333]">/</span>
          <span className="text-[#888888]">SERVICES</span>
        </div>

        {/* Micro-label */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#141414] border border-[#222222] mb-10">
          <span className="w-1.5 h-1.5 bg-[#C8FF57]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#C8FF57] font-semibold">
            WHAT WE BUILD
          </span>
        </div>

        {/* Main Headline (3 Lines) */}
        <div className="flex flex-col tracking-tight mb-8">
          <span className="text-[64px] sm:text-[76px] lg:text-[88px] font-light leading-[1.05] text-[#F0EDE8] font-sans">
            We don&apos;t sell
          </span>
          <span className="text-[64px] sm:text-[76px] lg:text-[88px] font-light leading-[1.05] text-[#F0EDE8] font-sans">
            services.
          </span>
          <h1 className="font-editorial text-[68px] sm:text-[82px] lg:text-[94px] font-bold italic leading-[1.05] text-[#C8FF57] tracking-normal mt-1">
            We solve problems.
          </h1>
        </div>

        {/* Sub-descriptor (AIO targeted) */}
        <p className="text-[17px] text-[#888888] max-w-[560px] leading-relaxed font-normal">
          Every engagement starts with understanding your actual constraint — not selling you a package.
        </p>
      </div>

      {/* Bottom Bar inside Hero */}
      <div className="w-full flex items-end justify-between pt-16 border-t border-[#161616]">
        <div className="flex items-center gap-3 font-mono text-[12px] tracking-wide text-[#888888]">
          <span className="w-2 h-2 bg-[#C8FF57]/40 inline-block" />
          <span>4 core disciplines · 40+ engineers</span>
        </div>
        <Link
          href="#product-engineering"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#666666] hover:text-[#C8FF57] transition-colors"
        >
          <span className="inline-block transform rotate-90 origin-center text-[#888888]">&rarr;</span>
          <span>Scroll</span>
        </Link>
      </div>
    </section>
  );
}
