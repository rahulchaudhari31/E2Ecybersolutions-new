import { useState } from "react";
import Container from "../Container.jsx";
import Button from "../Button.jsx";
import ContactModal from "../ContactModal.jsx";
import Icon from "../Icons.jsx";
import Reveal from "../Reveal.jsx";
import { homePage, site } from "../../data/siteContent.js";

export default function CtaBand() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-section">
        <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />

        <Container className="relative">
          <Reveal>
            <div className="noise relative overflow-hidden rounded-5xl border border-white/10 bg-night-900 p-6 shadow-card sm:p-10 lg:p-14">
              <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-iris-500/20 blur-[100px]"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-500/15 blur-[90px]"
              />

              <div className="relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
                <div>
                  <p className="flex items-center gap-3 font-display text-eyebrow uppercase text-accent-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-300 shadow-glow" />
                    Start a project
                  </p>
                  <h2 className="mt-6 font-display text-display-lg text-balance text-white first-letter:uppercase">
                    {homePage.cta.heading}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {homePage.cta.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-body-lg leading-relaxed text-white/55">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                    <Button
                      to="/contact.php"
                      icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
                    >
                      {homePage.cta.primaryAction.label}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setContactOpen(true)}
                      icon={<Icon name="arrow-right" className="h-4 w-4" />}
                    >
                      {homePage.cta.secondaryAction.label}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="rounded-4xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
                    <p className="font-display text-eyebrow uppercase text-white/35">
                      {site.contact.phone.label}
                    </p>
                    <a
                      href={site.contact.phone.href}
                      className="mt-3 block font-display text-h2 text-white transition hover:text-accent-200"
                    >
                      {site.contact.phone.display}
                    </a>

                    <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                      <a
                        href={site.contact.email.href}
                        className="group flex items-center gap-3 text-body-sm text-white/60 transition hover:text-white"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300">
                          <Icon name="mail" className="h-4 w-4" />
                        </span>
                        <span className="break-all">{site.contact.email.display}</span>
                      </a>
                      <div className="flex items-start gap-3 text-body-sm text-white/60">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300">
                          <Icon name="map-pin" className="h-4 w-4" />
                        </span>
                        <span className="pt-2">{site.contact.address.display}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
