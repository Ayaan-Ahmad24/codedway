import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-lime" | "terminal" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono tracking-wider uppercase transition-all duration-200 active:translate-y-[1px] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-[11px]",
    md: "px-4 py-2 text-[12px]",
    lg: "px-6 py-4 text-[14px]",
  };

  const variantStyles = {
    primary:
      "bg-[#C8FF57] text-[#0C0C0C] font-bold hover:bg-[#F0EDE8] hover:text-[#0C0C0C] border-none",
    secondary:
      "bg-transparent border border-[#222222] text-[#F0EDE8] font-normal hover:border-[#C8FF57] hover:text-[#C8FF57]",
    "outline-lime":
      "border border-[#C8FF57] text-[#C8FF57] font-normal hover:bg-[#C8FF57] hover:text-[#0C0C0C]",
    dark: "bg-[#0C0C0C] text-[#F0EDE8] font-medium hover:bg-[#1A1A1A] border-none",
    terminal:
      "bg-transparent text-[#F0EDE8] font-mono hover:text-[#C8FF57] underline underline-offset-4 decoration-[#C8FF57]",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {variant === "terminal" ? `> ${children}` : children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {variant === "terminal" ? `> ${children}` : children}
    </button>
  );
}
