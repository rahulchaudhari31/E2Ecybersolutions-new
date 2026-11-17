import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "../lib/cn.js";

const variants = {
  primary:
    "bg-brand-gradient text-night-950 shadow-glow-violet hover:shadow-glow",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-accent-300/45 hover:bg-white/[0.08]",
  ghost: "text-white/70 hover:bg-white/[0.06] hover:text-white",
  light: "bg-night-950 text-white shadow-card hover:bg-night-800",
  outlineLight:
    "border border-ink-950/15 bg-white/60 text-ink-950 hover:border-ink-950/30 hover:bg-white",
  soft: "bg-white/10 text-white hover:bg-white/15",
};

const sizes = {
  sm: "px-5 py-3 text-body-xs",
  md: "px-6 py-3.5 text-body-sm",
  lg: "px-7 py-4 text-body",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  wrapperClassName,
  disabled = false,
  type = "button",
  ...props
}) {
  const wrapperRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.35 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType !== "mouse" || disabled) {
      return;
    }

    const rect = wrapperRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.16);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.22);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium leading-none transition duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-night-950 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" ? <span className="shrink-0">{icon}</span> : null}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" ? (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </>
  );

  const Element = to ? Link : href ? "a" : "button";

  return (
    <motion.div
      ref={wrapperRef}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", fullWidth && "block w-full", wrapperClassName)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
    >
      <Element
        {...(to ? { to } : {})}
        {...(href ? { href } : {})}
        {...(!to && !href ? { type, disabled } : {})}
        className={classes}
        {...props}
      >
        {content}
      </Element>
    </motion.div>
  );
}
