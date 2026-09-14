const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We get into the weeds of your product before writing a line of code.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Technical blueprint, stack decisions, tradeoffs — all on the table.",
  },
  {
    number: "03",
    title: "Build",
    description: "Sprints, reviews, real demos. You're never in the dark.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We don't disappear at handoff. We stay until it's stable.",
  },
];

import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section id="process" className="pt-32 pb-32 px-6 sm:px-12 max-w-[1560px] mx-auto">
      <Reveal direction="up">
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] font-mono mb-4">
            003 / Process
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-light tracking-tight text-[#F0EDE8]">
            No hand-holding. Just shipping.
          </h2>
        </div>
      </Reveal>

      {/* 4-step row with thin vertical lime dividers */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-[#222222]">
        {PROCESS_STEPS.map((step, idx) => {
          const isLast = idx === PROCESS_STEPS.length - 1;
          const isFirst = idx === 0;

          return (
            <Reveal key={step.number} delay={idx * 90} direction="up">
              <div
                className={`py-10 ${
                  isFirst
                    ? "pr-6 md:pr-8 md:border-r border-accentLime/40"
                    : isLast
                    ? "md:pl-8"
                    : "md:px-8 md:border-r border-accentLime/40"
                }`}
              >
                <div className="text-[48px] font-light text-[#444444] font-mono leading-none mb-6">
                  {step.number}
                </div>
                <h3 className="text-[16px] font-bold text-[#F0EDE8] mb-3">{step.title}</h3>
                <p className="text-[14px] text-[#888888] leading-relaxed font-light">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
