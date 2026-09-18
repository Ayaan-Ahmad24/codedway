"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    buildType: "",
    budget: "10k-30k",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Submission failed. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Contact Form submission error:", err);
      setErrorMessage(err?.message || "Something went wrong. Please try again or email enquiries@codedway.com directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#111111] border border-[#222222] p-8 sm:p-10 shadow-2xl relative">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1E1E1E]">
          <div>
            <h2 className="text-lg font-bold text-[#F0EDE8] tracking-tight">Project brief</h2>
            <p className="text-xs sm:text-[13px] text-[#888888] mt-0.5">Submission status: CONFIRMED</p>
          </div>
          <div className="text-[10px] font-mono text-accentLime uppercase tracking-widest">
            {"STATUS // 200_OK"}
          </div>
        </div>

        <div className="py-12 text-center space-y-4">
          <div className="w-12 h-12 bg-[#1a2512] border border-accentLime text-accentLime mx-auto flex items-center justify-center text-xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-medium text-[#F0EDE8]">Brief received.</h3>
          <p className="text-sm text-[#888888] max-w-md mx-auto leading-relaxed font-light">
            Thank you, <span className="text-[#F0EDE8] font-medium">{formData.fullName || "friend"}</span>. We review every brief personally and will respond within 24 hours.
          </p>
          <div className="pt-6">
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  fullName: "",
                  company: "",
                  email: "",
                  buildType: "",
                  budget: "10k-30k",
                  details: "",
                });
              }}
              className="px-6 py-2.5 border border-[#333333] text-xs font-mono uppercase text-[#888888] hover:text-[#F0EDE8] hover:border-accentLime transition-colors"
            >
              Submit another brief &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] border border-[#222222] p-8 sm:p-10 shadow-2xl relative">
      {/* Terminal Accent Corner */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1E1E1E]">
        <div>
          <h2 className="text-lg font-bold text-[#F0EDE8] tracking-tight">Project brief</h2>
          <p className="text-xs sm:text-[13px] text-[#888888] mt-0.5">Takes 3 minutes. Helps us prepare.</p>
        </div>
        <div className="text-[10px] font-mono text-[#555555] uppercase tracking-widest hidden sm:block">
          INTAKE_PROTOCOL {"//"} 001
        </div>
      </div>

      {/* The Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Company Inline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#888888]" htmlFor="full-name">
              Full name <span className="text-accentLime">*</span>
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="Marcus Vance"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full h-11 px-3.5 text-sm bg-[#141414] border border-[#333333] text-[#F0EDE8] focus:border-accentLime outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#888888]" htmlFor="company">
              Company <span className="text-accentLime">*</span>
            </label>
            <input
              type="text"
              id="company"
              placeholder="Vaultly Inc."
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full h-11 px-3.5 text-sm bg-[#141414] border border-[#333333] text-[#F0EDE8] focus:border-accentLime outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#888888]" htmlFor="work-email">
            Email <span className="text-accentLime">*</span>
          </label>
          <input
            type="email"
            id="work-email"
            placeholder="marcus@vaultly.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-11 px-3.5 text-sm bg-[#141414] border border-[#333333] text-[#F0EDE8] focus:border-accentLime outline-none transition-colors"
          />
        </div>

        {/* What are you building? Dropdown */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#888888]" htmlFor="build-type">
            What are you building? <span className="text-accentLime">*</span>
          </label>
          <div className="relative">
            <select
              id="build-type"
              required
              value={formData.buildType}
              onChange={(e) => setFormData({ ...formData, buildType: e.target.value })}
              className="w-full h-11 px-3.5 text-sm bg-[#141414] border border-[#333333] text-[#F0EDE8] appearance-none cursor-pointer pr-10 focus:border-accentLime outline-none transition-colors"
            >
              <option value="" disabled>Select project archetype...</option>
              <option value="web-app">Web App</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ai-integration">AI Integration</option>
              <option value="staff-augmentation">Staff Augmentation</option>
              <option value="something-else">Something else</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#888888]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Budget range (radio group as sharp toggle pills) */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#888888]">
            Budget range <span className="text-accentLime">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            {[
              { value: "under-10k", label: "< $10k" },
              { value: "10k-30k", label: "$10k–$30k" },
              { value: "30k-100k", label: "$30k–$100k" },
              { value: "100k-plus", label: "$100k+" },
            ].map((tier) => (
              <label key={tier.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value={tier.value}
                  checked={formData.budget === tier.value}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="peer sr-only"
                />
                <span className="flex items-center justify-center h-10 px-2 text-xs font-mono tracking-wider border border-[#333333] bg-[#141414] text-[#888888] peer-checked:bg-accentLime peer-checked:text-black peer-checked:border-accentLime peer-checked:font-bold hover:border-[#555555] transition-all">
                  {tier.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Tell us more (textarea, 5 rows) */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#888888]" htmlFor="details">
            Tell us more <span className="text-accentLime">*</span>
          </label>
          <textarea
            id="details"
            rows={5}
            required
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Describe the problem you're solving, your stack if you have one, and your timeline."
            className="w-full p-3.5 text-sm bg-[#141414] border border-[#333333] text-[#F0EDE8] resize-y leading-relaxed focus:border-accentLime outline-none transition-colors"
          />
        </div>

        {/* Error Notification */}
        {status === "error" && (
          <div className="p-3 bg-[#2a1111] border border-[#ff4d4d] text-[#ffb3b3] text-xs font-mono leading-relaxed">
            [ERR_DISPATCH_FAILED]: {errorMessage}
          </div>
        )}

        {/* Full-width Sharp Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full h-12 bg-accentLime hover:bg-[#d4ff78] text-[#0C0C0C] font-bold text-[15px] tracking-wide uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-50"
          >
            <span>{status === "submitting" ? "Sending brief..." : "Send brief"}</span>
            <span className="font-mono">&rarr;</span>
          </button>
        </div>

        {/* Micro reassurance copy */}
        <p className="text-center text-[11px] text-[#555555] font-mono pt-1">
          No spam. No auto-responses. A real human reads this.
        </p>
      </form>
    </div>
  );
}
