"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#111111] border-y border-[#222222] py-16 md:py-20 my-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8FF57] block">
              {"//"} DISPATCHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F0EDE8] tracking-tight font-sans">
              Get it in your inbox.
            </h2>
            <p className="text-sm sm:text-base text-[#888888] font-normal">
              No roundups. No fluff. Just the articles we actually write.
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-[#141414] border border-[#C8FF57] p-4 text-[#C8FF57] font-mono text-sm">
                &check; DISPATCH_SUBSCRIBED // You are now on the engineering distribution list.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-[#141414] border border-[#333333] text-[#F0EDE8] placeholder-[#555555] font-mono text-sm px-4 py-3.5 focus:outline-none focus:border-[#C8FF57] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-[#C8FF57] text-[#C8FF57] font-mono text-sm tracking-wide hover:bg-[#C8FF57] hover:text-[#0C0C0C] transition-colors whitespace-nowrap sm:border-l-0 select-none"
                >
                  Subscribe &rarr;
                </button>
              </form>
            )}
            <p className="mt-3 text-[11px] font-mono text-[#555555]">
              No spam. Unsubscribe with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
