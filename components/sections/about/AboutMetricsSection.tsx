const METRICS = [
  { value: "3", label: "Continents with active clients" },
  { value: "100%", label: "Remote-first since founding" },
  { value: "40+", label: "Engineers across 5 countries" },
  { value: "0", label: "Clients lost to poor communication" },
];

export function AboutMetricsSection() {
  return (
    <section className="w-full bg-[#111111] py-20 lg:py-24 border-b border-[#201f1f]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-[#201f1f]">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className={`px-8 lg:px-12 flex flex-col ${idx > 0 ? "pt-8 sm:pt-0" : ""}`}
          >
            <span className="font-editorial text-5xl lg:text-[56px] lg:leading-none italic text-[#bef44d] font-normal mb-3">
              {metric.value}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8d937c]">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
