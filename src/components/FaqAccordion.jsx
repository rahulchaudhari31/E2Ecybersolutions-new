import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/cn.js";

function PlusMark({ open }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid h-9 w-9 shrink-0 place-items-center rounded-full border transition duration-300",
        open
          ? "border-accent-500/30 bg-accent-500/10 text-accent-700"
          : "border-ink-950/10 bg-white text-ink-500",
      )}
    >
      <span className="absolute h-px w-3.5 bg-current" />
      <span
        className={cn(
          "absolute h-3.5 w-px bg-current transition duration-300",
          open && "rotate-90 opacity-0",
        )}
      />
    </span>
  );
}

export default function FaqAccordion({ items, defaultOpen = 0, className }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId().replace(/:/g, "");

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-faq-button-${index}`;
        const panelId = `${baseId}-faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-3xl border transition duration-300",
              open
                ? "border-accent-600/25 bg-white shadow-card-light"
                : "border-ink-950/10 bg-white/70 hover:bg-white",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
              >
                <span className="font-display text-body font-medium text-ink-950 sm:text-h4">
                  {item.question}
                </span>
                <PlusMark open={open} />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 pr-14 text-body-sm leading-relaxed text-ink-500 sm:px-6 sm:pr-20">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
