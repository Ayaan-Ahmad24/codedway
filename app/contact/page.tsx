import { Metadata } from "next";
import { constructMetadata, getBreadcrumbSchema, getContactPageSchema, getFAQSchema } from "@/lib/seo";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { ContactSplitSection } from "@/components/sections/contact/ContactSplitSection";
import { ContactTrustStrip } from "@/components/sections/contact/ContactTrustStrip";
import { CONTACT_FAQS } from "@/components/sections/contact/ContactFaqAccordion";

export const metadata: Metadata = constructMetadata({
  title: "Contact — Tell Us What You're Building",
  description:
    "Get in touch with Codedway. We read every brief personally. Response within 24 hours with no sales calls or SDRs.",
  canonical: "/contact",
  ogType: "website",
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ]);

  const contactSchema = getContactPageSchema();
  const faqSchema = getFAQSchema(CONTACT_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="w-full bg-[#0C0C0C] text-[#F0EDE8] min-h-screen">
        <ContactHeroSection />
        <ContactSplitSection />
        <ContactTrustStrip />
      </main>
    </>
  );
}
