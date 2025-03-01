import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./lenis.css";

const LenisProvider = ({ children }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size or touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile); // Update on resize

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // Scroll to top on route change (optional)
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return isMobile ? (
    <>{children}</> // Render children normally without Lenis
  ) : (
    <ReactLenis root options={{autoRaf:true}}>{children}</ReactLenis>
  );
};

export default LenisProvider;
