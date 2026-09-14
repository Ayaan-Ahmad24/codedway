export function FounderQuoteSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#111111] py-32 px-6 sm:px-12 border-y border-[#222222] relative overflow-hidden"
    >
      <div className="max-w-[780px] mx-auto text-center relative z-10">
        {/* Huge decorative quotation marks */}
        <div className="font-serif text-[120px] text-[#1E1E1E] leading-none select-none -mb-16">
          &ldquo;
        </div>

        <blockquote className="font-serif italic text-[24px] md:text-[28px] text-[#D0CCC4] leading-relaxed">
          We&apos;re a team of engineers and designers who&apos;ve worked at startups, scaled SaaS products, and survived bad sprints. We built Codedway because we wanted to work with people who care about the craft — not just the invoice.
        </blockquote>

        <div className="mt-8 text-[13px] text-[#666666] tracking-wide font-mono">
          &mdash; The Codedway Team, Lahore
        </div>
      </div>
    </section>
  );
}
