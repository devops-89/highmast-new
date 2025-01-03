import React, { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE, // Required for Vanta.js to work
          color: 0x1e90ff, // Customize colors or other parameters
          shininess: 50,
          waveSpeed: 0.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ height: "100vh", width: "100%" }} />;
};

export default VantaBackground;
