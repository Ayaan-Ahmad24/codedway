import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[12px] font-mono text-[#C8FF57] uppercase tracking-widest mb-4">
        ERR_404 // NULL_POINTER
      </p>
      <h1 className="text-[48px] sm:text-[64px] font-light text-[#F0EDE8] tracking-tight mb-4">
        Coordinates not found.
      </h1>
      <p className="text-[16px] text-[#888888] max-w-md mb-8 leading-relaxed">
        The requested system address does not exist or has been relocated within the architecture.
      </p>
      <Link
        href="/"
        className="border border-[#C8FF57] text-[#C8FF57] px-6 py-3 text-[13px] font-mono uppercase tracking-wider hover:bg-[#C8FF57] hover:text-[#0C0C0C] transition-all"
      >
        &larr; Return to Base
      </Link>
    </div>
  );
}
