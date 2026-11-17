import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Container from "../Container.jsx";
import Reveal from "../Reveal.jsx";
import SectionHeading from "../SectionHeading.jsx";
import { homePage, serviceCategories, servicePages } from "../../data/siteContent.js";

function CountUp({ value, suffix = "", inView, duration = 1800 }) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    if (prefersReducedMotion) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    const started = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, prefersReducedMotion, value]);

  return (
    <span>
      {display.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}

export default function StatsCountup() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const stats = [
    {
      value: 10,
      suffix: "+",
      label: "Years of experience",
      source: "From “over the last decade” in the site copy.",
    },
    {
      value: 1000,
      suffix: "+",
      label: "Clients supported",
      source: "From the published “over a thousand clients” claim.",
    },
    {
      value: servicePages.length,
      suffix: "",
      label: "Specialist services",
      source: `Across ${serviceCategories.length} connected service areas.`,
    },
  ];

  return (
    <section ref={sectionRef} className="light-section relative overflow-hidden py-section-sm">
      <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-accent-500/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-iris-500/10 blur-[90px]"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="By the numbers"
            title="A decade of digital delivery."
            description="Only figures that can be traced to the current site content are counted here."
            light
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-4xl border border-ink-950/10 bg-ink-950/10 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="h-full bg-cloud-50 p-7 sm:p-9">
                <p className="font-display text-display-lg leading-none text-ink-950">
                  <CountUp value={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="mt-5 font-display text-h4 text-ink-950">{stat.label}</p>
                <p className="mt-2 text-body-xs leading-relaxed text-ink-500">{stat.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 max-w-3xl text-body-xs leading-relaxed text-ink-500">
          Founding year and project totals are not published in the current content, so they are not
          displayed. {homePage.process.length} process stages and {servicePages.length} service pages
          are counted from the site structure.
        </p>
      </Container>
    </section>
  );
}
