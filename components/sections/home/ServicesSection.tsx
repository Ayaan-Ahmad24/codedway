import Link from "next/link";

interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  tags: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    description:
      "Full-lifecycle web and mobile application engineering built on modern, scalable stacks. From zero-to-one prototypes to high-throughput enterprise systems with zero technical debt.",
    tags: "Web · Mobile · API",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    description:
      "Practical machine learning and generative pipelines. We embed custom RAG architectures, multi-agent workflows, and specialized model integrations that solve genuine unit economics problems.",
    tags: "LLMs · Automation · RAG",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1" />
      </svg>
    ),
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    description:
      "Senior engineers who seamlessly integrate into your current engineering culture and sprint cadences. Autonomous execution, clean pull requests, and instant velocity without onboarding drag.",
    tags: "Dedicated · Embedded · Remote",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    slug: "qa-devops",
    title: "QA & DevOps",
    description:
      "Rock-solid delivery infrastructure. Automated test harnesses, hardened container orchestration, zero-downtime deployment workflows, and comprehensive real-time observability telemetry.",
    tags: "CI/CD · Testing · Infrastructure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="pt-32 pb-32 px-6 sm:px-12 max-w-[1560px] mx-auto border-t border-[#1A1A1A]">
      <Reveal direction="up">
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] font-mono mb-4">
            002 / Services
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-light tracking-tight text-[#F0EDE8]">
            We build things people use.
          </h2>
          <p className="text-[16px] text-[#888888] mt-3 font-normal">
            Not slide decks. Not wireframes. Actual products.
          </p>
        </div>
      </Reveal>

      {/* 2-column grid of 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service, idx) => (
          <Reveal key={service.slug} delay={idx * 100} direction="up">
            <Link
              href={`/services/${service.slug}`}
              className="bg-[#161616] border border-[#222222] p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#333333] transition-colors block h-full"
            >
              <span className="absolute top-6 right-6 text-accentLime text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                &rarr;
              </span>
              <div>
                <div className="w-8 h-8 mb-6 text-[#F0EDE8]">{service.icon}</div>
                <h3 className="text-[18px] font-bold text-[#F0EDE8] tracking-tight mb-3 group-hover:text-accentLime transition-colors">
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#888888] leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
              </div>
              <div className="text-[12px] font-mono text-[#666666] pt-6 border-t border-[#222222] uppercase tracking-wider">
                {service.tags}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={250} direction="up">
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-block text-[14px] text-[#888888] hover:text-accentLime tracking-wide transition-colors"
          >
            Explore all services &amp; delivery models &rarr;
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
