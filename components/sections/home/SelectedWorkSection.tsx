import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  meta: string;
  abbr: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "01",
    slug: "fintech-dashboard",
    title: "Fintech Dashboard · SaaS",
    category: "Product Design",
    meta: "Product Design · React · 2024",
    abbr: "FD",
    bgColor: "bg-[#1E293B]",
    borderColor: "border-[#334155]/40",
    textColor: "text-[#94A3B8]",
  },
  {
    id: "02",
    slug: "autonomous-logistics",
    title: "Autonomous Logistics · Mobile & Telemetry",
    category: "Mobile & Telemetry",
    meta: "Flutter · Python · AWS IoT · 2024",
    abbr: "AL",
    bgColor: "bg-[#282F24]",
    borderColor: "border-[#3D4737]/40",
    textColor: "text-[#8B9E7E]",
  },
  {
    id: "03",
    slug: "cognitive-search",
    title: "Cognitive Search Engine · AI Core",
    category: "AI Core",
    meta: "Next.js · OpenAI · RAG · Supabase · 2025",
    abbr: "CS",
    bgColor: "bg-[#3B2219]",
    borderColor: "border-[#583325]/40",
    textColor: "text-[#B87A64]",
  },
  {
    id: "04",
    slug: "global-commerce-api",
    title: "Global Commerce API · Headless Infra",
    category: "Headless Infra",
    meta: "TypeScript · Node.js · Stripe · Redis · 2025",
    abbr: "GC",
    bgColor: "bg-[#2E1A47]",
    borderColor: "border-[#482A6E]/40",
    textColor: "text-[#9F75D6]",
  },
];

export function SelectedWorkSection() {
  return (
    <section id="work" className="pt-32 pb-32 px-6 sm:px-12 max-w-[1560px] mx-auto">
      <Reveal direction="up">
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] font-mono mb-4">
            001 / Selected Work
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-light tracking-tight text-[#F0EDE8]">
            Where code meets craft.
          </h2>
        </div>
      </Reveal>

      {/* Case study stacked rows */}
      <div className="border-t border-[#222222]">
        {CASE_STUDIES.map((study, idx) => (
          <Reveal key={study.id} delay={idx * 80} direction="up">
            <Link
              href={`/case-studies/${study.slug}`}
              className="case-row border-b border-[#222222] py-8 px-4 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group block"
            >
              <div className="flex items-baseline gap-8 md:w-1/2">
                <span className="font-serif text-[54px] md:text-[64px] text-[#222222] group-hover:text-[#333333] transition-colors leading-none select-none font-normal">
                  {study.id}
                </span>
                <div>
                  <h3 className="text-[22px] font-medium text-[#F0EDE8] tracking-tight group-hover:text-accentLime transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-[13px] text-[#888888] font-mono mt-1">{study.meta}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-10 md:w-1/2">
                {/* Thumbnail indicator */}
                <div
                  className={`w-[160px] h-[100px] ${study.bgColor} flex items-center justify-center border ${study.borderColor} shrink-0`}
                >
                  <span className={`font-bold text-[28px] ${study.textColor} tracking-wider select-none`}>
                    {study.abbr}
                  </span>
                </div>
                <div className="case-arrow text-[28px] text-accentLime font-light hidden sm:block">
                  &rarr;
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300} direction="up">
        <div className="mt-14 text-center">
          <Link
            href="/case-studies"
            className="inline-block text-[14px] text-[#888888] hover:text-accentLime tracking-wide transition-colors"
          >
            View all work &rarr;
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
