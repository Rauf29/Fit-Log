export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <div className="loader"></div>
      <p className="text-[14px] text-secondary">Loading workouts…</p>
    </div>
  );
}