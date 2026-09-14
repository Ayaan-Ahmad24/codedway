import Link from "next/link";

export function AiIntegrationSection() {
  return (
    <section id="ai-integration" className="w-full px-6 sm:px-12 lg:px-[8vw] py-[120px] border-b border-[#1A1A1A]">
      {/* Section Label */}
      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#C8FF57] mb-12">
        {"//"} 02 / AI INTEGRATION
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column (Visual/Pipeline Node Diagram Card) */}
        <div className="lg:col-span-6 w-full bg-[#141414] border border-[#222222] p-8 order-2 lg:order-1 shadow-[4px_4px_0px_0px_#000000]">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E1E1E]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888]">
              PIPELINE_ORCHESTRATOR_V4
            </span>
            <span className="font-mono text-[11px] text-[#C8FF57] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#C8FF57] inline-block" />
              ACTIVE ROUTE
            </span>
          </div>

          {/* Node Step 1 */}
          <div className="bg-[#0C0C0C] border border-[#222222] p-3.5 mb-2 flex items-center justify-between">
            <div className="font-mono text-[13px] text-[#F0EDE8]">[ Input Stream ]</div>
            <span className="font-mono text-[11px] text-[#666666]">raw_tokens · async</span>
          </div>
          <div className="text-[#C8FF57] font-mono text-[13px] px-4 py-1">&darr; &rarr;</div>

          {/* Node Step 2 */}
          <div className="bg-[#0C0C0C] border border-[#222222] p-3.5 mb-2 flex items-center justify-between">
            <div className="font-mono text-[13px] text-[#F0EDE8]">
              [ Preprocessing &amp; Embeddings ]
            </div>
            <span className="font-mono text-[11px] text-[#888888]">text-embed-3-large</span>
          </div>
          <div className="text-[#C8FF57] font-mono text-[13px] px-4 py-1">&darr; &rarr;</div>

          {/* Node Step 3 */}
          <div className="bg-[#0C0C0C] border border-[#C8FF57]/40 p-3.5 mb-2 flex items-center justify-between">
            <div className="font-mono text-[13px] text-[#C8FF57] font-medium">
              [ LLM (GPT-4o / Claude 3.5) ]
            </div>
            <span className="font-mono text-[11px] text-[#C8FF57]">temp: 0.2</span>
          </div>
          <div className="text-[#C8FF57] font-mono text-[13px] px-4 py-1">&darr; &rarr;</div>

          {/* Node Step 4 */}
          <div className="bg-[#0C0C0C] border border-[#222222] p-3.5 mb-2 flex items-center justify-between">
            <div className="font-mono text-[13px] text-[#F0EDE8]">[ Output Schema Parser ]</div>
            <span className="font-mono text-[11px] text-[#888888]">zod_validator</span>
          </div>
          <div className="text-[#C8FF57] font-mono text-[13px] px-4 py-1">&darr; &rarr;</div>

          {/* Node Step 5 */}
          <div className="bg-[#0C0C0C] border border-[#222222] p-3.5 flex items-center justify-between">
            <div className="font-mono text-[13px] text-[#4ADE80]">[ Verified Response ]</div>
            <span className="font-mono text-[11px] text-[#4ADE80]">status: 200 OK</span>
          </div>

          {/* Mini Telemetry Strip */}
          <div className="mt-6 pt-4 border-t border-[#1E1E1E] grid grid-cols-3 gap-2 font-mono text-[11px] text-[#888888]">
            <div className="bg-[#0E0E0E] p-2 border border-[#1A1A1A]">
              latency: <span className="text-[#F0EDE8]">184ms</span>
            </div>
            <div className="bg-[#0E0E0E] p-2 border border-[#1A1A1A]">
              tokens: <span className="text-[#F0EDE8]">412</span>
            </div>
            <div className="bg-[#0E0E0E] p-2 border border-[#1A1A1A]">
              accuracy: <span className="text-[#C8FF57]">99.8%</span>
            </div>
          </div>
        </div>

        {/* Right Column (Text Content) */}
        <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
          <h2 className="text-[36px] sm:text-[42px] font-light text-[#F0EDE8] leading-tight mb-6 font-sans">
            AI that earns its place in your product.
          </h2>
          <p className="text-[16px] text-[#888888] leading-relaxed mb-8 font-normal">
            We don&apos;t bolt on ChatGPT and call it a feature. We architect LLM workflows, RAG pipelines, embeddings, and fine-tuned models that solve real user problems.
          </p>

          {/* Bullet List */}
          <div className="w-full space-y-3 mb-10">
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">Custom LLM workflows and RAG systems</span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">AI automation for internal operations</span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">OpenAI, Anthropic, Mistral, open-source</span>
            </div>
            <div className="border-l border-[#C8FF57] pl-4 py-0.5">
              <span className="text-[15px] text-[#F0EDE8]">Vector databases and semantic search</span>
            </div>
          </div>

          {/* Button */}
          <Link
            className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-wider text-[#F0EDE8] border border-[#333333] px-6 py-3 bg-transparent hover:border-[#C8FF57] hover:text-[#C8FF57] transition-colors select-none"
            href="/services/ai-integration"
          >
            Explore AI capabilities &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
