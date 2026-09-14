interface TeamMember {
  initials: string;
  avatarBg: string;
  role: string;
  name: string;
  bio: string;
  handle: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: "AK",
    avatarBg: "bg-[#1A1F2E]",
    role: "CEO & Co-founder",
    name: "Ayaan Khan",
    bio: "Ex-systems architect. Convinced that 90% of meetings should be replaced by a well-typed pull request.",
    handle: "ayaankhan",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "SR",
    avatarBg: "bg-[#1E1A14]",
    role: "Lead Engineer",
    name: "Saad Rehman",
    bio: "Obsessed with sub-millisecond latency budgets, zero-allocation memory profiling, and state synchrony.",
    handle: "saadrehman",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "MH",
    avatarBg: "bg-[#141E18]",
    role: "Product Designer",
    name: "Mirza Haris",
    bio: "Designs digital interfaces like structured codebases: strict, modular, unambiguous, and devoid of cosmetic fluff.",
    handle: "mirzaharis",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "FZ",
    avatarBg: "bg-[#1E1420]",
    role: "AI Engineer",
    name: "Farhan Zaidi",
    bio: "Specializes in quantization, local LLM fine-tuning, and architecting predictable, low-variance RAG topologies.",
    handle: "farhanzaidi",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "NQ",
    avatarBg: "bg-[#1A1A1A]",
    role: "DevOps Lead",
    name: "Nabeel Qureshi",
    bio: "If a staging deployment demands manual intervention, the deployment pipeline is classified as broken.",
    handle: "nabeelqureshi",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "BT",
    avatarBg: "bg-[#1F1A1E]",
    role: "Mobile Dev",
    name: "Bilal Tariq",
    bio: "Swift and React Native specialist. Rejects skipped render cycles and enforces fluid 60fps interaction benchmarks.",
    handle: "bilaltariq",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "ZM",
    avatarBg: "bg-[#14191A]",
    role: "QA Lead",
    name: "Zoya Malik",
    bio: "Architect of exhaustive automated test suites that have consistently disassembled production delusions globally.",
    handle: "zoyamalik",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "HA",
    avatarBg: "bg-[#1E1E14]",
    role: "BD Manager",
    name: "Hamza Alvi",
    bio: "Translates intricate engineering constraints into direct commercial roadmaps without losing technical precision.",
    handle: "hamzaalvi",
    linkedin: "https://linkedin.com",
  },
];

export function TeamSection() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-12 py-24 border-b border-[#201f1f]">
      <div className="mb-6">
        <span className="font-mono text-[12px] text-[#bef44d] uppercase tracking-widest">
          {"//"} 003 / The people
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-light text-[#e5e2e1] mb-16 tracking-tight font-sans">
        Built by humans. <span className="text-[#8d937c]">(Mostly.)</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#201f1f]">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="bg-[#0e0e0e] p-6 flex flex-col justify-between hover:bg-[#1c1b1b] transition-colors group"
          >
            <div>
              <div
                className={`w-20 h-20 ${member.avatarBg} flex items-center justify-center mb-6 select-none`}
              >
                <span className="text-2xl font-bold text-[#e5e2e1] tracking-wider font-mono">
                  {member.initials}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#bef44d] block uppercase tracking-wider mb-1">
                {member.role}
              </span>
              <h3 className="text-lg text-[#e5e2e1] font-semibold mb-3">
                {member.name}
              </h3>
              <p className="text-[14px] text-[#c9c6c1] leading-normal mb-6">
                {member.bio}
              </p>
            </div>

            <a
              className="font-mono text-[11px] text-[#bef44d] hover:text-[#e5e2e1] transition-colors uppercase tracking-widest inline-flex items-center gap-1"
              href={member.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              &rarr; linkedin/{member.handle}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
