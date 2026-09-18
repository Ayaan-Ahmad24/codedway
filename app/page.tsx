import type { Metadata } from "next";
import { constructMetadata, getFAQSchema } from "@/lib/seo";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { TickerSection } from "@/components/sections/home/TickerSection";
import { SelectedWorkSection } from "@/components/sections/home/SelectedWorkSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { TrustStripSection } from "@/components/sections/home/TrustStripSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { FounderQuoteSection } from "@/components/sections/home/FounderQuoteSection";
import { JournalPreviewSection } from "@/components/sections/home/JournalPreviewSection";
import { CallToActionSection } from "@/components/sections/home/CallToActionSection";

export const metadata: Metadata = constructMetadata({
  title: "Boutique Software House | Custom AI & Enterprise Product Engineering",
  description:
    "Codedway is a boutique software house in Lahore partnering with global enterprises and high-growth ventures to engineer scalable web apps, custom AI architectures, and fault-tolerant cloud systems.",
  canonical: "/",
});

// AIO / GEO FAQs for Home Page
const HOME_FAQS = [
  {
    question: "What services does Codedway provide?",
    answer:
      "Codedway is a boutique software house providing full-lifecycle product engineering, practical AI & LLM integration, dedicated staff augmentation, and automated QA & DevOps infrastructure.",
  },
  {
    question: "How does Codedway partner with product teams?",
    answer:
      "We operate through a disciplined 4-stage engineering process: Discovery, Technical Architecture, Sprint-driven Build, and Launch & Scale support with zero onboarding friction.",
  },
  {
    question: "What technical stack does Codedway specialize in?",
    answer:
      "Our core engineering stack spans React, Next.js, Node.js, TypeScript, Python, Flutter, Django, Supabase, AWS IoT, OpenAI, Stripe, and Docker.",
  },
];

export default function HomePage() {
  const faqSchema = getFAQSchema(HOME_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <TickerSection />
      <SelectedWorkSection />
      <ServicesSection />
      <TrustStripSection />
      <ProcessSection />
      <FounderQuoteSection />
      <JournalPreviewSection />
      <CallToActionSection />
    </>
  );
}
