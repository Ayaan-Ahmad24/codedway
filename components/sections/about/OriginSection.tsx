const TIMELINE = [
  {
    year: "2021",
    description:
      "Founded by 3 systems engineers in Lahore united by a shared frustration with agency theatre.",
  },
  {
    year: "2022",
    description:
      "First international enterprise contract. Closed our initial 6-figure distributed pipeline deployment.",
  },
  {
    year: "2023",
    description:
      "Scaled to 20 core engineers. First production LLM inference pipeline integrated into high-throughput fintech infrastructure.",
  },
  {
    year: "2024",
    description:
      "40+ full-stack and systems engineers. Active production code powering platforms across US, UK, and MENA regions.",
  },
];

export function OriginSection() {
  return (
    <section id="origin" className="w-full px-6 sm:px-12 lg:px-12 py-24 border-b border-[#201f1f]">
      {/* Section Identifier */}
      <div className="mb-12">
        <span className="font-mono text-[12px] text-[#bef44d] uppercase tracking-widest">
          {"//"} 001 / Origin
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Letter (65% / 8 cols) */}
        <div className="lg:col-span-8 flex flex-col max-w-3xl">
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[36px] lg:leading-[46px] italic text-[#e5e2e1] mb-10 font-normal">
            &ldquo;We built Codedway because good engineers shouldn&apos;t have to work for bad products.&rdquo;
          </h2>

          <div className="space-y-7 text-[16px] text-[#c9c6c1] leading-[1.9] font-normal">
            <p>
              Codedway originated as a sharp refusal of software development theatre. We were senior engineers exhausted by bureaucratic bloat, vanity estimation poker, and agency environments where non-technical liaisons outnumbered the individuals actually committing code. We realized that critical architectural intent gets systematically pulverized when filtered through three layers of account management.
            </p>
            <p>
              We chose Lahore deliberately. Pakistan&apos;s second-largest tech corridor is densely populated with brilliant mathematical minds, systems thinkers, and world-class engineers. Yet for decades, global enterprises relegated this region to low-margin maintenance contracts and auxiliary bug-fixing. Codedway exists to decisively demonstrate that tier-one, fault-tolerant product architectures can be conceived, engineered, and sustained from Lahore for the most rigorous global enterprises.
            </p>
            <p>
              We optimize exclusively for technical fidelity: shipping deterministic binaries, immutable infrastructure definitions, strict type boundaries, and honest delivery telemetry. When you work with Codedway, your engineering leadership speaks directly to our engineering leadership. There are no translation layers, no manufactured optimism, and zero sales manipulation.
            </p>
            <p>
              Consequently, we care nothing for award ceremonies, bloated 60-page slide decks, or agile ritualism that exists only to justify managerial overhead. We gauge our craft by request latency, algorithmic efficiency, uptime durability, and whether the code we deployed three years ago is still quietly executing without failure.
            </p>
          </div>
        </div>

        {/* Right Column: Timeline (35% / 4 cols) */}
        <div className="lg:col-span-4 border-l border-[#201f1f] lg:pl-10 space-y-12">
          {TIMELINE.map((item) => (
            <div key={item.year} className="border-l-2 border-[#bef44d] pl-6">
              <span className="font-editorial text-3xl sm:text-4xl italic text-[#bef44d] block mb-2">
                {item.year}
              </span>
              <p className="text-[14px] text-[#c9c6c1] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
