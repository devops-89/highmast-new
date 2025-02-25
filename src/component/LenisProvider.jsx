import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LenisProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change (optional)
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis
      root
    //   options={{
    //     lerp: 0.008,
      
    //   }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
