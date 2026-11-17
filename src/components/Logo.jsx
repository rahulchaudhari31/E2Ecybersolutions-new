import { Link } from "react-router-dom";
import { site } from "../data/siteContent.js";
import { cn } from "../lib/cn.js";

export function LogoMark({ className }) {
  return (
    <span
      className={cn(
        "relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/15 bg-night-950",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-brand-gradient opacity-20" />
      <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-accent-300/40 blur-md" />
      <span className="relative font-display text-[13px] font-bold tracking-[-0.08em] text-white">
        e2e
      </span>
      <span className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-transparent via-accent-300/70 to-transparent" />
    </span>
  );
}

export default function Logo({
  link = true,
  light = false,
  showTagline = false,
  className,
  onClick,
}) {
  const content = (
    <>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[13px] font-semibold uppercase tracking-[0.2em]",
            light ? "text-ink-950" : "text-white",
          )}
        >
          Cyber Solutions
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1.5 text-[9px] font-medium uppercase tracking-[0.28em]",
              light ? "text-ink-400" : "text-white/40",
            )}
          >
            {site.tagline}
          </span>
        ) : null}
      </span>
    </>
  );

  if (!link) {
    return <div className={cn("inline-flex items-center gap-3", className)}>{content}</div>;
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${site.name} home`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl transition-opacity hover:opacity-90",
        className,
      )}
    >
      {content}
    </Link>
  );
}
