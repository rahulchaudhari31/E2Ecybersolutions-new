import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icons.jsx";
import { serviceCategories } from "../data/siteContent.js";

export default function NotFound() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const tiltXValue = useMotionValue(0);
  const tiltYValue = useMotionValue(0);
  const eyeXValue = useMotionValue(0);
  const eyeYValue = useMotionValue(0);
  const tiltX = useSpring(tiltXValue, { stiffness: 130, damping: 20, mass: 0.4 });
  const tiltY = useSpring(tiltYValue, { stiffness: 130, damping: 20, mass: 0.4 });
  const eyeX = useSpring(eyeXValue, { stiffness: 220, damping: 18, mass: 0.3 });
  const eyeY = useSpring(eyeYValue, { stiffness: 220, damping: 18, mass: 0.3 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion) {
      return;
    }

    const rect = sectionRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    const nx = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
    const ny = Math.max(-1, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));

    tiltYValue.set(nx * 7);
    tiltXValue.set(ny * -7);
    eyeXValue.set(nx * 9);
    eyeYValue.set(ny * 7);
  };

  const resetTilt = () => {
    tiltXValue.set(0);
    tiltYValue.set(0);
    eyeXValue.set(0);
    eyeYValue.set(0);
  };

  const float = (delay, distance) =>
    prefersReducedMotion
      ? false
      : {
          y: [0, -distance, 0],
          rotate: [0, delay % 2 === 0 ? -2 : 2, 0],
        };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="noise relative flex min-h-[100svh] items-center overflow-hidden py-section pt-[calc(var(--nav-height)+4rem)]"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-hero-radial" />
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris-500/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-eyebrow uppercase text-accent-300">Error 404</p>

          <div className="relative mx-auto mt-8 w-fit" aria-hidden="true">
            <div className="absolute inset-x-0 -inset-y-10 -z-10">
              {[0, 1].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-300/15 sm:h-72 sm:w-72"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { scale: [0.85, 1.35], opacity: [0.4, 0] }
                  }
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    delay: ring * 1.6,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            <motion.div
              style={{
                rotateX: tiltX,
                rotateY: tiltY,
                transformPerspective: 900,
              }}
              className="flex items-end justify-center gap-1 sm:gap-2"
            >
              <motion.span
                className="font-display text-[7.4rem] leading-[0.78] text-white/85 sm:text-[10.5rem] lg:text-[13rem]"
                animate={float(0, 12)}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              >
                4
              </motion.span>

              <motion.div
                className="relative h-[9.5rem] w-[7.6rem] overflow-hidden rounded-full border-2 border-accent-300/55 bg-gradient-to-br from-accent-300/[0.14] via-white/[0.03] to-iris-500/[0.16] shadow-glow sm:h-[13rem] sm:w-[10.4rem] lg:h-[16.2rem] lg:w-[12.8rem]"
                animate={float(1, 8)}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.2),transparent_42%)]"
                />
                <motion.div
                  style={{ x: eyeX, y: eyeY }}
                  className="absolute inset-0 flex items-center justify-center gap-4 pb-4 sm:gap-6"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-night-950/80 shadow-inset sm:h-11 sm:w-11">
                    <span className="h-3 w-3 rounded-full bg-accent-200 shadow-glow sm:h-4 sm:w-4" />
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-night-950/80 shadow-inset sm:h-11 sm:w-11">
                    <span className="h-3 w-3 rounded-full bg-accent-200 shadow-glow sm:h-4 sm:w-4" />
                  </span>
                </motion.div>
                <span className="absolute bottom-[26%] left-1/2 h-4 w-9 -translate-x-1/2 rounded-b-full border-b-2 border-accent-200/80 sm:h-5 sm:w-12" />
              </motion.div>

              <motion.span
                className="font-display text-[7.4rem] leading-[0.78] text-white/85 sm:text-[10.5rem] lg:text-[13rem]"
                animate={float(2, 14)}
                transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
              >
                4
              </motion.span>
            </motion.div>

            <motion.span
              className="absolute -right-6 top-2 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-accent-300/60 sm:-right-10 sm:h-10 sm:w-10"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -12, 0], rotate: [0, 18, 0] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon name="sparkles" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </motion.span>
            <motion.span
              className="absolute -left-7 bottom-4 h-2.5 w-2.5 rounded-full bg-iris-300/70"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, 10, 0], scale: [1, 0.7, 1], opacity: [0.8, 0.35, 0.8] }
              }
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <h1 className="mt-9 font-display text-h1 text-balance text-white">
            This page has gone off-script.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-body-lg text-white/55">
            The link may be old or the page may have moved. Start from the homepage or jump
            straight into the work.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 xs:flex-row">
            <Button to="/" icon={<Icon name="arrow-right" className="h-4 w-4" />}>
              Back to home
            </Button>
            <Button
              to="/contact.php"
              variant="secondary"
              icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
            >
              Contact us
            </Button>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="font-display text-eyebrow uppercase text-white/30">Popular services</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {serviceCategories.map((category) => (
                <Link
                  key={category.id}
                  to={category.path}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-body-xs text-white/55 transition hover:border-accent-300/40 hover:text-white"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
