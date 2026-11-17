import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "./Icons.jsx";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const lenisRef = useSmoothScroll();

  useEffect(() => {
    let frame;

    const update = () => {
      frame = undefined;
      setVisible(window.scrollY > 640);
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const scrollToTop = () => {
    const lenis = lenisRef?.current;

    if (lenis) {
      lenis.scrollTo(0, {
        duration: prefersReducedMotion ? 0 : 1.1,
        force: true,
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.94 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-[45] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-night-900/90 text-white shadow-card backdrop-blur-xl transition hover:border-accent-300/40 hover:bg-night-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-night-950 sm:bottom-7 sm:right-7"
        >
          <Icon
            name="arrow-down"
            className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
