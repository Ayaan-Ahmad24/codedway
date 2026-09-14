const TECH_ITEMS = [
  "REACT",
  "NODE.JS",
  "NEXT.JS",
  "PYTHON",
  "FLUTTER",
  "DJANGO",
  "AWS",
  "SUPABASE",
  "OPENAI",
  "STRIPE",
  "SHOPIFY",
  "POSTGRES",
  "DOCKER",
  "TAILWIND",
  "FIGMA",
  "WEBFLOW",
];

export function TickerSection() {
  return (
    <div className="w-full bg-[#111111] border-y border-[#222222] py-4 overflow-hidden select-none">
      <div className="ticker-content flex items-center gap-6 whitespace-nowrap text-[13px] tracking-[0.25em] uppercase text-[#555555] font-mono">
        {/* Set 1 */}
        <div className="flex items-center gap-6">
          {TECH_ITEMS.map((item, idx) => (
            <span key={`t1-${idx}`} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[#C8FF57]">·</span>
            </span>
          ))}
        </div>
        {/* Set 2 (for seamless loop) */}
        <div className="flex items-center gap-6">
          {TECH_ITEMS.map((item, idx) => (
            <span key={`t2-${idx}`} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[#C8FF57]">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
