export default function Loading() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#FAF7F2]">
      <div className="flex flex-col items-center gap-5">
        <div className="h-12 w-12 rounded-full border-3 border-emerald-400/30 border-t-[#0C7769] animate-spin" />
        <div className="text-center">
          <h1 className="text-lg font-semibold text-[#0C7769]">Loading</h1>
          <p className="text-sm text-[#0C7769]/70">Please wait a moment…</p>
        </div>
      </div>
    </div>
  );
}