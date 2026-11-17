import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { homePage } from "../data/siteContent.js";
import { cn } from "../lib/cn.js";

export default function ProcessSteps({
  light = false,
  eyebrow = "Our process",
  title = "From first signal to full scale.",
  description = "Five connected disciplines take your brand from a clear strategic position to a digital product that performs.",
  className,
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-section",
        light && "light-section",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn("absolute inset-0", light ? "grid-lines-light" : "bg-panel-radial")}
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            light={light}
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className={cn(
              "absolute left-[10%] right-[10%] top-8 hidden h-px lg:block",
              light
                ? "bg-gradient-to-r from-transparent via-ink-950/15 to-transparent"
                : "bg-gradient-to-r from-transparent via-white/15 to-transparent",
            )}
          />

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {homePage.process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <li
                  className={cn(
                    "group relative flex h-full flex-col rounded-4xl border p-5 transition duration-500 ease-out-expo sm:p-6",
                    light
                      ? "border-ink-950/10 bg-white shadow-card-light hover:-translate-y-1 hover:border-accent-600/30"
                      : "border-white/10 bg-white/[0.035] hover:-translate-y-1 hover:border-white/20",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-full border font-display text-[10px] tabular-nums",
                        light
                          ? "border-accent-700/20 bg-accent-500/10 text-accent-700"
                          : "border-accent-300/20 bg-accent-300/10 text-accent-200",
                      )}
                    >
                      {step.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition duration-500",
                        light
                          ? "bg-accent-600/25 group-hover:bg-accent-600"
                          : "bg-accent-300/25 group-hover:bg-accent-300",
                      )}
                    />
                  </div>

                  <h3
                    className={cn(
                      "mt-9 font-display text-h3",
                      light ? "text-ink-950" : "text-white",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-body-sm leading-relaxed",
                      light ? "text-ink-500" : "text-white/50",
                    )}
                  >
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
