import { cn } from "../lib/cn.js";

export default function Marquee({
  items,
  label = "Highlights",
  reverse = false,
  speed = "34s",
  light = false,
  pauseOnHover = false,
  className,
  itemClassName,
}) {
  return (
    <div
      className={cn("marquee-mask w-full overflow-hidden", className)}
      role="region"
      aria-label={label}
    >
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: speed }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className={cn(
              "flex shrink-0 items-center",
              light ? "text-ink-950" : "text-white",
            )}
          >
            {items.map((item, index) => (
              <li
                key={`${copy}-${index}`}
                className={cn(
                  "flex items-center gap-8 whitespace-nowrap px-8 font-display text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl",
                  itemClassName,
                )}
              >
                {item}
                <span
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full",
                    light ? "bg-accent-600" : "bg-accent-300",
                  )}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
