import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenisRef = useSmoothScroll();

  useEffect(() => {
    const lenis = lenisRef?.current;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisRef]);

  return null;
}
