import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import Container from "../Container.jsx";
import Parallax from "../Parallax.jsx";
import Icon from "../Icons.jsx";
import { cn } from "../../lib/cn.js";
import { homePage } from "../../data/siteContent.js";

export default function ProcessHorizontal() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const stepRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const steps = homePage.process;

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return undefined;
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - document.documentElement.clientWidth + 48);

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }

              if (stepRef.current) {
                const active = Math.min(
                  steps.length,
                  Math.max(1, Math.floor(self.progress * steps.length) + 1),
                );
                stepRef.current.textContent = `${String(active).padStart(2, "0")} / ${String(
                  steps.length,
                ).padStart(2, "0")}`;
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => media.revert();
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, [prefersReducedMotion, steps.length]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden bg-night-950",
        prefersReducedMotion ? "py-section" : "lg:h-[100svh] lg:min-h-[720px]",
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial opacity-60" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />

      <div className="relative flex h-full flex-col justify-center pb-10 pt-[calc(var(--nav-height)+3rem)] lg:pb-14 lg:pt-[calc(var(--nav-height)+1.5rem)]">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 font-display text-eyebrow uppercase text-accent-300">
                <span className="h-px w-8 bg-gradient-to-r from-accent-300/80 to-iris-400/60" />
                Our process
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-h1 text-balance text-white md:text-display-lg">
                From first signal to full scale.
              </h2>
            </div>
            <p className="max-w-sm text-body-sm text-pretty text-white/45 lg:pb-2">
              Five connected disciplines take your brand from a clear strategic position to a
              digital product that performs.
            </p>
          </div>
        </Container>

        <div className="relative mt-9 lg:mt-12">
          <div
            ref={trackRef}
            className={cn(
              "flex w-max gap-4 px-5 pb-4 sm:px-8 lg:gap-6 lg:pb-0 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] lg:pr-12",
              prefersReducedMotion
                ? "overflow-x-auto lg:snap-x lg:snap-mandatory"
                : "overflow-x-auto snap-x snap-mandatory lg:overflow-visible lg:snap-none",
            )}
          >
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative flex w-[82vw] max-w-[34rem] shrink-0 snap-start flex-col overflow-hidden rounded-5xl border border-white/10 bg-night-900/70 shadow-card backdrop-blur-xl lg:grid lg:w-[43rem] lg:max-w-none lg:grid-cols-[1fr_0.9fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[25rem]">
                  <Parallax className="absolute inset-0" range={14}>
                    <img
                      src={step.image}
                      alt=""
                      width="600"
                      height="600"
                      loading="eager"
                      fetchPriority="low"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-1000 ease-out-expo group-hover:scale-105"
                    />
                  </Parallax>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-night-950/10 to-transparent lg:bg-gradient-to-r"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-night-950/70 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.18em] text-white/55 backdrop-blur">
                    Step {step.number}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col p-6 sm:p-8 lg:order-1 lg:p-9">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(80%_80%_at_0%_0%,rgba(34,211,238,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-center justify-between gap-4">
                    <span className="font-display text-display-lg leading-none text-white/10">
                      {step.number}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/40">
                      <Icon name="arrow-up-right" className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="relative mt-auto pt-10">
                    <p className="font-display text-eyebrow uppercase text-accent-300">
                      Discipline {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-h2 text-white">{step.title}</h3>
                    <p className="mt-4 text-body-sm leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Container className="mt-6 lg:mt-8">
          <div className="hidden items-center gap-6 lg:flex">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
            <div className="h-px flex-1 overflow-hidden bg-white/10">
              <div
                ref={progressRef}
                className="h-full origin-left scale-x-0 bg-gradient-to-r from-accent-300 to-iris-400"
              />
            </div>
            <span
              ref={stepRef}
              className="font-display text-[10px] tabular-nums uppercase tracking-[0.2em] text-white/40"
            >
              01 / {String(steps.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-white/30 lg:hidden">
            <span>Swipe to explore</span>
            <span>
              {String(steps.length).padStart(2, "0")} connected stages
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
}
