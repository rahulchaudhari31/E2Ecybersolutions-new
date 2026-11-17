import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Container from "../Container.jsx";
import Button from "../Button.jsx";
import Icon from "../Icons.jsx";
import Reveal from "../Reveal.jsx";
import SectionHeading from "../SectionHeading.jsx";
import { aboutPage, homePage, site } from "../../data/siteContent.js";

export default function AboutTeaser() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-8%", "8%"],
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-section">
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial opacity-70" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-night-900 shadow-card">
                <motion.img
                  src={aboutPage.image.url}
                  alt="e2e Cyber Solutions team and workspace"
                  width="1800"
                  height="1800"
                  loading="lazy"
                  decoding="async"
                  style={{ y: imageY }}
                  className="absolute inset-0 h-[118%] w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/20 to-transparent"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/10 bg-night-950/70 p-5 backdrop-blur-xl">
                  <p className="font-display text-eyebrow uppercase text-accent-300">
                    {site.tagline}
                  </p>
                  <p className="mt-2 font-display text-h3 text-white">Digital at our core.</p>
                  <p className="mt-2 text-body-xs text-white/45">
                    {site.contact.address.city} · Integrated strategy, design and development.
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 top-8 hidden rounded-2xl border border-white/10 bg-night-900/90 px-4 py-3 shadow-card backdrop-blur sm:block">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">The missing link</p>
                <p className="mt-1 font-display text-body-xs font-medium text-white">
                  Business ↔ audience
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="The missing link"
                title={homePage.intro.heading}
                titleClassName="text-h1 md:text-display-lg"
              />
            </Reveal>

            <Reveal delay={0.08} className="mt-7 space-y-5">
              {homePage.intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-body-xl text-pretty leading-relaxed text-white/55"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.14} className="mt-8 flex flex-col gap-3 xs:flex-row">
              <Button
                to="/about.php"
                variant="secondary"
                icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
              >
                Our story
              </Button>
              <Button
                to="/contact.php"
                variant="ghost"
                icon={<Icon name="arrow-right" className="h-4 w-4" />}
              >
                Start a project
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
