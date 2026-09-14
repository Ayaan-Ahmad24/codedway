import React from "react";

interface ResultCardProps {
  metric: string;
  label: string;
  description: string;
}

export function ResultCard({ metric, label, description }: ResultCardProps) {
  return (
    <div className="my-6 bg-[#161616] border border-[#222222] p-6 sm:p-8 flex flex-col justify-between hover:border-[#333333] transition-colors shadow-[4px_4px_0px_0px_#000000]">
      <div>
        <span className="font-editorial text-[44px] sm:text-[52px] italic text-[#C8FF57] leading-none block mb-2">
          {metric}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#888888] block mb-4">
          {label}
        </span>
      </div>
      <p className="text-[14px] text-[#c9c6c1] leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}
