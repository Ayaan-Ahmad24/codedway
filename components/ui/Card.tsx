import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  category?: string;
  statusDot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Card({
  category,
  statusDot = false,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "bg-[#141414] border border-[#222222] transition-colors",
          className
        )
      )}
      {...props}
    >
      {category && (
        <div className="h-7 px-6 flex items-center justify-between border-b border-[#222222] text-[11px] font-mono uppercase tracking-widest text-[#888888]">
          <span>{category}</span>
          {statusDot && <span className="w-1.5 h-1.5 bg-[#C8FF57]" />}
        </div>
      )}
      <div className="p-6 sm:p-8">{children}</div>
    </div>
  );
}
