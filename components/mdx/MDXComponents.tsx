import React from "react";
import Link from "next/link";
import { Callout } from "./Callout";
import { ResultCard } from "./ResultCard";
import { TechStack } from "./TechStack";

export const mdxComponents = {
  Callout,
  ResultCard,
  TechStack,
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-[26px] sm:text-[32px] font-medium text-[#F0EDE8] tracking-tight mt-12 mb-6 font-sans border-b border-[#222222] pb-3"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-[20px] sm:text-[24px] font-medium text-[#F0EDE8] tracking-tight mt-8 mb-4 font-sans"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-[16px] text-[#c9c6c1] leading-[1.8] mb-6 font-normal"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-3 mb-8 pl-0 list-none" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-3 mb-8 pl-6 list-decimal text-[#888888]" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="border-l border-[#C8FF57] pl-4 py-0.5 text-[15px] text-[#F0EDE8] leading-relaxed"
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 border-[#C8FF57] pl-6 my-8 font-editorial text-[22px] sm:text-[26px] italic text-[#F0EDE8] leading-relaxed"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-[13px] bg-[#1A1A1A] border border-[#2A2A2A] text-[#C8FF57] px-1.5 py-0.5 select-all"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="my-8 bg-[#141414] border border-[#222222] p-5 shadow-[4px_4px_0px_0px_#000000] overflow-x-auto">
      <pre className="font-mono text-[13px] leading-[22px] text-[#c9c6c1]" {...props}>
        {children}
      </pre>
    </div>
  ),
  a: ({ href = "", children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-[#C8FF57] hover:underline underline-offset-4 decoration-[#C8FF57]"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#C8FF57] hover:underline underline-offset-4 decoration-[#C8FF57]"
        {...props}
      >
        {children}
      </a>
    );
  },
  hr: () => <hr className="border-t border-[#222222] my-12" />,
};
