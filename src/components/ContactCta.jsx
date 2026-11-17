import Container from "./Container.jsx";
import Button from "./Button.jsx";
import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";
import { site } from "../data/siteContent.js";
import { cn } from "../lib/cn.js";

export default function ContactCta({
  eyebrow = "Not sure where to start?",
  title = "Bring the problem. We will map the route.",
  description = "A free digital review is the fastest way to find the gaps, the opportunities and the right next move.",
  primaryLabel = "Book a review",
  secondaryLabel,
  className,
}) {
  return (
    <section className={cn("relative overflow-hidden py-section", className)}>
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl border border-white/10 bg-night-900 p-7 shadow-card sm:p-10 lg:p-14">
            <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-iris-500/20 blur-[100px]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="font-display text-eyebrow uppercase text-accent-300">{eyebrow}</p>
                <h2 className="mt-5 font-display text-display-lg text-balance text-white">
                  {title}
                </h2>
                <p className="mt-5 max-w-xl text-body-lg text-white/55">{description}</p>
                <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                  <Button
                    to="/contact.php"
                    size="lg"
                    icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
                  >
                    {primaryLabel}
                  </Button>
                  <Button
                    href={site.contact.phone.href}
                    variant="secondary"
                    size="lg"
                    icon={<Icon name="phone" className="h-4 w-4" />}
                    iconPosition="left"
                  >
                    {secondaryLabel ?? site.contact.phone.display}
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
        </Reveal>
      </Container>
    </section>
  );
}
