import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Container from "../Container.jsx";
import Button from "../Button.jsx";
import Icon from "../Icons.jsx";
import Reveal from "../Reveal.jsx";
import { StaggerGroup, StaggerItem } from "../Stagger.jsx";
import SectionHeading from "../SectionHeading.jsx";
import { homePage } from "../../data/siteContent.js";

function serviceHref(card) {
  return card.intendedTarget ?? card.href;
}

function ServiceTiltCard({ card, index }) {
  const cardRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 220, damping: 20, mass: 0.4 });
  const rotateY = useSpring(rotateYValue, { stiffness: 220, damping: 20, mass: 0.4 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType !== "mouse") {
      return;
    }

    const element = cardRef.current;
    const rect = element?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateXValue.set(-(py - 0.5) * 8);
    rotateYValue.set((px - 0.5) * 8);
    element.style.setProperty("--mx", `${px * 100}%`);
    element.style.setProperty("--my", `${py * 100}%`);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="h-full [transform-style:preserve-3d]"
    >
      <Link
        ref={cardRef}
        to={serviceHref(card)}
        className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-night-900/60 p-6 shadow-card transition duration-500 ease-out-expo hover:border-accent-300/30 hover:bg-night-900/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-night-950 sm:p-7"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(34, 211, 238, 0.12), transparent 65%)",
          }}
        />
        <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-30" />

        <div className="relative flex items-start justify-between gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <img
              src={card.icon}
              alt=""
              width="32"
              height="32"
              loading="lazy"
              decoding="async"
              className="h-8 w-8 object-contain brightness-0 invert opacity-80"
            />
          </span>
          <span className="font-display text-body-xs tabular-nums text-white/20">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative mt-10 flex flex-1 flex-col">
          <h3 className="font-display text-h3 text-white">{card.label}</h3>
          <p className="mt-3 flex-1 text-body-sm leading-relaxed text-white/50">
            {card.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-display text-body-xs font-medium text-accent-200">
            Explore service
            <Icon
              name="arrow-up-right"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="relative py-section">
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial opacity-50" />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Creative and technical, under one roof."
              description="Every service is designed to connect your brand strategy to the digital experience your audience actually uses."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              to="/services.php"
              variant="ghost"
              icon={<Icon name="arrow-right" className="h-4 w-4" />}
            >
              All services
            </Button>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3" amount={0.08}>
          {homePage.serviceCards.map((card, index) => (
            <StaggerItem key={card.label} className="h-full">
              <ServiceTiltCard card={card} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
