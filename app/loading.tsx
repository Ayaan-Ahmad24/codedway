export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 text-[12px] font-mono text-[#888888] uppercase tracking-widest">
        <span className="w-2 h-2 bg-[#C8FF57] animate-lime-blink" />
        <span>Initializing module telemetry...</span>
      </div>
    </div>
  );
}
