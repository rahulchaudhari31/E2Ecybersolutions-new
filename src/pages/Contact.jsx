import Container from "../components/Container.jsx";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Icon from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { contactPage, site } from "../data/siteContent.js";

const contactIcons = ["phone", "mail", "map-pin"];

export default function Contact() {
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.contact.address.display,
  )}`;

  return (
    <>
      <Seo page={contactPage} />
      <PageHeader page={contactPage}>
        <div className="flex flex-wrap gap-2">
          <a
            href={site.contact.phone.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55 transition hover:border-accent-300/40 hover:text-white"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-accent-300" />
            {site.contact.phone.display}
          </a>
          <a
            href={site.contact.email.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-body-xs text-white/55 transition hover:border-accent-300/40 hover:text-white"
          >
            <Icon name="mail" className="h-3.5 w-3.5 text-accent-300" />
            {site.contact.email.display}
          </a>
        </div>
      </PageHeader>

      <section className="light-section relative overflow-hidden py-section">
        <div aria-hidden="true" className="grid-lines-light absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Get in touch"
                  title="Start with a conversation."
                  description={contactPage.kicker}
                  light
                />
              </Reveal>

              <div className="mt-9 space-y-3">
                {contactPage.contactCards.map((card, index) => {
                  const href =
                    index === 0
                      ? site.contact.phone.href
                      : index === 1
                        ? site.contact.email.href
                        : mapSearchUrl;

                  return (
                    <Reveal key={card.label} delay={index * 0.04}>
                      <a
                        href={href}
                        target={index === 2 ? "_blank" : undefined}
                        rel={index === 2 ? "noreferrer" : undefined}
                        className="group flex items-center gap-4 rounded-3xl border border-ink-950/10 bg-white p-4 shadow-card-light transition duration-300 hover:-translate-y-0.5 hover:border-accent-600/30"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient-soft text-accent-700">
                          <Icon name={contactIcons[index]} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-eyebrow uppercase text-ink-400">
                            {card.label}
                          </span>
                          <span className="mt-1 block break-words text-body-sm font-medium text-ink-950">
                            {card.content}
                          </span>
                        </span>
                        <Icon
                          name="arrow-up-right"
                          className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-700"
                        />
                      </a>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.1} className="mt-6">
                <div className="overflow-hidden rounded-4xl border border-ink-950/10 bg-white shadow-card-light">
                  <iframe
                    src={site.contact.map.embedUrl}
                    title="e2e Cyber Solutions location"
                    width="100%"
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full grayscale-[0.35]"
                  />
                  <div className="flex items-center justify-between gap-4 border-t border-ink-950/10 px-5 py-4">
                    <div>
                      <p className="font-display text-[10px] uppercase tracking-[0.2em] text-ink-400">
                        Visit us
                      </p>
                      <p className="mt-1 text-body-sm text-ink-700">{site.contact.address.display}</p>
                    </div>
                    <a
                      href={mapSearchUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open address in Google Maps"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-950/10 text-ink-600 transition hover:border-accent-600/30 hover:text-accent-700"
                    >
                      <Icon name="arrow-up-right" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="mt-6">
                <div className="rounded-4xl border border-ink-950/10 bg-white p-5 shadow-card-light">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-display text-eyebrow uppercase text-ink-400">
                      Follow the team
                    </p>
                    <span className="rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-amber-800">
                      Placeholder URLs
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {site.social.map((social) => (
                      <span
                        key={social.label}
                        title="Profile URL pending approval"
                        aria-label={`${social.label} profile URL pending approval`}
                        className="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-cloud-50 px-3.5 py-2 text-body-xs text-ink-500"
                      >
                        {social.label}
                        <Icon name="external-link" className="h-3 w-3 text-ink-400" />
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-body-xs leading-relaxed text-ink-400">
                    Social links are not active because every URL on the live site is a placeholder
                    ending in “#”. Add approved profile URLs before launch.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.06}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
