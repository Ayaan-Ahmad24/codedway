const PRINCIPLES = [
  {
    number: "01",
    title: "Shipping over talking.",
    description:
      "We've sat in enough planning meetings to know code in staging beats a polished roadmap slide every time. We minimize theoretical debate, ship atomic pull requests, and prioritize functional demonstration over declarative promises.",
  },
  {
    number: "02",
    title: "Honest over comfortable.",
    description:
      "We will frankly inform you if your API architecture is deficient or if your proposed database schema will disintegrate at 10x traffic — even if doing so halts an immediate milestone. We protect your product longevity over superficial rapport.",
  },
  {
    number: "03",
    title: "Craft over velocity alone.",
    description:
      "Rapid execution is mandatory, but reckless velocity incurs unpayable technical debt. We refuse to commit spaghetti logic to satisfy artificial deadlines. Clean abstraction and strict modularity ensure next year's features cost less, not more.",
  },
  {
    number: "04",
    title: "Remote-first, always.",
    description:
      "Zero mandatory synchronized all-hands meetings. Zero keystroke surveillance spyware. We operate on high-bandwidth asynchronous documentation, transparent code reviews, and radical autonomy paired with total individual accountability.",
  },
];

export function ValuesSection() {
  return (
    <section id="philosophy" className="w-full px-6 sm:px-12 lg:px-12 py-24 border-b border-[#201f1f]">
      <div className="mb-6">
        <span className="font-mono text-[12px] text-[#bef44d] uppercase tracking-widest">
          {"//"} 002 / How we think
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-light text-[#e5e2e1] mb-16 tracking-tight font-sans">
        Not a culture deck. Just how we actually work.
      </h2>

      <div className="divide-y divide-[#201f1f]">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.number}
            className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-[#1c1b1b] transition-colors duration-150 px-2"
          >
            <div className="md:col-span-5">
              <span className="font-mono text-[11px] text-[#8d937c] uppercase block mb-1">
                {principle.number} / PRINCIPLE
              </span>
              <h3 className="text-xl sm:text-[28px] text-[#e5e2e1] font-medium tracking-tight">
                {principle.title}
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-[16px] text-[#c9c6c1] leading-relaxed">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
