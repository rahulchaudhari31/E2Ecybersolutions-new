import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import PageHeader from "./PageHeader.jsx";
import ContentBlocks from "./ContentBlocks.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";
import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";
import FaqAccordion from "./FaqAccordion.jsx";
import ProcessSteps from "./ProcessSteps.jsx";
import ServiceOfferings from "./ServiceOfferings.jsx";
import RelatedServices from "./RelatedServices.jsx";
import ContactCta from "./ContactCta.jsx";
import { homePage, serviceCategories, site } from "../data/siteContent.js";

function getCategory(path) {
  return serviceCategories.find(
    (category) =>
      category.path === path || category.children?.some((child) => child.path === path),
  );
}

function getPublishedOfferings(page) {
  const labels = [];

  page.blocks?.forEach((block) => {
    if (block.type === "list") {
      labels.push(...block.items);
    }

    if (block.type === "definitionList") {
      labels.push(...block.items.map((item) => item.term.replace(/:$/, "")));
    }
  });

  const seen = new Set();

  return labels
    .map((label) => label.trim())
    .filter((label) => {
      const key = label.toLowerCase();

      if (!label || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, 8);
}

function buildFaqs(page, category) {
  const firstParagraph = page.blocks?.find((block) => block.type === "paragraph")?.text;
  const siblings = category?.children
    ?.filter((child) => child.label.toLowerCase() !== page.h1.toLowerCase())
    .slice(0, 3)
    .map((child) => child.label);

  return [
    {
      question: `What does ${page.h1} cover?`,
      answer:
        firstParagraph ??
        "This service is scoped around the outcome described in the service overview above.",
    },
    {
      question: "How does an engagement begin?",
      answer: `Every engagement starts with strategy. ${homePage.process[0].description}`,
    },
    {
      question: "Can this connect with other services?",
      answer: category
        ? `${page.h1} sits within ${category.label}${
            siblings?.length ? `, alongside ${siblings.join(", ")}` : ""
          }. We scope connected capabilities around the outcome rather than selling a fixed package.`
        : "Yes. This capability can be combined with the wider strategy, design, development, marketing and creative team.",
    },
    {
      question: "What happens after launch?",
      answer:
        "The work continues through marketing and creative support, so the digital product can keep learning, improving and reaching the right audience after launch.",
    },
  ];
}

export default function ServiceDetailTemplate({
  page,
  servicePath,
  templateNotice,
  offeringsEyebrow,
  offeringsTitle,
  offeringsDescription,
  processTitle = "How this work comes together.",
}) {
  const path = servicePath ?? page.path;
  const category = getCategory(path);
  const publishedOfferings = getPublishedOfferings(page);
  const fallbackOfferings = category?.children?.map((child) => child.label).slice(0, 6) ?? [];
  const offerings = publishedOfferings.length ? publishedOfferings : fallbackOfferings;
  const faqs = buildFaqs(page, category);

  return (
    <>
      <PageHeader page={page}>
        <div className="flex flex-wrap gap-2">
          {category ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
              {category.label}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55">
            <Icon name="layers" className="h-3.5 w-3.5 text-accent-300" />
            {offerings.length || "Connected"} capabilities
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55">
            <Icon name="target" className="h-3.5 w-3.5 text-accent-300" />
            {homePage.process.length}-stage process
          </span>
        </div>
      </PageHeader>

      <section className="light-section relative overflow-hidden py-section">
        <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div>
              {templateNotice ? (
                <Reveal>
                  <div className="mb-8 flex items-start gap-3 rounded-3xl border border-amber-500/20 bg-amber-500/[0.07] p-4 text-body-sm text-amber-900">
                    <Icon name="sparkles" className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{templateNotice}</p>
                  </div>
                </Reveal>
              ) : null}

              <Reveal delay={templateNotice ? 0.05 : 0}>
                <ContentBlocks blocks={page.blocks} />
              </Reveal>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.05}>
                <div className="relative overflow-hidden rounded-4xl bg-night-950 p-6 text-white shadow-card sm:p-7">
                  <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-500/20 blur-[70px]"
                  />
                  <div className="relative">
                    <p className="font-display text-eyebrow uppercase text-accent-300">
                      Start here
                    </p>
                    <h2 className="mt-4 font-display text-h3 text-balance">
                      Ready to move this forward?
                    </h2>
                    <p className="mt-3 text-body-sm leading-relaxed text-white/50">
                      Tell us about the project and we will come back with a clear next step.
                    </p>

                    <Button
                      to="/contact.php"
                      fullWidth
                      className="mt-6"
                      icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
                    >
                      Get Started
                    </Button>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-body-sm">
                      <a
                        href={site.contact.phone.href}
                        className="flex items-center gap-3 text-white/65 transition hover:text-white"
                      >
                        <Icon name="phone" className="h-4 w-4 text-accent-300" />
                        {site.contact.phone.display}
                      </a>
                      <a
                        href={site.contact.email.href}
                        className="flex items-start gap-3 break-all text-white/65 transition hover:text-white"
                      >
                        <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                        {site.contact.email.display}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {category?.children?.length ? (
                <Reveal delay={0.1}>
                  <div className="rounded-4xl border border-ink-950/10 bg-white p-6 shadow-card-light sm:p-7">
                    <p className="font-display text-eyebrow uppercase text-ink-400">
                      In {category.label}
                    </p>
                    <ul className="mt-4 divide-y divide-ink-950/10">
                      {category.children
                        .filter((item) => item.path !== path)
                        .slice(0, 5)
                        .map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              className="group flex items-center justify-between gap-4 py-3 text-body-sm font-medium text-ink-950 transition hover:text-accent-700"
                            >
                              {item.label}
                              <Icon
                                name="arrow-up-right"
                                className="h-3.5 w-3.5 shrink-0 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-700"
                              />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </Reveal>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      <ServiceOfferings
        items={offerings}
        eyebrow={offeringsEyebrow}
        title={offeringsTitle}
        description={offeringsDescription}
      />

      <ProcessSteps
        light
        eyebrow="The process"
        title={processTitle}
        description="Strategy, design, development, marketing and creative are connected in one delivery system."
      />

      <section className="relative overflow-hidden py-section">
        <div aria-hidden="true" className="absolute inset-0 bg-panel-radial opacity-70" />
        <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Questions"
                title="A clearer start."
                description="Draft answers drawn from this page's published service copy and the five-stage process."
              />
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200/80">
                Draft FAQ
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <FaqAccordion items={faqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <RelatedServices category={category} currentPath={path} />

      <ContactCta
        eyebrow="Next step"
        title="Bring the problem. We will map the route."
        description="A free digital review is the fastest way to find the gaps, the opportunities and the right next move."
      />
    </>
  );
}
