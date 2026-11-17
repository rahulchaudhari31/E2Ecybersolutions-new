import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Container from "./Container.jsx";
import Icon from "./Icons.jsx";
import {
  navigation,
  serviceCategories,
  site,
} from "../data/siteContent.js";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

export default function Footer() {
  const lenisRef = useSmoothScroll();
  const companyLinks = navigation.primary.filter((item) => !item.children);

  const scrollToTop = () => {
    lenisRef?.current?.scrollTo(0, { duration: 1.2 });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-night-950">
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/50 to-transparent"
      />

      <Container className="relative">
        <div className="grid gap-14 py-section-sm lg:grid-cols-[1.05fr_1.6fr] lg:gap-20">
          <div>
            <Logo showTagline />
            <p className="mt-6 max-w-sm text-body-sm leading-relaxed text-white/50">
              {site.description}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.contact.phone.href}
                className="group flex items-center gap-3 text-body-sm text-white/70 transition hover:text-white"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300 transition group-hover:border-accent-300/40">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/35">
                    {site.contact.phone.label}
                  </span>
                  <span className="mt-1 block">{site.contact.phone.display}</span>
                </span>
              </a>

              <a
                href={site.contact.email.href}
                className="group flex items-center gap-3 text-body-sm text-white/70 transition hover:text-white"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300 transition group-hover:border-accent-300/40">
                  <Icon name="mail" className="h-4 w-4" />
                </span>
                <span className="break-all">{site.contact.email.display}</span>
              </a>

              <div className="flex items-start gap-3 text-body-sm text-white/70">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300">
                  <Icon name="map-pin" className="h-4 w-4" />
                </span>
                <span className="pt-2">{site.contact.address.display}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h2 className="font-display text-eyebrow uppercase text-white/35">Services</h2>
              <ul className="mt-5 space-y-3">
                {serviceCategories.map((category) => (
                  <li key={category.label}>
                    <Link
                      to={category.path}
                      className="link-underline text-body-sm text-white/65 transition hover:text-white"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/services.php"
                    className="inline-flex items-center gap-1.5 text-body-sm font-medium text-accent-200 transition hover:text-accent-100"
                  >
                    All services
                    <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-eyebrow uppercase text-white/35">Company</h2>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="link-underline text-body-sm text-white/65 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-eyebrow uppercase text-white/35">Start here</h2>
              <p className="mt-5 text-body-sm leading-relaxed text-white/50">
                Tell us what you are building. We will help map the digital route from idea to
                impact.
              </p>
              <Link
                to="/contact.php"
                className="group mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-body-xs font-medium text-white transition hover:border-accent-300/45 hover:bg-white/[0.08]"
              >
                Get Started
                <Icon
                  name="arrow-up-right"
                  className="h-3.5 w-3.5 text-accent-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-xs text-white/35">{site.copyright}</p>
          <div className="flex items-center gap-5">
            <span className="text-body-xs text-white/25">{site.tagline}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-body-xs text-white/45 transition hover:text-white"
            >
              Back to top
              <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 transition group-hover:border-accent-300/40">
                <Icon name="arrow-down" className="h-3.5 w-3.5 rotate-180" />
              </span>
            </button>
          </div>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[19vw] font-semibold leading-[0.7] tracking-[-0.08em] text-white/[0.028]"
      >
        e2e
      </p>
    </footer>
  );
}
