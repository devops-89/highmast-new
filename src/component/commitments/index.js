// import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import "./index.css";
// import AOS from "aos";
// import "aos/dist/aos.css"; 

// const Section = ({ children, className, aos, aosDuration }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5, 
//     triggerOnce: false, 
//   });

//   return (
//     <div
//       ref={ref}
//       className={`section ${className} ${inView ? "in-view" : ""}`}
//       data-aos={aos}
//       data-aos-duration={aosDuration} 
//     >
//       <div className={`content ${inView ? "fade-in" : ""}`}>{children}</div>
//     </div>
//   );
// };

// const AnotherSection = () => {
//   useEffect(() => {
//     AOS.init({ once: false }); 
//     AOS.refresh(); 
//   }, []);

//   return (
//     <div>
//       <nav></nav>
//       <main className="text-center grid-container ">
//         <Section className="section1" aos="flip-left"  daosDuration="2000" data-aos-delay="300">
//           <div>
//             <h2>FGSS – LNG/LEG</h2>
//             <p>
//               Fuel Gas Supply Systems are designed to power ships with Liquefied
//               Natural Gas (LNG) and Ethylene Gas (LEG), reducing carbon emissions.
//             </p>
//           </div>
//         </Section>
//         <Section className="section2" aos="flip-right" aosDuration="2000" data-aos-delay="400">
//           <div>
//             <h2>LFSS – Methanol/LPS/Ammonia</h2>
//             <p>
//               Low-flashpoint fuel systems support cleaner fuels like Methanol,
//               Ammonia, and Liquid Petroleum Gas (LPG) for a greener voyage.
//             </p>
//           </div>
//         </Section>
//         <Section className="section3" aos="flip-left" aosDuration="2000" data-aos-delay="500">
//           <div>
//             <h2>Cargo Handling – LNG/LPG/Ammonia/LCO2</h2>
//             <p>
//               Eco-efficient cargo handling systems designed for safe transport of
//               green fuels and gases.
//             </p>
//           </div>
//         </Section>
//         <Section className="section4" aos="flip-right" aosDuration="2000" data-aos-delay="600">
//           <div>
//             <h2>Cryogenic Piping &amp; Valves</h2>
//             <p>
//               Advanced cryogenic systems that support the sustainable handling of
//               ultra-low-temperature fuels, optimizing energy use.
//             </p>
//           </div>
//         </Section>
//       </main>
//     </div>
//   );
// };

// export default AnotherSection;
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

// const Section = ({ children, className, aos, aosDuration }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5, 
//     triggerOnce: false, 
//   });

//   return (
//     <div
//       ref={ref}
//       className={`section ${className} ${inView ? "in-view" : ""}`}
//       data-aos={aos}
//       data-aos-duration={aosDuration} 
//     >
//       <div className={`content ${inView ? "fade-in" : ""}`}>{children}</div>
//     </div>
//   );
// };

const Commitsmentcomponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <nav></nav>
      <main className="text-center grid-container ">
        <div className="allsection section1"  data-aos="flip-left"  data-aos-delay="300">
          <div className="content">
            <h2>FGSS – LNG/LEG</h2>
            <p>
              Fuel Gas Supply Systems are designed to power ships with Liquefied
              Natural Gas (LNG) and Ethylene Gas (LEG), reducing carbon emissions.
            </p>
          </div>
        </div>
        <div className="allsection section2"  data-aos="flip-right"  data-aos-delay="400">
          <div className="content">
            <h2>LFSS – Methanol/LPS/Ammonia</h2>
            <p>
              Low-flashpoint fuel systems support cleaner fuels like Methanol,
              Ammonia, and Liquid Petroleum Gas (LPG) for a greener voyage.
            </p>
          </div>
        </div>
        <div className="allsection section3"  data-aos="flip-left" data-aos-delay="500">
          <div className="content">
            <h2>Cargo Handling – LNG/LPG/Ammonia/LCO2</h2>
            <p>
              Eco-efficient cargo handling systems designed for safe transport of
              green fuels and gases.
            </p>
          </div>
        </div>
        <div className="allsection section4"  data-aos="flip-right"  data-aos-delay="600">
          <div className="content">
            <h2>Cryogenic Piping &amp; Valves</h2>
            <p>
              Advanced cryogenic systems that support the sustainable handling of
              ultra-low-temperature fuels, optimizing energy use.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Commitsmentcomponent;

