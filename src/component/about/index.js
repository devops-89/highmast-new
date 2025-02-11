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

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      }
    }, sectionRef);

    return () => {
      gsapContext.revert();
    };
  }, []);

  // Determine screen size
  const screenWidth = window.innerWidth;

  // Define font size ranges for different screen sizes
  const fontSizes = {
    mobile: { min: 40, max: 100 }, // 0px - 768px
    tablet: { min: 80, max: 100 }, // 768px - 1024px
    large: { min: 100, max: 150 }, // 1024px - 1440px
    desktop: { min: 150, max: 300 }, // > 1440px
  };

  // Adjust font size based on screen size
  let fontSizeValue;
  if (screenWidth <= 768) {
    fontSizeValue = 60;
  } else if (screenWidth > 768 && screenWidth <= 1024) {
    fontSizeValue = Math.min(
      fontSizes.tablet.max,
      Math.max(fontSizes.tablet.min, 85 - Math.cos(scrollY / 300) * 10)
    );
  } else if (screenWidth > 1024 && screenWidth <= 1440) {
    fontSizeValue = Math.min(
      fontSizes.large.max,
      Math.max(fontSizes.large.min, 120 - Math.cos(scrollY / 300) * 20)
    );
  } else {
    fontSizeValue = Math.min(
      fontSizes.desktop.max,
      Math.max(fontSizes.desktop.min, 150 - Math.cos(scrollY / 400) * 30)
    );
  }

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
                      transform: `scale(1)`, // Scaling can remain dynamic if required
                      fontSize: `${fontSizeValue}px`,
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
              <div className="col-sm-4 col-md-4 aboutusleftimgparent text-center">
                <div className="aboutusimg">
                  <img
                    className="abouthighmastimg"
                    src={abouthighmastimg}
                    data-aos="zoom-in-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  />
                </div>
              </div>
              <div className="col-sm-8 col-md-8 alltextparent">
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
                  <br />
                  <Typography component="p" className="para">
                    In partnership with ContiOcean Environment Global, China, we
                    bring cutting-edge sustainable technologies to the maritime
                    industry. Our advanced systems, including Exhaust Gas Cleaning
                    Systems (EGCS) and Carbon Capture & Solidification (CCS), set
                    new standards for emission reduction and fuel efficiency,
                    helping shipowners navigate the complexities of a changing
                    world.
                  </Typography>
                  <br />
                  <Typography component="p" className="para">
                    With over 50 successful dry dockings and a 100% commitment to
                    emission-free energy, HighMast combines expertise with
                    eco-friendly innovation. Certified to ISO 9001, ISO 14001, and
                    ISO 45001 standards, we deliver unparalleled quality and
                    safety assurance, offering 24/7 support across running smoothly and sustainably.
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