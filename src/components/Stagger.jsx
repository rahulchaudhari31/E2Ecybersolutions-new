import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/cn.js";
import {
  staggerContainerVariants,
  staggerItemVariants,
  useScrollReveal,
} from "../hooks/useScrollReveal.js";

export function StaggerGroup({
  as = "div",
  children,
  className,
  delayChildren = 0.04,
  staggerChildren = 0.08,
  once = true,
  amount = 0.16,
}) {
  const { ref, visible } = useScrollReveal({ once, amount });
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      variants={staggerContainerVariants}
      custom={{ delayChildren, staggerChildren }}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={visible ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ as = "div", children, className }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      variants={staggerItemVariants}
      initial={prefersReducedMotion ? false : undefined}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
