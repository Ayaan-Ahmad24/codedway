import Link from "next/link";

const SQUAD_MEMBERS = [
  { initials: "AK", role: "React Dev" },
  { initials: "SR", role: "QA Lead" },
  { initials: "MH", role: "DevOps" },
  { initials: "FZ", role: "ML Eng" },
  { initials: "NQ", role: "PM" },
];

export function StaffAugmentationSection() {
  return (
    <section id="staff-augmentation" className="w-full px-6 sm:px-12 lg:px-[8vw] py-[120px] border-b border-[#1A1A1A]">
      {/* Section Label */}
      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#C8FF57] mb-12">
        {"//"} 03 / STAFF AUGMENTATION
      </div>

      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-[#1A1A1A] mb-12">
        <h2 className="text-[36px] sm:text-[42px] font-light text-[#F0EDE8] leading-tight max-w-[500px] font-sans">
          Your team, extended.
        </h2>

        {/* Horizontal Strip of 5 Square Avatars */}
        <div className="flex flex-wrap gap-4">
          {SQUAD_MEMBERS.map((member) => (
            <div key={member.initials} className="flex flex-col items-center gap-2">
              <div className="w-[52px] h-[52px] bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-[#F0EDE8] font-mono font-bold text-[14px] select-none">
                {member.initials}
              </div>
              <span className="font-mono text-[10px] uppercase text-[#888888] tracking-tight">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Layout (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col items-start">
          <p className="text-[16px] text-[#888888] leading-relaxed mb-6 font-normal">
            We embed autonomous, senior engineers directly inside your existing squads. No micromanagement required. Every engineer is pre-vetted for clean code habits, architectural autonomy, and precise async communication.
          </p>
          <p className="text-[16px] text-[#666666] leading-relaxed mb-8 font-normal">
            Skip 4-month hiring loops and recruiter fees. Integrate battle-tested technical capacity within days, not quarters.
          </p>
          <Link
            className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-wider text-[#F0EDE8] border border-[#333333] px-6 py-3 bg-transparent hover:border-[#C8FF57] hover:text-[#C8FF57] transition-colors select-none"
            href="/services/staff-augmentation"
          >
            Talk about your team needs &rarr;
          </Link>
        </div>

        {/* Right Column: Specs Matrix List */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#222222] p-6">
          <div className="w-full divide-y divide-[#1A1A1A]">
            <div className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <span className="font-mono text-[13px] text-[#888888] uppercase tracking-wider">
                Engagement model
              </span>
              <span className="text-[14px] text-[#F0EDE8] font-medium font-sans">
                Dedicated / Part-time / Project-based
              </span>
            </div>
            <div className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <span className="font-mono text-[13px] text-[#888888] uppercase tracking-wider">
                Time zones
              </span>
              <span className="text-[14px] text-[#F0EDE8] font-medium font-sans">
                PKT / GMT / EST — overlap guaranteed
              </span>
            </div>
            <div className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <span className="font-mono text-[13px] text-[#888888] uppercase tracking-wider">
                Ramp time
              </span>
              <span className="text-[14px] text-[#C8FF57] font-medium font-sans">
                Under 1 week
              </span>
            </div>
            <div className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <span className="font-mono text-[13px] text-[#888888] uppercase tracking-wider">
                Contracts
              </span>
              <span className="text-[14px] text-[#F0EDE8] font-medium font-sans">
                Monthly rolling, no lock-in
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
