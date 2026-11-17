import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Parallax from "../components/Parallax.jsx";
import TiltCard from "../components/TiltCard.jsx";
import Icon from "../components/Icons.jsx";
import ContactCta from "../components/ContactCta.jsx";
import RelatedServices from "../components/RelatedServices.jsx";
import { caseStudyPage, serviceCategories, workProjects } from "../data/siteContent.js";

const details = [
  { label: "Client", value: "To be supplied" },
  { label: "Sector", value: "To be supplied" },
  { label: "Services", value: "To be supplied" },
  { label: "Timeline", value: "To be supplied" },
];

const narrative = [
  {
    label: "Challenge",
    title: "What needed to change?",
    description:
      "Describe the client's starting position, the market pressure and the problem the work needed to solve. Add approved context rather than invented results.",
    icon: "target",
  },
  {
    label: "Approach",
    title: "How the system connected.",
    description:
      "Show how strategy, design, development, marketing and creative worked together. Link to the service pages that formed the engagement.",
    icon: "compass",
  },
  {
    label: "Outcome",
    title: "What was delivered?",
    description:
      "Add approved deliverables and measured outcomes. The original site publishes no project metrics, so no performance claims are invented here.",
    icon: "zap",
  },
];

export default function CaseStudy() {
  const gallery = workProjects.slice(0, 3);
  const category = serviceCategories[0];

  return (
    <>
      <PageHeader page={caseStudyPage}>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Template placeholder
          </span>
          <Link
            to="/portfolio.php"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55 transition hover:border-accent-300/40 hover:text-white"
          >
            <Icon name="arrow-right" className="h-3.5 w-3.5 rotate-180 text-accent-300" />
            Back to work
          </Link>
        </div>
      </PageHeader>

      <section className="light-section relative overflow-hidden py-section">
        <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Project overview"
                title="A complete story, ready for the facts."
                description="This reusable template holds the structure for challenge, approach, delivery and outcome. Every project-specific field is intentionally marked until approved case-study content is supplied."
                light
              />
              <div className="mt-8 flex items-start gap-3 rounded-3xl border border-amber-500/20 bg-amber-500/[0.07] p-4 text-body-sm text-amber-900">
                <Icon name="sparkles" className="mt-0.5 h-4 w-4 shrink-0" />
                <p>{caseStudyPage.status}</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-4xl border border-ink-950/10 bg-white shadow-card-light">
                <div className="flex items-center justify-between gap-4 border-b border-ink-950/10 px-6 py-5">
                  <p className="font-display text-eyebrow uppercase text-ink-400">
                    Project details
                  </p>
                  <span className="rounded-full border border-ink-950/10 bg-cloud-50 px-3 py-1.5 font-display text-[9px] uppercase tracking-[0.18em] text-ink-500">
                    Awaiting content
                  </span>
                </div>
                <dl className="divide-y divide-ink-950/10">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-center justify-between gap-6 px-6 py-4"
                    >
                      <dt className="text-body-sm text-ink-500">{detail.label}</dt>
                      <dd className="text-right text-body-sm font-medium text-ink-950">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-ink-950/10 bg-cloud-50/70 px-6 py-5">
                  <p className="text-body-xs leading-relaxed text-ink-400">
                    Replace this panel with the approved client name, sector, services, timeline
                    and project summary.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-section">
        <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
        <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />

        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="The story"
              title="Challenge. Approach. Outcome."
              description="Three deliberate sections keep the project narrative clear, evidence-led and easy to approve."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {narrative.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <TiltCard max={5}>
                  <article className="group relative h-full overflow-hidden rounded-5xl border border-white/10 bg-white/[0.035] p-6 transition duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-brand-gradient-soft text-accent-200">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[10px] tabular-nums text-white/20">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-10 font-display text-eyebrow uppercase text-accent-300">
                    {item.label}
                  </p>
                  <h3 className="mt-4 font-display text-h3 text-balance text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-body-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                  <p className="mt-8 border-t border-white/10 pt-4 font-display text-[10px] uppercase tracking-[0.18em] text-white/25">
                    Template field
                  </p>
                </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="light-section relative overflow-hidden py-section">
        <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Project gallery"
                title="Room for the proof."
                description="Replace these placeholders with approved project imagery, interface details or campaign assets."
                light
              />
              <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink-950/10 bg-white px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
                Local placeholders
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <Reveal key={image.id} delay={index * 0.05}>
                <figure className="group overflow-hidden rounded-4xl border border-ink-950/10 bg-white p-2 shadow-card-light">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Parallax className="absolute inset-0" range={12}>
                      <img
                        src={image.image}
                        alt={image.alt}
                        width="1600"
                        height="1200"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                      />
                    </Parallax>
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-night-950/65 px-3 py-1.5 font-display text-[9px] uppercase tracking-[0.18em] text-white/65 backdrop-blur">
                      Placeholder
                    </span>
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 px-4 py-4">
                    <span className="text-body-xs text-ink-500">Image slot 0{index + 1}</span>
                    <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-ink-400" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-3 border-t border-ink-950/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-body-xs leading-relaxed text-ink-400">
                The original site publishes no portfolio, case-study or performance data.
              </p>
              <Link
                to="/portfolio.php"
                className="inline-flex w-fit items-center gap-2 font-display text-body-xs font-medium text-accent-700"
              >
                Back to all work
                <Icon name="arrow-right" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <RelatedServices category={category} currentPath="/case-study.php" />

      <ContactCta
        eyebrow="Build the next story"
        title="Start with the work that matters."
        description="Tell us what you are changing, launching or fixing. We will help shape the clearest digital route."
        primaryLabel="Talk to the team"
      />
    </>
  );
}
