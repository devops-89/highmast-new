import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Section = ({ children, className, aos, aosDuration }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is in view
    triggerOnce: false, // Allow re-triggering as the section scrolls in and out
  });

  return (
    <div
      ref={ref}
      className={`section ${className} ${inView ? "in-view" : ""}`}
      data-aos={aos}
      data-aos-duration={aosDuration} // Pass duration to AOS if provided
    >
      <div className={`content ${inView ? "fade-in" : ""}`}>{children}</div>
    </div>
  );
};

const AnotherSection = () => {
  useEffect(() => {
    AOS.init({ once: false }); // Initialize AOS
    AOS.refresh(); // Refresh AOS after initialization
  }, []);

  return (
    <div>
      <nav></nav>
      <main className="text-center grid-container">
        <Section className="section1" aos="flip-left" aosDuration="300">
          <div>
            <h2>FGSS – LNG/LEG</h2>
            <p>
              Fuel Gas Supply Systems are designed to power ships with Liquefied
              Natural Gas (LNG) and Ethylene Gas (LEG), reducing carbon emissions.
            </p>
          </div>
        </Section>
        <Section className="section2" aos="flip-right" aosDuration="300">
          <div>
            <h2>LFSS – Methanol/LPS/Ammonia</h2>
            <p>
              Low-flashpoint fuel systems support cleaner fuels like Methanol,
              Ammonia, and Liquid Petroleum Gas (LPG) for a greener voyage.
            </p>
          </div>
        </Section>
        <Section className="section3" aos="flip-right" aosDuration="300">
          <div>
            <h2>Cargo Handling – LNG/LPG/Ammonia/LCO2</h2>
            <p>
              Eco-efficient cargo handling systems designed for safe transport of
              green fuels and gases.
            </p>
          </div>
        </Section>
        <Section className="section4" aos="flip-left" aosDuration="300">
          <div>
            <h2>Cryogenic Piping &amp; Valves</h2>
            <p>
              Advanced cryogenic systems that support the sustainable handling of
              ultra-low-temperature fuels, optimizing energy use.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default AnotherSection;
