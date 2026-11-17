import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

export default function Preloader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const lenisRef = useSmoothScroll();
  const finishedRef = useRef(false);
  const onFinishedRef = useRef(onFinished);

  useEffect(() => {
    onFinishedRef.current = onFinished;
  }, [onFinished]);

  useEffect(() => {
    document.body.classList.add("is-locked");
    lenisRef?.current?.stop();

    const duration = prefersReducedMotion ? 220 : 820;
    const start = performance.now();
    let frame;
    let finishTimer;

    const tick = (now) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setProgress(Math.round(eased * 100));

      if (elapsed < 1) {
        frame = window.requestAnimationFrame(tick);
      } else if (!finishedRef.current) {
        finishedRef.current = true;
        finishTimer = window.setTimeout(
          () => onFinishedRef.current(),
          prefersReducedMotion ? 40 : 180,
        );
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(finishTimer);
      document.body.classList.remove("is-locked");
      lenisRef?.current?.start();
    };
  }, [lenisRef, prefersReducedMotion]);

  return (
    <motion.div
      className="noise fixed inset-0 z-[100] flex flex-col overflow-hidden bg-night-950 text-white"
      initial={prefersReducedMotion ? false : { clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-hero-radial" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 bg-brand-gradient opacity-[0.035]" />

      <div className="relative flex flex-1 items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="relative grid h-20 w-20 place-items-center rounded-[1.6rem] border border-white/15 bg-white/[0.03]">
            <span className="absolute inset-0 rounded-[1.6rem] bg-brand-gradient opacity-20 blur-xl" />
            <span className="relative font-display text-3xl font-bold tracking-[-0.08em] text-white">
              e2e
            </span>
            <span className="absolute inset-x-4 bottom-3 h-px bg-gradient-to-r from-transparent via-accent-300 to-transparent" />
          </div>

          <div className="mt-7 overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[11px] font-semibold uppercase tracking-[0.42em] text-white/55"
            >
              Cyber Solutions
            </motion.p>
          </div>

          <div className="mt-4 h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-brand-gradient"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      <div className="relative flex items-end justify-between px-6 pb-7 sm:px-10 sm:pb-9">
        <p className="max-w-[12rem] font-display text-[10px] uppercase leading-relaxed tracking-[0.28em] text-white/35">
          Integrated digital agency
        </p>
        <p
          aria-hidden="true"
          className="font-display text-4xl font-medium tabular-nums tracking-[-0.04em] text-white/80 sm:text-5xl"
        >
          {String(progress).padStart(3, "0")}
        </p>
      </div>

      <div className="sr-only" role="status" aria-live="polite">
        {progress >= 100 ? "Loaded" : "Loading"}
      </div>
    </motion.div>
  );
}
