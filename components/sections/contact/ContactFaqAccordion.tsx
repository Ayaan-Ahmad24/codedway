import React from "react";

export const CONTACT_FAQS = [
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes — and we're honest about what stage you actually need us at.",
  },
  {
    question: "What's your minimum engagement?",
    answer: "4 weeks for a scoped project, 1 month for retainer. No day rates.",
  },
  {
    question: "Do you do fixed-price projects?",
    answer: "Yes, for well-scoped builds. We'll tell you upfront if scope is too loose to fix a price.",
  },
];

export function ContactFaqAccordion() {
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-widest text-[#555555] mb-4">
        Frequently Clarified
      </div>

      <div className="space-y-3">
        {CONTACT_FAQS.map((faq, idx) => (
          <details
            key={idx}
            className="group border border-[#222222] transition-colors"
          >
            <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-[#111111] group-hover:bg-[#141414] list-none">
              <span className="text-sm text-[#F0EDE8] font-medium pr-4">
                {faq.question}
              </span>
              <span className="text-accentLime font-mono text-base font-bold group-open:hidden">
                +
              </span>
              <span className="text-accentLime font-mono text-base font-bold hidden group-open:inline">
                &minus;
              </span>
            </summary>
            <div className="p-4 pt-2 text-sm text-[#888888] leading-relaxed border-t border-[#1C1C1C] font-light">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
