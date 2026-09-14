import React from "react";
import { ContactFaqAccordion } from "./ContactFaqAccordion";
import { ContactForm } from "./ContactForm";

export function ContactSplitSection() {
  return (
    <section
      className="pt-16 pb-24"
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN (45% -> lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-12">
            {/* FIND US */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-accentLime mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accentLime" />
                <span>Find us</span>
              </div>

              <div className="border-t border-[#1A1A1A]">
                {/* Email row */}
                <div className="py-4 border-b border-[#1A1A1A] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#555555] w-28">
                    Email
                  </span>
                  <a
                    href="mailto:enquiries@codedway.com"
                    className="text-sm font-medium text-[#F0EDE8] hover:text-accentLime hover:underline underline-offset-4 decoration-accentLime transition-all"
                  >
                    enquiries@codedway.com
                  </a>
                </div>

                {/* LinkedIn row */}
                <div className="py-4 border-b border-[#1A1A1A] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#555555] w-28">
                    LinkedIn
                  </span>
                  <a
                    href="https://linkedin.com/company/codedway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#F0EDE8] hover:text-accentLime hover:underline underline-offset-4 decoration-accentLime transition-all"
                  >
                    linkedin.com/company/codedway
                  </a>
                </div>

                {/* Based in row */}
                <div className="py-4 border-b border-[#1A1A1A] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#555555] w-28">
                    Based in
                  </span>
                  <span className="text-sm text-[#888888] font-light">
                    Lahore, Pakistan · Remote-first · Available globally
                  </span>
                </div>
              </div>
            </div>

            {/* WHAT TO EXPECT */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-accentLime mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accentLime" />
                <span>What to expect</span>
              </div>

              <div className="border-l border-accentLime pl-5 space-y-5">
                <p className="text-[15px] text-[#888888] leading-relaxed font-light">
                  <span className="text-[#F0EDE8] font-mono text-sm mr-1 font-medium">1.</span> You send a brief or book a call.
                </p>
                <p className="text-[15px] text-[#888888] leading-relaxed font-light">
                  <span className="text-[#F0EDE8] font-mono text-sm mr-1 font-medium">2.</span> We review and respond within 24 hours.
                </p>
                <p className="text-[15px] text-[#888888] leading-relaxed font-light">
                  <span className="text-[#F0EDE8] font-mono text-sm mr-1 font-medium">3.</span> If there&apos;s a fit, we scope together &mdash; no obligation.
                </p>
              </div>
            </div>

            {/* SHORT FAQ ACCORDION */}
            <ContactFaqAccordion />
          </div>

          {/* RIGHT COLUMN — CONTACT FORM (55% -> lg:col-span-7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
