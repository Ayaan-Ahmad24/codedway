import React from "react";

interface CalloutProps {
  type?: "note" | "warning" | "tip" | "benchmark";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "note", title, children }: CalloutProps) {
  const typeConfig = {
    note: { label: "ARCH_NOTE", border: "border-l-2 border-[#C8FF57]", tagColor: "text-[#C8FF57]" },
    warning: { label: "CONSTRAINT", border: "border-l-2 border-[#ffb4ab]", tagColor: "text-[#ffb4ab]" },
    tip: { label: "OPTIMIZATION", border: "border-l-2 border-[#bef44d]", tagColor: "text-[#bef44d]" },
    benchmark: { label: "METRIC_AUDIT", border: "border-l-2 border-[#4ADE80]", tagColor: "text-[#4ADE80]" },
  };

  const config = typeConfig[type] || typeConfig.note;

  return (
    <div className={`my-8 bg-[#141414] border border-[#222222] ${config.border} p-6`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`font-mono text-[11px] uppercase tracking-widest font-bold ${config.tagColor}`}>
          [{config.label}]
        </span>
        {title && (
          <span className="text-[14px] font-medium text-[#F0EDE8] tracking-tight">
            {title}
          </span>
        )}
      </div>
      <div className="text-[14px] text-[#c9c6c1] leading-relaxed font-normal [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}
