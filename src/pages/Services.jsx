import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import { StaggerGroup, StaggerItem } from "../components/Stagger.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";
import {
  serviceCategories,
  servicePages,
  servicesIndexPage,
  site,
} from "../data/siteContent.js";

const pageByPath = Object.fromEntries(servicePages.map((page) => [page.path, page]));

const heroPage = {
  ...servicesIndexPage,
  h1: "Services",
  kicker: "Capabilities",
  subtitle:
    "A connected team for the full digital journey: strategy, design, development, marketing and creative.",
  image: null,
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Services" }],
};

const serviceFaqs = [
  {
    question: "How do I choose the right service?",
    answer:
      "Start with the outcome, not the deliverable. A free digital review helps identify the gaps and the clearest next move across strategy, design, development, marketing and creative.",
  },
  {
    question: "Can services be combined?",
    answer:
      "Yes. The service areas are designed to work as one connected system. We scope the combination around your brief rather than a fixed package.",
  },
  {
    question: "How is a project scoped?",
    answer:
      "Every engagement starts with strategy. We define the brand, competition, audience and opportunity, then shape the design, development, marketing and creative work around that position.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The work continues through marketing, analytics and website management, so the digital product can keep improving after it goes live.",
  },
];

export default function Services() {
  return (
    <>
      <Seo page={heroPage} />
      <PageHeader page={heroPage}>
        <div className="flex flex-wrap gap-2">
          {serviceCategories.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55 transition hover:border-accent-300/40 hover:text-white"
            >
              <span className="font-display text-[10px] tabular-nums text-accent-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              {category.label}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="light-section relative overflow-hidden py-section">
        <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="The service stack"
              title="One team across every digital touchpoint."
              description="Choose a single capability or connect the whole system. Each engagement is scoped around the outcome, not a fixed package."
              light
            />
          </Reveal>

          <div className="mt-14 space-y-14">
            {serviceCategories.map((category, categoryIndex) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-28 border-t border-ink-950/10 pt-10"
              >
                <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
                  <Reveal className="lg:sticky lg:top-28 lg:self-start">
                    <p className="font-display text-eyebrow uppercase text-ink-400">
                      {String(categoryIndex + 1).padStart(2, "0")} / Service area
                    </p>
                    <h2 className="mt-5 font-display text-h1 text-balance text-ink-950">
                      {category.label}
                    </h2>
                    <p className="mt-4 text-body-sm leading-relaxed text-ink-500">
                      {category.children?.length ?? 0} connected capabilities, delivered by one
                      integrated team.
                    </p>
                    <Button
                      to={category.path}
                      variant="outlineLight"
                      size="sm"
                      className="mt-6"
                      icon={<Icon name="arrow-up-right" className="h-3.5 w-3.5" />}
                    >
                      View {category.label}
                    </Button>
                  </Reveal>

                  <StaggerGroup className="grid gap-3 sm:grid-cols-2" amount={0.12}>
                    {category.children?.map((child, index) => {
                      const service = pageByPath[child.path];

                      return (
                        <StaggerItem key={child.path}>
                          <Card
                            as={Link}
                            tilt
                            interactive
                            to={child.path}
                            light
                            padded={false}
                            className="flex h-full flex-col p-6"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient-soft text-accent-700">
                                <Icon
                                  name={
                                    categoryIndex === 0
                                      ? "code"
                                      : categoryIndex === 1
                                        ? "search"
                                        : "pen"
                                  }
                                  className="h-4 w-4"
                                />
                              </span>
                              <span className="font-display text-[10px] tabular-nums text-ink-950/20">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>

                            <h3 className="mt-7 font-display text-h3 text-ink-950">
                              {service?.h1 ?? child.label}
                            </h3>
                            {service?.subtitle ? (
                              <p className="mt-2 flex-1 text-body-sm leading-relaxed text-ink-500">
                                {service.subtitle}
                              </p>
                            ) : null}

                            <span className="mt-6 inline-flex items-center gap-2 font-display text-body-xs font-medium text-accent-700">
                              View service
                              <Icon
                                name="arrow-up-right"
                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              />
                            </span>
                          </Card>
                        </StaggerItem>
                      );
                    })}
                  </StaggerGroup>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps
        eyebrow="How we work"
        title="One connected delivery system."
        description="Five disciplines, sequenced around the outcome. Each stage builds on the last instead of handing off into a silo."
      />

      <section className="light-section relative overflow-hidden py-section">
        <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Common questions"
                title="Before we begin."
                description="Straight answers about how the service areas fit together and how an engagement starts."
                light
              />
            </Reveal>

            <Reveal delay={0.06}>
              <FaqAccordion items={serviceFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-section">
        <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
        <Container className="relative">
          <div className="relative overflow-hidden rounded-5xl border border-white/10 bg-night-900 p-7 shadow-card sm:p-10 lg:p-14">
            <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-iris-500/20 blur-[100px]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="font-display text-eyebrow uppercase text-accent-300">
                  Not sure where to start?
                </p>
                <h2 className="mt-5 font-display text-display-lg text-balance text-white">
                  Bring the problem. We will map the route.
                </h2>
                <p className="mt-5 max-w-xl text-body-lg text-white/55">
                  A free digital review is the fastest way to find the gaps, the opportunities and
                  the right next move.
                </p>
                <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                  <Button
                    to="/contact.php"
                    size="lg"
                    icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
                  >
                    Book a review
                  </Button>
                  <Button href={site.contact.phone.href} variant="secondary" size="lg">
                    {site.contact.phone.display}
                  </Button>
                </div>
              </div>

              <div className="rounded-4xl border border-white/10 bg-white/[0.035] p-6">
                <p className="font-display text-eyebrow uppercase text-white/35">
                  {site.contact.phone.label}
                </p>
                <a
                  href={site.contact.phone.href}
                  className="mt-3 block font-display text-h2 text-white transition hover:text-accent-200"
                >
                  {site.contact.phone.display}
                </a>
                <a
                  href={site.contact.email.href}
                  className="mt-3 block break-all text-body-sm text-white/55 transition hover:text-white"
                >
                  {site.contact.email.display}
                </a>
                <p className="mt-4 border-t border-white/10 pt-4 text-body-sm text-white/45">
                  {site.contact.address.display}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
