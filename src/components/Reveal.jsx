import { motion } from "framer-motion";
import { cn } from "../lib/cn.js";
import { revealVariants, useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  amount = 0.18,
}) {
  const { ref, visible, prefersReducedMotion } = useScrollReveal({ once, amount });

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      custom={{ delay, y }}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={visible ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
