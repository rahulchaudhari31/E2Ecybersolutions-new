import { cn } from "../lib/cn.js";
import TiltCard from "./TiltCard.jsx";

export default function Card({
  as: Tag = "div",
  light = false,
  interactive = false,
  padded = true,
  tilt = false,
  tiltMax = 6,
  className,
  children,
  ...props
}) {
  const card = (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-4xl border shadow-card transition duration-500 ease-out-expo",
        light
          ? "border-ink-950/10 bg-white text-ink-950 shadow-card-light"
          : "border-white/10 bg-white/[0.035] text-white",
        padded && "p-6 sm:p-8",
        interactive &&
          "card-glow group hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]",
        interactive && light && "card-glow-light hover:bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );

  if (tilt) {
    return (
      <TiltCard max={tiltMax} className="h-full">
        {card}
      </TiltCard>
    );
  }

  return card;
}
