import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Container from "../components/Container.jsx";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Parallax from "../components/Parallax.jsx";
import TiltCard from "../components/TiltCard.jsx";
import Icon from "../components/Icons.jsx";
import ContactCta from "../components/ContactCta.jsx";
import { workPage, workProjects } from "../data/siteContent.js";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const prefersReducedMotion = useReducedMotion();

  const filters = useMemo(
    () => ["All", ...new Set(workProjects.map((project) => project.category))],
    [],
  );

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? workProjects
        : workProjects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const layoutTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 240, damping: 28 };

  return (
    <>
      <Seo page={workPage} />
      <PageHeader page={workPage}>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
            {workProjects.length} placeholder projects
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55">
            <Icon name="layers" className="h-3.5 w-3.5 text-accent-300" />
            Filterable layout
          </span>
        </div>
      </PageHeader>

      <section className="light-section relative overflow-hidden py-section">
        <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Project index"
                title="A flexible home for the work."
                description="Filter by discipline to see how the animated layout transitions between project groups. Every card is labelled until approved case studies are supplied."
                light
              />
              <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-800">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                Portfolio content pending
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {filters.map((filter) => {
                const active = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveFilter(filter)}
                    className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-display text-body-xs font-medium transition duration-300 ${
                      active
                        ? "text-white"
                        : "border border-ink-950/10 bg-white/70 text-ink-600 hover:border-ink-950/25 hover:text-ink-950"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="work-filter-pill"
                        className="absolute inset-0 rounded-full bg-night-950"
                        transition={layoutTransition}
                      />
                    ) : null}
                    <span className="relative z-10">{filter}</span>
                    <span
                      className={`relative z-10 font-display text-[10px] tabular-nums ${
                        active ? "text-white/40" : "text-ink-400"
                      }`}
                    >
                      {filter === "All"
                        ? workProjects.length
                        : workProjects.filter((project) => project.category === filter).length}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink-950/10 pt-5">
              <p className="text-body-xs text-ink-400">
                Showing {visibleProjects.length} of {workProjects.length} placeholders
              </p>
              <p className="hidden text-body-xs text-ink-400 sm:block">
                Layout transitions use Framer Motion
              </p>
            </div>
          </Reveal>

          <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96, y: -10 }}
                  transition={layoutTransition}
                  className="h-full"
                >
                  <TiltCard max={5} className="h-full">
                    <Link
                      to="/case-study.php"
                      data-cursor-label="View"
                      className="group flex h-full flex-col overflow-hidden rounded-4xl border border-ink-950/10 bg-white shadow-card-light transition duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent-600/30"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                        <Parallax className="absolute inset-0" range={12}>
                          <img
                            src={project.image}
                            alt={project.alt}
                            width="1600"
                            height="1200"
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                          />
                        </Parallax>
                        <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-night-950/10 to-transparent"
                      />
                      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-night-950/65 px-3 py-1.5 font-display text-[9px] uppercase tracking-[0.18em] text-white/65 backdrop-blur">
                        Placeholder
                      </span>
                      <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-night-950/65 text-white/65 backdrop-blur transition duration-500 group-hover:rotate-45 group-hover:text-accent-200">
                        <Icon name="arrow-up-right" className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em]">
                        <span className="text-accent-700">{project.category}</span>
                        <span className="text-ink-400">{project.year}</span>
                      </div>
                      <h2 className="mt-5 font-display text-h3 text-ink-950">{project.title}</h2>
                      <p className="mt-2 flex-1 text-body-sm leading-relaxed text-ink-500">
                        {project.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 font-display text-body-xs font-medium text-accent-700">
                        Open case study template
                        <Icon
                          name="arrow-right"
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                  </TiltCard>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-body-xs leading-relaxed text-ink-400">
              Placeholder imagery uses existing local assets. Replace each card with an approved
              project title, service, year, image and case-study route before launch.
            </p>
          </Reveal>
        </Container>
      </section>

      <ContactCta
        eyebrow="Have a project in mind?"
        title="The next case study could start here."
        description="Tell us what you are building. We will help you find the clearest strategic and creative route."
        primaryLabel="Start a conversation"
      />
    </>
  );
}
