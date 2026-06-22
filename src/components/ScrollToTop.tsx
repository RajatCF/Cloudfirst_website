import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = (immediate = true) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { immediate });
  }
  window.scrollTo({ top: 0, left: 0, behavior: immediate ? "auto" : "smooth" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Leadership is a dedicated view — always open from the top
    if (hash === "#our-leadership") {
      scrollToTop(true);
      const retry = window.setTimeout(() => scrollToTop(true), 100);
      return () => window.clearTimeout(retry);
    }

    if (!hash) {
      scrollToTop(true);
      return;
    }

    const timer = window.setTimeout(() => {
      const id = decodeURIComponent(hash.replace("#", ""));
      const el = document.getElementById(id);

      if (!el) {
        scrollToTop(true);
        return;
      }

      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -96, immediate: false });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => window.scrollBy({ top: -96, left: 0 }), 0);
      }
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
