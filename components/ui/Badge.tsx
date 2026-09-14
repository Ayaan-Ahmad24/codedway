import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "status" | "tag";
  live?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "default",
  live = false,
  children,
  className,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-2 py-0.5 bg-[#1A1A1A] border border-[#2A2A2A] text-[11px] font-mono tracking-wider uppercase text-[#888888] select-none";

  return (
    <span className={twMerge(clsx(baseStyles, className))} {...props}>
      {live && <span className="w-1.5 h-1.5 bg-[#C8FF57] animate-lime-blink" />}
      {children}
    </span>
  );
}
