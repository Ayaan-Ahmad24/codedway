import React from "react";

interface TechStackProps {
  items: string[];
}

export function TechStack({ items = [] }: TechStackProps) {
  return (
    <div className="my-6 flex flex-wrap gap-2.5">
      {items.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] border border-[#222222] font-mono text-[12px] text-[#F0EDE8] uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 bg-[#C8FF57]" />
          {tech}
        </span>
      ))}
    </div>
  );
}
