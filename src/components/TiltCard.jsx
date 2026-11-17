import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "../lib/cn.js";

export default function TiltCard({ children, className, max = 7 }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 220, damping: 22, mass: 0.4 });
  const rotateY = useSpring(rotateYValue, { stiffness: 220, damping: 22, mass: 0.4 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType !== "mouse") {
      return;
    }

    const element = ref.current;
    const rect = element?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateXValue.set(-(py - 0.5) * max);
    rotateYValue.set((px - 0.5) * max);
    element.style.setProperty("--tilt-x", `${px * 100}%`);
    element.style.setProperty("--tilt-y", `${py * 100}%`);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className={cn("h-full [transform-style:preserve-3d]", className)}
    >
      {children}
    </motion.div>
  );
}
