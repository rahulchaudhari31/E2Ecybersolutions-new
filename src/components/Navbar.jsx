import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import Icon from "./Icons.jsx";
import { navigation, site } from "../data/siteContent.js";
import { cn } from "../lib/cn.js";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

const servicesItem = navigation.primary.find((item) => item.children);
const serviceCategories = servicesItem?.children ?? [];
const allServiceLinks = serviceCategories.flatMap((category) => [
  category.href,
  ...(category.children?.map((child) => child.href) ?? []),
]);

function navLinkClasses(active) {
  return cn(
    "rounded-full px-4 py-2 text-body-xs font-medium transition duration-300",
    active
      ? "bg-white/10 text-white shadow-inset"
      : "text-white/60 hover:bg-white/[0.06] hover:text-white",
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const mobileCloseRef = useRef(null);
  const previousFocus = useRef(null);
  const lenisRef = useSmoothScroll();

  const servicesActive =
    pathname === "/services.php" ||
    pathname === "/service-detail.php" ||
    allServiceLinks.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    previousFocus.current = document.activeElement;
    document.body.classList.add("is-locked");
    lenisRef?.current?.stop();

    const focusTimer = window.setTimeout(() => mobileCloseRef.current?.focus(), 80);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab" || !mobilePanelRef.current) {
        return;
      }

      const focusable = Array.from(
        mobilePanelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("is-locked");
      lenisRef?.current?.start();
      previousFocus.current?.focus?.();
    };
  }, [mobileOpen, lenisRef]);

  const closeMobile = () => setMobileOpen(false);
  const elevated = scrolled || servicesOpen;

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={() => setServicesOpen(false)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setServicesOpen(false);
          }
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition duration-500 ease-out-expo",
          elevated
            ? "border-b border-white/10 bg-night-950/80 shadow-nav backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-[var(--nav-height)] items-center justify-between gap-5">
          <Logo onClick={() => setMobileOpen(false)} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-xl">
              {navigation.primary.map((item) => {
                if (item.children) {
                  return (
                    <li key={item.label}>
                      <button
                        ref={servicesButtonRef}
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls="services-mega"
                        aria-haspopup="true"
                        onClick={() => setServicesOpen((current) => !current)}
                        onMouseEnter={() => setServicesOpen(true)}
                        className={cn(
                          "flex items-center gap-1.5 rounded-full px-4 py-2 text-body-xs font-medium transition duration-300",
                          servicesActive || servicesOpen
                            ? "bg-white/10 text-white shadow-inset"
                            : "text-white/60 hover:bg-white/[0.06] hover:text-white",
                        )}
                      >
                        {item.label}
                        <Icon
                          name="chevron-down"
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-300",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                    </li>
                  );
                }

                const active =
                  item.href === "/" ? pathname === "/" : pathname === item.href;

                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      aria-current={active ? "page" : undefined}
                      className={navLinkClasses(active)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={site.contact.phone.href}
              className="group hidden items-center gap-2 text-body-xs font-medium text-white/55 transition hover:text-white xl:flex"
            >
              <Icon name="phone" className="h-4 w-4 text-accent-300" />
              {site.contact.phone.headerDisplay}
            </a>
            <Button
              to="/contact.php"
              size="sm"
              icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
            >
              Get Started
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-accent-300/40 hover:bg-white/10 lg:hidden"
          >
            <Icon name="menu" />
          </button>
        </Container>

        <AnimatePresence>
          {servicesOpen ? (
            <div className="pointer-events-none fixed inset-x-0 top-[calc(var(--nav-height)+0.35rem)] z-40 hidden px-4 lg:block">
              <motion.div
                id="services-mega"
                initial={{ opacity: 0, y: -10, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-night-900/95 p-3 shadow-card backdrop-blur-2xl"
              >
                <nav aria-label="Services menu" className="grid gap-2 md:grid-cols-3">
                  {serviceCategories.map((category) => (
                    <div
                      key={category.label}
                      className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-5"
                    >
                      <Link
                        to={category.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center justify-between gap-3 font-display text-body-sm font-semibold text-white"
                      >
                        {category.label}
                        <Icon
                          name="arrow-up-right"
                          className="h-4 w-4 text-accent-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>

                      <ul className="mt-4 space-y-1">
                        {category.children?.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.href}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-xl px-2.5 py-2 text-body-xs text-white/50 transition hover:bg-white/[0.06] hover:text-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>

                <div className="mt-2 flex flex-col gap-3 rounded-3xl border border-white/10 bg-brand-gradient-soft px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-body-xs text-white/60">
                    Strategy, design, development and growth under one roof.
                  </p>
                  <Link
                    to="/services.php"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-2 font-display text-body-xs font-medium text-white transition hover:text-accent-200"
                  >
                    Explore all services
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobile}
              className="fixed inset-0 z-[60] bg-night-950/80 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              ref={mobilePanelRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(92vw,28rem)] flex-col border-l border-white/10 bg-night-900 shadow-card lg:hidden"
            >
              <div className="flex h-[var(--nav-height)] shrink-0 items-center justify-between border-b border-white/10 px-5">
                <Logo showTagline onClick={closeMobile} />
                <button
                  ref={mobileCloseRef}
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close navigation menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6" data-lenis-prevent>
                <nav aria-label="Mobile primary">
                  <ul className="space-y-2">
                    {navigation.primary.map((item) => {
                      if (item.children) {
                        return (
                          <li key={item.label}>
                            <details className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-display text-body-sm font-medium text-white [&::-webkit-details-marker]:hidden">
                                {item.label}
                                <Icon
                                  name="chevron-down"
                                  className="h-4 w-4 text-accent-300 transition-transform duration-300 group-open:rotate-180"
                                />
                              </summary>
                              <div className="border-t border-white/10 px-4 pb-4 pt-2">
                                {item.children.map((category) => (
                                  <div key={category.label} className="py-3">
                                    <Link
                                      to={category.href}
                                      onClick={closeMobile}
                                      className="flex items-center justify-between text-body-xs font-semibold text-white"
                                    >
                                      {category.label}
                                      <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-accent-300" />
                                    </Link>
                                    <ul className="mt-2 space-y-1 border-l border-white/10 pl-3">
                                      {category.children?.map((child) => (
                                        <li key={child.label}>
                                          <Link
                                            to={child.href}
                                            onClick={closeMobile}
                                            className="block py-1.5 text-body-xs text-white/50 transition hover:text-white"
                                          >
                                            {child.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                <Link
                                  to="/services.php"
                                  onClick={closeMobile}
                                  className="mt-2 inline-flex items-center gap-2 text-body-xs font-medium text-accent-200"
                                >
                                  Explore all services
                                  <Icon name="arrow-right" className="h-3.5 w-3.5" />
                                </Link>
                              </div>
                            </details>
                          </li>
                        );
                      }

                      return (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            onClick={closeMobile}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 font-display text-body-sm font-medium text-white transition hover:border-accent-300/30 hover:bg-white/[0.06]"
                          >
                            {item.label}
                            <Icon name="arrow-up-right" className="h-4 w-4 text-accent-300" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="mt-8 rounded-3xl border border-white/10 bg-brand-gradient-soft p-5">
                  <p className="font-display text-eyebrow uppercase text-accent-200">New accounts</p>
                  <a
                    href={site.contact.phone.href}
                    className="mt-3 block font-display text-h3 text-white"
                  >
                    {site.contact.phone.display}
                  </a>
                  <a
                    href={site.contact.email.href}
                    className="mt-1 block break-all text-body-sm text-white/55 transition hover:text-white"
                  >
                    {site.contact.email.display}
                  </a>
                  <Button
                    to="/contact.php"
                    onClick={closeMobile}
                    fullWidth
                    className="mt-5"
                    icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
                  >
                    Get Started
                  </Button>
                </div>

                <p className="mt-6 text-body-xs leading-relaxed text-white/35">
                  {site.contact.address.display}
                </p>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
