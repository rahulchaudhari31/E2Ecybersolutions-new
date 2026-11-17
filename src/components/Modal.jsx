import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icons.jsx";
import { cn } from "../lib/cn.js";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  light = false,
  size = "md",
  footer,
}) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocus = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  const lenisRef = useSmoothScroll();

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    previousFocus.current = document.activeElement;
    document.body.classList.add("is-locked");
    lenisRef?.current?.stop();

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 60);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("is-locked");
      lenisRef?.current?.start();
      previousFocus.current?.focus?.();
    };
  }, [open, onClose, lenisRef]);

  if (typeof document === "undefined") {
    return null;
  }

  const sizes = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  };

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-night-950/85 backdrop-blur-md"
            aria-label="Close dialog"
            onClick={onClose}
            tabIndex={-1}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descriptionId : undefined}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative z-10 w-full overflow-hidden rounded-4xl border shadow-card",
              sizes[size],
              light
                ? "border-ink-950/10 bg-cloud-50 text-ink-950"
                : "border-white/10 bg-night-900 text-white",
            )}
          >
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 h-px",
                light ? "bg-ink-950/10" : "bg-gradient-to-r from-transparent via-accent-300/70 to-transparent",
              )}
            />

            <div className="flex items-start justify-between gap-6 px-6 pt-6 sm:px-8 sm:pt-8">
              <div className="min-w-0">
                {title ? (
                  <h2
                    id={titleId}
                    className={cn(
                      "font-display text-h3",
                      light ? "text-ink-950" : "text-white",
                    )}
                  >
                    {title}
                  </h2>
                ) : null}
                {description ? (
                  <p
                    id={descriptionId}
                    className={cn(
                      "mt-3 max-w-lg text-body-sm",
                      light ? "text-ink-500" : "text-white/60",
                    )}
                  >
                    {description}
                  </p>
                ) : null}
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition",
                  light
                    ? "border-ink-950/10 text-ink-500 hover:border-ink-950/20 hover:bg-white hover:text-ink-950"
                    : "border-white/10 text-white/60 hover:border-white/20 hover:bg-white/10 hover:text-white",
                )}
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-7">{children}</div>

            {footer ? (
              <div
                className={cn(
                  "border-t px-6 py-5 sm:px-8",
                  light ? "border-ink-950/10" : "border-white/10",
                )}
              >
                {footer}
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
