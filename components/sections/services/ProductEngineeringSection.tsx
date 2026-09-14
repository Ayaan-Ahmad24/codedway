import Link from "next/link";

export function ProductEngineeringSection() {
  return (
    <section id="product-engineering" className="w-full px-6 sm:px-12 lg:px-[8vw] py-[120px] border-b border-[#1A1A1A]">
      {/* Section Label */}
      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#C8FF57] mb-12">
        {"//"} 01 / PRODUCT ENGINEERING
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h2 className="text-[36px] sm:text-[42px] font-light text-[#F0EDE8] leading-tight mb-6 font-sans">
            Full-stack web and mobile applications.
          </h2>
          <p className="text-[16px] text-[#888888] leading-relaxed mb-8 font-normal">
            We architect and ship production-grade software. React, Next.js, Node, Python, mobile-first. We&apos;ve built everything from solo founder MVPs to platforms serving hundreds of thousands of users.
          </p>

          {/* Bullet List with Razor Sharp Left Accent */}
          <div className="w-full space-y-3 mb-10">
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">MVP to production in under 12 weeks</span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">Clean architecture, documented codebases</span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">Web, iOS, Android, cross-platform</span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">API design and third-party integrations</span>
            </div>
          </div>

          {/* Button */}
          <Link
            className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-wider text-[#F0EDE8] border border-[#333333] px-6 py-3 bg-transparent hover:border-[#C8FF57] hover:text-[#C8FF57] transition-colors select-none"
            href="/services/product-engineering"
          >
            See engineering work &rarr;
          </Link>
        </div>

        {/* Right Column (5 cols): Terminal Window */}
        <div className="lg:col-span-5 w-full bg-[#141414] border border-[#222222] p-5 shadow-[4px_4px_0px_0px_#000000]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E1E1E]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF5F56] inline-block" />
              <span className="w-2.5 h-2.5 bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 bg-[#27C93F] inline-block" />
            </div>
            <span className="font-mono text-[12px] text-[#666666] tracking-wider">codedway — bash</span>
            <span className="font-mono text-[11px] text-[#333333]">node_v20.11</span>
          </div>

          {/* Terminal Body */}
          <div className="font-mono text-[12px] leading-[22px] overflow-x-auto text-[#888888] space-y-1">
            <div>
              <span className="text-[#C8FF57]">export async function</span>{" "}
              <span className="text-[#F0EDE8]">POST</span>(req:{" "}
              <span className="text-[#4ADE80]">Request</span>) {"{"}
            </div>
            <div className="pl-4 text-[#555555]">{"// Zero-alloc schema verification pipeline"}</div>
            <div className="pl-4">
              <span className="text-[#C8FF57]">const</span> {"{ session, payload }"} ={" "}
              <span className="text-[#C8FF57]">await</span> req.json();
            </div>
            <div className="pl-4">
              <span className="text-[#C8FF57]">const</span> auth ={" "}
              <span className="text-[#C8FF57]">await</span> guard.
              <span className="text-[#F0EDE8]">verify</span>(session.token);
            </div>
            <div className="pl-4">
              <span className="text-[#C8FF57]">if</span> (!auth.valid){" "}
              <span className="text-[#C8FF57]">return new</span>{" "}
              <span className="text-[#4ADE80]">Response</span>(
              <span className="text-[#4ADE80]">&apos;UNAUTHORIZED&apos;</span>, {"{ status: 401 }"});
            </div>
            <div className="pl-4 mt-2">
              <span className="text-[#C8FF57]">const</span> instance ={" "}
              <span className="text-[#C8FF57]">await</span> cluster.
              <span className="text-[#F0EDE8]">spawn</span>({"{"}
            </div>
            <div className="pl-8 text-[#888888]">tenant: auth.tenantId,</div>
            <div className="pl-8 text-[#888888]">nodes: 12,</div>
            <div className="pl-8 text-[#888888]">
              telemetry: <span className="text-[#C8FF57]">true</span>
            </div>
            <div className="pl-4">{"});"}</div>
            <div className="pl-4">
              <span className="text-[#C8FF57]">return</span>{" "}
              <span className="text-[#4ADE80]">Response</span>.json({"{"} ok:{" "}
              <span className="text-[#C8FF57]">true</span>, latency: instance.rtt {"});"}
            </div>
            <div>{"}"}</div>
          </div>

          {/* Terminal Status Bar */}
          <div className="mt-4 pt-3 border-t border-[#1E1E1E] flex justify-between items-center font-mono text-[11px] text-[#555555]">
            <span>STATUS: COMPILED</span>
            <span className="text-[#4ADE80]">0 ERRORS / 48MS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
