import Container from "../Container.jsx";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";
import Icon from "../Icons.jsx";
import { aboutPage } from "../../data/siteContent.js";

const pillars = [
  {
    label: "Our mission",
    title: "Bridge the gap between business and audience.",
    description: aboutPage.paragraphs[2],
    icon: "target",
  },
  {
    label: "Our vision",
    title: "Help brands reach, engage, convert and retain.",
    description: aboutPage.subtitle,
    icon: "compass",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden py-section">
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why we exist"
            title="One link between brand and consumer."
            description="The mission and vision below are drawn directly from the original About copy, without invented targets or timelines."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-5xl border border-white/10 bg-white/[0.035] p-7 transition duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-500/10 blur-[80px] transition duration-700 group-hover:bg-iris-500/20"
                />
                <div className="relative flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-brand-gradient-soft text-accent-200">
                    <Icon name={pillar.icon} />
                  </span>
                  <span className="font-display text-[10px] uppercase tracking-[0.22em] text-white/30">
                    0{index + 1} / Purpose
                  </span>
                </div>

                <p className="relative mt-10 font-display text-eyebrow uppercase text-accent-300">
                  {pillar.label}
                </p>
                <h3 className="relative mt-4 max-w-xl font-display text-h2 text-balance text-white">
                  {pillar.title}
                </h3>
                <p className="relative mt-5 max-w-xl text-body-sm leading-relaxed text-white/55">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-col gap-5 rounded-4xl border border-white/10 bg-night-950/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-3xl font-display text-h4 text-balance text-white/70">
              {aboutPage.paragraphs[0]}
            </p>
            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-accent-300/20 bg-accent-300/[0.06] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-accent-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
              The e2e World
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
