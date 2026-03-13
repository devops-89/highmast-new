import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import { useLenis } from "lenis/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis(); // Get the Lenis instance

  useEffect(() => {
    if (lenis) {
      requestAnimationFrame(() => {
        lenis.scrollTo(0, { immediate: true });
      });
    } else {
      window.scrollTo(0, 0);
    }

    AOS.refresh();
  }, [pathname, lenis]); // Added `lenis` back to dependencies

  return null;
}

export default ScrollToTop;
