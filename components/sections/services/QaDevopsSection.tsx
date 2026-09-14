import Link from "next/link";

const PIPELINE_STEPS = [
  { title: "Lint passed", detail: "(0 errors, 0 warnings)" },
  { title: "Unit tests", detail: "(247 passed, 100% assertions)" },
  { title: "Security audit", detail: "(0 vulnerabilities)" },
  { title: "Docker build successful", detail: "[linux/amd64]" },
  { title: "Deployed to staging", detail: "(3.4s)", highlight: true },
];

export function QaDevopsSection() {
  return (
    <section id="qa-devops" className="w-full px-6 sm:px-12 lg:px-[8vw] py-[120px] border-b border-[#1A1A1A]">
      {/* Section Label */}
      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#C8FF57] mb-12">
        {"//"} 04 / QA &amp; DEVOPS
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h2 className="text-[36px] sm:text-[42px] font-light text-[#F0EDE8] leading-tight mb-6 font-sans">
            Ship fast. Break nothing.
          </h2>
          <p className="text-[16px] text-[#888888] leading-relaxed mb-8 font-normal">
            Deploying without automated guards is reckless. We build resilient pipelines, immutable container workflows, and hermetic staging sandboxes so every release is a non-event.
          </p>

          {/* Bullet List */}
          <div className="w-full space-y-3 mb-10">
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">
                End-to-end test automation (Cypress, Playwright)
              </span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">
                CI/CD pipeline setup and management
              </span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">
                AWS, GCP, DigitalOcean infrastructure
              </span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">
                Performance audits and load testing
              </span>
            </div>
          </div>

          {/* Button */}
          <Link
            className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-wider text-[#F0EDE8] border border-[#333333] px-6 py-3 bg-transparent hover:border-[#C8FF57] hover:text-[#C8FF57] transition-colors select-none"
            href="/services/qa-devops"
          >
            Audit your infrastructure &rarr;
          </Link>
        </div>

        {/* Right Column (5 cols): CI/CD Terminal */}
        <div className="lg:col-span-5 w-full bg-[#141414] border border-[#222222] p-6 shadow-[4px_4px_0px_0px_#000000]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1E1E1E]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#4ADE80] inline-block" />
              <span className="font-mono text-[12px] text-[#F0EDE8] font-medium">
                pipeline-run-prod #892
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#888888]">ref: main [6f29e1c]</span>
          </div>

          {/* Pipeline Steps */}
          <div className="font-mono text-[13px] leading-relaxed space-y-3">
            {PIPELINE_STEPS.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 text-[#4ADE80]">
                <span className="font-bold">&check;</span>
                <span className="text-[#F0EDE8]">
                  {step.title}{" "}
                  <span className={step.highlight ? "text-[#C8FF57]" : "text-[#666666]"}>
                    {step.detail}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Terminal Bottom Output */}
          <div className="mt-6 pt-4 border-t border-[#1E1E1E] flex items-center justify-between font-mono text-[11px]">
            <span className="text-[#666666]">&gt; ARTIFACT: digest_sha256:4ca08</span>
            <span className="text-[#4ADE80] bg-[#142614] px-2 py-0.5 border border-[#234d23]">
              SUCCESS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
