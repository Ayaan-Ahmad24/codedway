// LEGAL NOTICE: The terms on this page reflect operational engineering practices for Codedway (Lahore, Pakistan) servicing international clients. A qualified legal professional should review and adapt these terms prior to formal production execution.

import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Mutual NDA Guarantee & Confidentiality",
  description: "Codedway mutual non-disclosure agreement guarantee, trade secret protection, and IP confidentiality framework.",
  canonical: "/nda",
  ogType: "website",
});

export default function NdaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "NDA Guarantee", item: "/nda" },
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
            <span className="text-[#F0EDE8]">NDA Guarantee</span>
          </div>

          <div className="mb-12 border-b border-[#222222] pb-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accentLime block mb-3">
              GUARANTEE // MUTUAL_CONFIDENTIALITY
            </span>
            <h1 className="text-[40px] sm:text-[56px] font-light text-[#F0EDE8] tracking-tight mb-4">
              Mutual NDA Guarantee.
            </h1>
            <p className="text-[16px] text-[#888888] font-light">
              We sign mutual non-disclosure agreements before reviewing proprietary roadmaps or architectures.
            </p>
          </div>

          <div className="space-y-12 text-[#D0CCC4] font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 01. Standard Bilateral Protection"}</h2>
              <p className="text-[15px]">
                We protect your intellectual property as zealously as our own. Prior to deep technical discovery or reviewing internal API documentation, we execute standard bilateral non-disclosure agreements with clearly defined terms of confidentiality, non-use, and restricted distribution.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 02. Isolated Clean-Room Engineering"}</h2>
              <p className="text-[15px]">
                Engineering staff assigned to your project work in isolated access domains. We do not permit cross-pollination of confidential schemas, algorithmic weights, or business secrets across client accounts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 03. Fast-Track Execution"}</h2>
              <p className="text-[15px]">
                Need an NDA signed before our first intake call? Email our operations desk at{" "}
                <a href="mailto:nda@codedway.com" className="text-accentLime underline underline-offset-4">
                  nda@codedway.com
                </a>{" "}
                with your standard form, or request our standardized mutual NDA draft. We counter-sign within 4 business hours.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
