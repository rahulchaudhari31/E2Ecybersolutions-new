import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export const revealEase = [0.22, 1, 0.36, 1];

export const revealVariants = {
  hidden: (custom) => ({
    opacity: 0,
    y: custom?.y ?? 24,
  }),
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? 0.7,
      delay: custom?.delay ?? 0,
      ease: revealEase,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: {},
  visible: (custom) => ({
    transition: {
      staggerChildren: custom?.staggerChildren ?? 0.08,
      delayChildren: custom?.delayChildren ?? 0.04,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: revealEase },
  },
};

export function useScrollReveal({
  once = true,
  margin = "-90px",
  amount = 0.18,
} = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin, amount });
  const prefersReducedMotion = Boolean(useReducedMotion());

  return {
    ref,
    visible: inView || prefersReducedMotion,
    prefersReducedMotion,
  };
}
