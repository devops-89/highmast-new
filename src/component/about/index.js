import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import gsap from "gsap";
import AOS from "aos";
import ScrollTrigger from "gsap/ScrollTrigger";
import img24x7 from "../../assets/img/elements/24-hours.png";
import datawaveimg from "../../assets/img/elements/data-wave.png";
import abouthighmastimg from "../../assets/img/elements/abouthighmastimg.jpg";

import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const Aboutsection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener safely
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init();
    return () => {
      AOS.refreshHard(); // Cleanup AOS if needed
    };
  }, []);

  useEffect(() => {
    // GSAP animation context
    const gsapContext = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      }
    }, sectionRef);

    // Cleanup GSAP animations
    return () => {
      gsapContext.revert();
    };
  }, []);

  const isMobile = window.innerWidth <= 768; // Mobile breakpoint

  // Define the minimum and maximum values for scaling and font size
  const minScale = 1; // minimum zoom level
  const maxScale = 5; // maximum zoom level

  // Define font size ranges for desktop and mobile
  const minFontSizeDesktop = 100;
  const maxFontSizeDesktop = 300;

  const minFontSizeMobile = 70; // Fixed minimum for mobile
  const maxFontSizeMobile = 50; // Fixed maximum for mobile

  // Calculate scale value
  const scaleValue = Math.min(
    maxScale,
    Math.max(minScale, 1 - Math.cos(scrollY / 300))
  );

  // Adjust font size dynamically based on screen size
  const fontSizeValue = isMobile
    ? Math.min(
        maxFontSizeMobile,
        Math.max(minFontSizeMobile, 65) // Static value for mobile
      )
    : Math.min(
        maxFontSizeDesktop,
        Math.max(minFontSizeDesktop, 30 - Math.cos(scrollY / 400) * 20)
      );

  return (
    <div>
      <div className="container-fluid px-0 aboutussectionbg">
        <div>
          <div className="container allpadding">
            <div className="row">
              <div className="col-sm-12 mx-auto">
                <div className="scroll-animation-containerabout" ref={sectionRef}>
                  <div
                    data-aos="zoom-in-up"
                    className="zoom-textAbout"
                    style={{
                      transform: `scale(${scaleValue})`,
                      fontSize: `${fontSizeValue}px`, // Using px for consistency
                    }}
                  >
                    Why High<span className="Mast-text">Mast</span>?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBlock: "40px" }}>
          <div className="container Aboutparent">
            <div className="row align-items-center">
              <div className="col-sm-4 aboutusleftimgparent text-center">
                <div className="aboutusimg">
                  <img
                    className="abouthighmastimg"
                    src={abouthighmastimg}
                    data-aos="zoom-in-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  ></img>
                </div>
              </div>
              <div className="col-sm-8 alltextparent">
                <div
                  className="aboutcontent"
                  data-aos="fade-left"
                  data-aos-mirror="true"
                  data-aos-duration="300"
                  data-aos-delay="400"
                >
                  <Typography component="p"></Typography>
                  <Typography component="p" className="para">
                    At HighMast Marine Services Pte Ltd, sustainability drives
                    everything we do. Founded in 2023 by a team with over 20 years
                    of ship management expertise, we are redefining maritime
                    operations through innovative green technology. Based in
                    Singapore, we deliver world-class marine solutions focused on
                    efficiency, quality, and environmental responsibility.
                  </Typography>
                  <br></br>
                  <Typography component="p" className="para">
                    In partnership with ContiOcean Environment Global, China, we
                    bring cutting-edge sustainable technologies to the maritime
                    industry. Our advanced systems, including Exhaust Gas Cleaning
                    Systems (EGCS) and Carbon Capture & Solidification (CCS), set
                    new standards for emission reduction and fuel efficiency,
                    helping shipowners navigate the complexities of a changing
                    world.
                  </Typography>
                  <br></br>
                  <Typography component="p" className="para">
                    With over 50 successful dry dockings and a 100% commitment to
                    emission-free energy, HighMast combines expertise with
                    eco-friendly innovation. Certified to ISO 9001, ISO 14001, and
                    ISO 45001 standards, we deliver unparalleled quality and
                    safety assurance, offering 24/7 support across 50+ global
                    ports to keep vessels running smoothly and sustainably.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
