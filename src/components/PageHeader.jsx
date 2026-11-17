import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import Icon from "./Icons.jsx";
import Parallax from "./Parallax.jsx";
import { site } from "../data/siteContent.js";
import { cn } from "../lib/cn.js";

export default function PageHeader({ page, children, className }) {
  const eyebrow = page.kicker ?? (page.breadcrumb ? "Service" : null);

  return (
    <header
      className={cn(
        "noise relative overflow-hidden pb-section-sm pt-[calc(var(--nav-height)+4rem)]",
        className,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-hero-radial" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-iris-500/10 blur-[100px]"
      />

      <Container className="relative">
        {page.breadcrumb ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-body-xs text-white/40">
              {page.breadcrumb.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-white/20">
                      /
                    </span>
                  ) : null}
                  {crumb.href ? (
                    <Link to={crumb.href} className="link-underline transition hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/60" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div
          className={cn(
            "grid gap-12",
            page.image
              ? "mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
              : "mt-10 max-w-5xl",
          )}
        >
          <div className={cn(page.breadcrumb && "mt-4")}>
            {eyebrow ? (
              <p className="flex items-center gap-3 font-display text-eyebrow uppercase text-accent-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-300 shadow-glow" />
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-6 font-display text-display-lg text-balance text-white">
              {page.h1}
            </h1>

            {page.subtitle ? (
              <p className="mt-6 max-w-2xl text-body-xl text-pretty text-white/55">
                {page.subtitle}
              </p>
            ) : null}

            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          {page.image ? (
            <div className="relative">
              <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-night-900 shadow-card">
                <Parallax className="aspect-[4/3] w-full" range={14} scale={1.08}>
                  <img
                    src={page.image.url}
                    alt=""
                    width="1600"
                    height="1200"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover opacity-80 saturate-[0.85]"
                  />
                </Parallax>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/20 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-brand-gradient opacity-[0.08] mix-blend-screen"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-night-950/70 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.24em] text-accent-200">
                      Digital at the core
                    </p>
                    <p className="mt-1 text-body-xs text-white/50">{site.tagline}</p>
                  </div>
                  <Icon name="sparkles" className="h-5 w-5 text-accent-300" />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-brand-gradient opacity-10 blur-2xl"
              />
            </div>
          ) : null}
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </header>
  );
}
