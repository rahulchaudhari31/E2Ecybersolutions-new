import { cn } from "../lib/cn.js";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  light = false,
  titleClassName,
  descriptionClassName,
  className,
  children,
}) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={cn("flex flex-col", alignment[align], className)}>
      {eyebrow ? (
        <div
          className={cn(
            "mb-5 flex items-center gap-3 font-display text-eyebrow uppercase",
            light ? "text-accent-700" : "text-accent-300",
            align === "center" && "justify-center",
            align === "right" && "justify-end",
          )}
        >
          <span
            className={cn(
              "h-px w-8 bg-gradient-to-r",
              light ? "from-accent-700/70 to-iris-600/50" : "from-accent-300/80 to-iris-400/60",
            )}
          />
          {eyebrow}
        </div>
      ) : null}

      <Tag
        className={cn(
          "max-w-4xl font-display text-h2 text-balance md:text-h1",
          light ? "text-ink-950" : "text-white",
          align === "center" && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </Tag>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-body-lg text-pretty",
            light ? "text-ink-500" : "text-white/60",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );
}
