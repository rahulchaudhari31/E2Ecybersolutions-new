export default function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60svh] items-center justify-center px-6 pt-[calc(var(--nav-height)+3rem)]"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="relative h-10 w-10">
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span className="absolute inset-0 motion-safe:animate-spin rounded-full border-2 border-transparent border-t-accent-300 [animation-duration:0.9s]" />
        </span>
        <span className="font-display text-[10px] uppercase tracking-[0.28em] text-white/40">
          Loading page
        </span>
      </div>
    </div>
  );
}
