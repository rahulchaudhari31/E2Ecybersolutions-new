import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../Container.jsx";
import Button from "../Button.jsx";
import Icon from "../Icons.jsx";
import Modal from "../Modal.jsx";
import { homePage, site } from "../../data/siteContent.js";

const meshBlobs = [
  {
    className: "-left-28 top-8 h-[30rem] w-[30rem] bg-iris-500/20",
    animate: { x: [0, 46, -18, 0], y: [0, -28, 18, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 18,
  },
  {
    className: "-right-32 top-24 h-[34rem] w-[34rem] bg-accent-500/15",
    animate: { x: [0, -52, 22, 0], y: [0, 26, -16, 0], scale: [1, 0.94, 1.1, 1] },
    duration: 22,
  },
  {
    className: "bottom-[-16rem] left-1/3 h-[30rem] w-[30rem] bg-iris-400/10",
    animate: { x: [0, 36, -24, 0], y: [0, -18, 12, 0], scale: [1, 1.12, 0.94, 1] },
    duration: 26,
  },
];

const particles = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 37 + 9) % 100}%`,
  top: `${(index * 53 + 13) % 100}%`,
  delay: `${(index % 7) * 0.6}s`,
  size: index % 4 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
}));

function MeshBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="grid-lines absolute inset-0 opacity-70" />

      {meshBlobs.map((blob) => (
        <motion.div
          key={blob.className}
          animate={prefersReducedMotion ? undefined : blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[120px] ${blob.className}`}
        />
      ))}

      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -24, 0], opacity: [0.15, 0.8, 0.15] }
          }
          transition={{
            duration: 7,
            delay: Number.parseFloat(particle.delay),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full bg-accent-200/70 ${particle.size}`}
          style={{ left: particle.left, top: particle.top }}
        />
      ))}
    </div>
  );
}

function SplitHeadline({ lines }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1
      aria-label={homePage.hero.heading}
      className="mt-7 font-display text-display-xl text-white"
    >
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden pb-1" aria-hidden="true">
          <motion.span
            initial={prefersReducedMotion ? false : { y: "112%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.16 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            {index === 1 ? <span className="text-gradient">{line}</span> : line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function HeroPanel() {
  const prefersReducedMotion = useReducedMotion();
  const orbitLabels = homePage.process.slice(0, 4).map((step) => step.title);
  const positions = [
    "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
    "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
    "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[31rem] lg:max-w-none"
    >
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-night-900/65 p-6 shadow-card backdrop-blur-2xl sm:p-8">
        <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />

        <div className="relative flex items-center justify-between gap-4">
          <p className="font-display text-eyebrow uppercase text-white/40">{site.tagline}</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            New accounts
          </span>
        </div>

        <div className="relative mx-auto my-10 grid aspect-square w-full max-w-[22rem] place-items-center">
          <div aria-hidden="true" className="absolute inset-0 rounded-full border border-white/10" />
          <div
            aria-hidden="true"
            className="absolute inset-[8%] animate-spin-slow rounded-full border border-dashed border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[21%] rounded-full border border-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[25%] rounded-full bg-brand-gradient opacity-20 blur-2xl"
          />

          <div className="relative grid h-32 w-32 place-items-center rounded-[2.25rem] border border-white/15 bg-night-950/85 shadow-glow">
            <span className="bg-brand-gradient bg-clip-text font-display text-4xl font-bold tracking-[-0.08em] text-transparent">
              e2e
            </span>
            <span className="absolute inset-x-5 bottom-4 h-px bg-gradient-to-r from-transparent via-accent-300/80 to-transparent" />
          </div>

          {orbitLabels.map((label, index) => (
            <span
              key={label}
              className={`absolute z-10 rounded-full border border-white/10 bg-night-950/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60 backdrop-blur ${positions[index]}`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
          <div>
            <p className="font-display text-body-xs font-medium text-white">Ideas in.</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
              Impact out.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-accent-200">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-300" />
            Signal live
          </span>
        </div>
      </div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -bottom-8 left-4 z-10 w-[15rem] rounded-3xl p-5 shadow-card sm:-left-8"
      >
        <p className="font-display text-h2 text-white">
          1,000<span className="text-accent-300">+</span>
        </p>
        <p className="mt-1 text-body-xs font-medium text-white/70">Clients supported</p>
        <p className="mt-2 text-[10px] leading-relaxed text-white/35">
          From the published claim of over a thousand clients.
        </p>
      </motion.div>

      <div className="absolute -right-3 top-12 hidden rounded-2xl border border-white/10 bg-night-900/90 px-4 py-3 shadow-card backdrop-blur sm:block">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Based in</p>
        <p className="mt-1 font-display text-body-xs font-medium text-white">
          {site.contact.address.city}
        </p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const lines = [
    homePage.hero.headingSegments[0],
    `${homePage.hero.headingSegments[1]} ${homePage.hero.headingSegments[2]}`,
  ];
  const videoId = homePage.hero.background.videoId;

  return (
    <>
      <section className="noise relative isolate overflow-hidden pb-24 pt-[calc(var(--nav-height)+4rem)] sm:pt-[calc(var(--nav-height)+6rem)] lg:pb-28">
        <MeshBackground />

        <Container className="relative">
          <div className="grid gap-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-12">
            <div>
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 font-display text-eyebrow uppercase text-accent-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-300 shadow-glow" />
                {homePage.hero.kicker}
              </motion.p>

              <SplitHeadline lines={lines} />

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-xl text-body-xl text-pretty text-white/55"
              >
                {site.description}
              </motion.p>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9 flex flex-col gap-3 xs:flex-row"
              >
                <Button
                  to="/contact.php"
                  size="lg"
                  icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
                >
                  {homePage.hero.cta.label}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setShowreelOpen(true)}
                  icon={<Icon name="play" className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Play showreel
                </Button>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.66 }}
                className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-body-xs text-white/40"
              >
                <a
                  href={site.contact.phone.href}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 text-accent-300" />
                  {site.contact.phone.display}
                </a>
                <span className="inline-flex items-center gap-2">
                  <Icon name="map-pin" className="h-4 w-4 text-accent-300" />
                  {site.contact.address.city}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="sparkles" className="h-4 w-4 text-accent-300" />
                  Integrated agency
                </span>
              </motion.div>
            </div>

            <HeroPanel />
          </div>

          <div className="mt-16 flex items-center justify-between gap-6 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <span className="inline-flex items-center gap-3">
              <Icon name="mouse" className="h-4 w-4" />
              Scroll to explore
            </span>
            <span className="hidden items-center gap-3 sm:inline-flex">
              <span className="h-px w-10 bg-white/20" />
              Strategy, design, build and growth
            </span>
          </div>
        </Container>
      </section>

      <Modal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        title={homePage.hero.kicker}
        description="A closer look at how strategy, design, development and marketing connect."
        size="xl"
      >
        <div className="aspect-video overflow-hidden rounded-3xl border border-white/10 bg-night-950">
          {showreelOpen ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title="e2e Cyber Solutions showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          ) : null}
        </div>
      </Modal>
    </>
  );
}
