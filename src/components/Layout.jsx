import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CustomCursor from "./CustomCursor.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import ScrollProgress from "./ScrollProgress.jsx";
import BackToTop from "./BackToTop.jsx";
import RouteFallback from "./RouteFallback.jsx";

function AnimatedOutlet() {
  const location = useLocation();
  const outlet = useOutlet();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="main-content"
        key={location.pathname}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
        }
        className="min-h-screen overflow-clip"
      >
        <Suspense fallback={<RouteFallback />}>{outlet}</Suspense>
      </motion.main>
    </AnimatePresence>
  );
}

export default function Layout() {
  return (
    <div className="relative">
      <a
        href="#main-content"
        className="sr-only z-[110] rounded-full bg-white px-5 py-3 text-body-sm font-medium text-night-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatedOutlet />
      <Footer />
      <BackToTop />
      <CustomCursor />
    </div>
  );
}
