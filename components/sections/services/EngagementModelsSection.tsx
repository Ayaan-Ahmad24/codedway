export function EngagementModelsSection() {
  return (
    <section id="engagement-models" className="w-full bg-[#111111] px-6 sm:px-12 lg:px-[8vw] py-24 border-b border-[#1A1A1A]">
      {/* Section Label */}
      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#C8FF57] mb-4">
        {"//"} HOW WE ENGAGE
      </div>

      {/* Section Headline */}
      <h2 className="text-[34px] sm:text-[40px] font-light text-[#F0EDE8] mb-16 font-sans">
        Pick the model that fits.
      </h2>

      {/* 3 Sharp Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Project-based */}
        <div className="bg-[#141414] border border-[#222222] p-8 flex flex-col justify-between relative shadow-[4px_4px_0px_0px_#000000]">
          <div>
            <span className="font-mono text-[11px] text-[#666666] uppercase block mb-4">
              MOD_01
            </span>
            <h3 className="text-[24px] font-bold text-[#F0EDE8] mb-4 font-sans">
              Project-based
            </h3>
            <p className="text-[14px] text-[#888888] leading-relaxed mb-8">
              Fixed scope, timeline, and cost. Best for: MVPs, feature builds, redesigns.
            </p>
          </div>
          <div>
            <div className="w-full h-px bg-[#222222] mb-4" />
            <span className="font-mono text-[12px] text-[#888888] tracking-wide block">
              Fixed · Milestone-based
            </span>
          </div>
        </div>

        {/* Card 2: Retainer (Accented with Lime Border) */}
        <div className="bg-[#141414] border border-[#C8FF57] p-8 flex flex-col justify-between relative shadow-[4px_4px_0px_0px_#000000]">
          {/* Badge */}
          <div className="absolute -top-[1px] -right-[1px] bg-[#C8FF57] text-[#0C0C0C] font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1">
            MOST POPULAR
          </div>
          <div>
            <span className="font-mono text-[11px] text-[#C8FF57] uppercase block mb-4">
              MOD_02
            </span>
            <h3 className="text-[24px] font-bold text-[#F0EDE8] mb-4 font-sans">
              Retainer
            </h3>
            <p className="text-[14px] text-[#888888] leading-relaxed mb-8">
              Ongoing monthly partnership. Dedicated team slice, weekly sprints, full access.
            </p>
          </div>
          <div>
            <div className="w-full h-px bg-[#26331a] mb-4" />
            <span className="font-mono text-[12px] text-[#C8FF57] font-medium tracking-wide block">
              Ongoing · Rolling monthly
            </span>
          </div>
        </div>

        {/* Card 3: Embedded */}
        <div className="bg-[#141414] border border-[#222222] p-8 flex flex-col justify-between relative shadow-[4px_4px_0px_0px_#000000]">
          <div>
            <span className="font-mono text-[11px] text-[#666666] uppercase block mb-4">
              MOD_03
            </span>
            <h3 className="text-[24px] font-bold text-[#F0EDE8] mb-4 font-sans">
              Embedded
            </h3>
            <p className="text-[14px] text-[#888888] leading-relaxed mb-8">
              One or more engineers join your existing team. Work in your tools, your processes, your standups.
            </p>
          </div>
          <div>
            <div className="w-full h-px bg-[#222222] mb-4" />
            <span className="font-mono text-[12px] text-[#888888] tracking-wide block">
              Long-term · Culture-fit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
