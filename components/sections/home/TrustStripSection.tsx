const STATS = [
  { value: "40+", label: "Engineers on call" },
  { value: "8yrs", label: "In production" },
  { value: "3 continents", label: "Clients served" },
  { value: "$0", label: "Spent on ads (word of mouth)" },
];

export function TrustStripSection() {
  return (
    <section className="w-full bg-[#111111] border-y border-[#222222] py-20 px-6 sm:px-12">
      <div className="max-w-[1560px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#222222]">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className="py-8 sm:py-0 sm:px-8 text-center flex flex-col items-center justify-center"
          >
            <div className="font-serif italic text-[56px] text-[#F0EDE8] leading-none mb-3">
              {stat.value}
            </div>
            <div className="text-[13px] uppercase text-[#888888] font-mono tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
