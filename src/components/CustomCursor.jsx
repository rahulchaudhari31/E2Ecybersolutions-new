import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const hovering = useRef(false);
  const labelRef = useRef("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(1);
  const springX = useSpring(x, { stiffness: 650, damping: 42, mass: 0.28 });
  const springY = useSpring(y, { stiffness: 650, damping: 42, mass: 0.28 });
  const springScale = useSpring(scale, { stiffness: 260, damping: 22, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches || prefersReducedMotion) {
      return undefined;
    }

    setEnabled(true);
    document.body.classList.add("custom-cursor-enabled");

    const interactiveSelector =
      "a, button, [role='button'], summary, input, textarea, select, [data-cursor='grow'], [data-cursor-label]";

    const handleMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const nextHovering = Boolean(target?.closest(interactiveSelector));
      const nextLabel =
        target?.closest("[data-cursor-label]")?.getAttribute("data-cursor-label")?.trim() || "";

      if (nextLabel !== labelRef.current) {
        labelRef.current = nextLabel;
        setCursorLabel(nextLabel);
      }

      hovering.current = nextHovering;
      x.set(event.clientX);
      y.set(event.clientY);
      opacity.set(1);
      scale.set(nextHovering ? (nextLabel ? 2.4 : 2.15) : 1);
    };

    const handleDown = () => {
      scale.set(hovering.current ? 1.7 : 0.72);
    };

    const handleUp = () => {
      scale.set(hovering.current ? (labelRef.current ? 2.4 : 2.15) : 1);
    };

    const handleLeave = () => {
      opacity.set(0);
    };

    const handleEnter = () => {
      opacity.set(1);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      setEnabled(false);
      labelRef.current = "";
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [opacity, prefersReducedMotion, scale, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden mix-blend-difference lg:block"
        style={{ x: springX, y: springY, opacity }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            style={{ scale: springScale }}
            className="h-7 w-7 rounded-full border border-white/90 bg-white/5"
          />
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden lg:block"
        style={{ x: springX, y: springY, opacity }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <div className="h-1 w-1 rounded-full bg-accent-200" />
        </div>
      </motion.div>
      {cursorLabel ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[91] hidden lg:block"
          style={{ x: springX, y: springY, opacity }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <motion.span
              key={cursorLabel}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-white text-[10px] font-semibold uppercase tracking-[0.16em] text-night-950 shadow-glow"
            >
              {cursorLabel}
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
