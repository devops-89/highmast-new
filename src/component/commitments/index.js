
import React, { useEffect } from "react";

import "./index.css";


const Commitsmentcomponent = () => {

  return (
    <div className="container-fluid commitments-container" style={{}}>
     
      
      <main className="text-center grid-container " >
        <div className="allsection section1"  data-aos="flip-left" >
          <div className="content">
            <h2>FGSS – LNG/LEG </h2>
            {/* <p>
              Fuel Gas Supply Systems are designed to power ships with Liquefied
              Natural Gas (LNG) and Ethylene Gas (LEG), reducing carbon emissions.
            </p> */}
          </div>
        </div>
        <div className="allsection section2"  data-aos="flip-right"  >
          <div className="content">
            <h2>LFSS – Methanol/LPS/Ammonia</h2>
            {/* <p>
              Low-flashpoint fuel systems support cleaner fuels like Methanol,
              Ammonia, and Liquid Petroleum Gas (LPG) for a greener voyage.
            </p> */}
          </div>
        </div>
        <div className="allsection section3"  data-aos="flip-left" >
          <div className="content">
            <h2>Cargo Handling – LNG/LPG/Ammonia/LCO2</h2>
            {/* <p>
              Eco-efficient cargo handling systems designed for safe transport of
              green fuels and gases.
            </p> */}
          </div>
        </div>
        <div className="allsection section4"  data-aos="flip-right"  >
          <div className="content">
            <h2>Cryogenic Piping &amp; Valves</h2>
            {/* <p>
              Advanced cryogenic systems that support the sustainable handling of
              ultra-low-temperature fuels, optimizing energy use.
            </p> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Commitsmentcomponent;
