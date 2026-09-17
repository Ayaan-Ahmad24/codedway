"use client";

import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: 40, suffix: "+", label: "Specialized Engineers", sub: "Cloud, AI & Full-Stack" },
  { value: 8, suffix: "+ Yrs", label: "Production Track Record", sub: "Continuous Delivery" },
  { value: 99.98, suffix: "%", decimals: 2, label: "Infrastructure Uptime", sub: "Mission-Critical Systems" },
  { value: 42, suffix: "+", label: "Sovereign Deployments", sub: "US, UK, MENA & APAC" },
];

export function TrustStripSection() {
  return (
    <section className="w-full bg-[#101010] border-y border-[#222222] py-20 px-6 sm:px-12 relative">
      <div className="max-w-[1560px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#222222]">
          {STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100} direction="up">
              <div className="py-8 sm:py-2 sm:px-8 text-center flex flex-col items-center justify-center group hover:bg-[#141414]/60 transition-colors">
                <div className="font-serif italic text-[52px] sm:text-[60px] text-[#F0EDE8] leading-none mb-3 group-hover:text-accentLime transition-colors">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-[13px] uppercase text-[#E0E0E0] font-mono tracking-wider font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-[#777777] uppercase tracking-widest">
                  {stat.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
