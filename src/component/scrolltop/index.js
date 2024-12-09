import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh(); // Refresh AOS animations
  }, [pathname]);

  return null;
}

export default ScrollToTop;
