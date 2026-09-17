// LEGAL NOTICE: The terms on this page reflect operational engineering practices for Codedway (Lahore, Pakistan) servicing international clients. A qualified legal professional should review and adapt these terms prior to formal production execution.

import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service & Engineering Agreements",
  description: "Codedway terms of service, engagement models, payment schedules, and SLA standards.",
  canonical: "/terms",
  ogType: "website",
});

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Terms of Service", item: "/terms" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="w-full bg-[#0C0C0C] text-[#F0EDE8] min-h-screen pt-32 pb-24" style={{ paddingLeft: "8vw", paddingRight: "8vw" }}>
        <div className="max-w-[960px] mx-auto">
          {/* Breadcrumb */}
          <div className="font-mono text-[12px] uppercase tracking-widest text-[#666666] mb-8">
            <Link href="/" className="hover:text-accentLime transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#F0EDE8]">Terms of Service</span>
          </div>

          <div className="mb-12 border-b border-[#222222] pb-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accentLime block mb-3">
              LEGAL // TERMS_OF_ENGAGEMENT
            </span>
            <h1 className="text-[40px] sm:text-[56px] font-light text-[#F0EDE8] tracking-tight mb-4">
              Terms of Service.
            </h1>
            <p className="text-[16px] text-[#888888] font-light">
              Last Revised: January 2026 · Codedway Software House
            </p>
          </div>

          <div className="space-y-12 text-[#D0CCC4] font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 01. Engagement Framework"}</h2>
              <p className="text-[15px]">
                Codedway provides software engineering, product architecture, staff augmentation, and AI integration services on a sprint, milestone, or dedicated retainer basis. All services are governed by an executed Master Services Agreement (MSA) and associated Statement of Work (SOW).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 02. Sprint Deliverables & Code Acceptance"}</h2>
              <p className="text-[15px]">
                Deliverables are tested hermetically prior to sprint cutover. Clients have a 10-business-day review window following delivery of pull requests or staging builds. Revisions addressing scope deviations are resolved immediately at zero additional fee.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 03. Payment & Retainers"}</h2>
              <p className="text-[15px]">
                Invoicing occurs according to milestones agreed upon in the SOW. Retainer fees are invoiced monthly in advance with net-15 payment terms. We accept SWIFT international wire transfers, Stripe B2B, and automated ACH.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 04. Liability & Warranties"}</h2>
              <p className="text-[15px]">
                We warrant that all delivered code is original, unencumbered by restrictive licenses, and engineered in compliance with industry-standard production best practices. Total liability is strictly limited to the cumulative fees paid under the relevant SOW.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
