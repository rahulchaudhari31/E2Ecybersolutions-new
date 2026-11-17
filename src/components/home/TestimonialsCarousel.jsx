import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Container from "../Container.jsx";
import Icon from "../Icons.jsx";
import Reveal from "../Reveal.jsx";
import SectionHeading from "../SectionHeading.jsx";
import { testimonials } from "../../data/siteContent.js";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const items = testimonials.items;
  const active = items[index];
  const total = items.length;

  const goTo = (next) => {
    setIndex((next + total) % total);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <section className="light-section relative overflow-hidden py-section">
      <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-iris-500/10 blur-[100px]"
      />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Words that move us forward."
              description="A carousel structure for client-approved quotes. The current copy is demo content from the original theme."
              light
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-500/[0.08] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Demo testimonials
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-12">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Demo testimonials"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative overflow-hidden rounded-5xl border border-ink-950/10 bg-white/70 shadow-card-light backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud-50"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-iris-500/10 blur-3xl"
            />

            <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-center lg:gap-14 lg:p-14">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient-soft text-accent-700">
                  <Icon name="quote" className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-eyebrow uppercase text-ink-500">Client voice</p>
                  <p className="mt-2 text-body-xs text-ink-400">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </p>
                </div>
              </div>

              <div className="min-h-[18rem]" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.figure
                    key={active.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -14 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <blockquote className="text-pretty font-display text-h2 leading-[1.2] text-ink-950">
                      “{active.quote}”
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <img
                        src={active.avatar}
                        alt=""
                        width="52"
                        height="52"
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-14 rounded-full border border-ink-950/10 object-cover grayscale"
                      />
                      <div>
                        <p className="font-display text-body font-medium text-ink-950">
                          {active.name}
                        </p>
                        <p className="mt-1 text-body-xs text-ink-400">
                          Demo quote · not a verified client testimonial
                        </p>
                      </div>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>

            <div className="relative flex flex-col gap-5 border-t border-ink-950/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
              <div className="flex items-center gap-2">
                {items.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndex(itemIndex)}
                    aria-label={`Show demo testimonial ${itemIndex + 1} of ${total}`}
                    aria-pressed={itemIndex === index}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-50 ${
                      itemIndex === index
                        ? "w-8 bg-ink-950"
                        : "w-2 bg-ink-950/20 hover:bg-ink-950/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink-950/15 bg-white/70 text-ink-950 transition hover:border-ink-950/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-50"
                >
                  <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink-950/15 bg-white/70 text-ink-950 transition hover:border-ink-950/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-50"
                >
                  <Icon name="arrow-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-5 max-w-3xl text-body-xs leading-relaxed text-ink-500">
          {testimonials.note} Replace these quotes with approved testimonials before launch.
        </p>
      </Container>
    </section>
  );
}
