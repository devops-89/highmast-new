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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the minimum and maximum values for scaling and font size
  const minScale = 1; // minimum zoom level
  const maxScale = 5; // maximum zoom level

  const minFontSize = 100; // minimum font size in px
  const maxFontSize = 300; // maximum font size in px

  const scaleValue = Math.min(
    maxScale,
    Math.max(minScale, 1 - Math.cos(scrollY / 300))
  );
  const fontSizeValue = Math.min(
    maxFontSize,
    Math.max(minFontSize, 30 - Math.cos(scrollY / 400) * 20)
  );

  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="container-fluid px-0 aboutussectionbg ">
        <div className="container allpadding">
          <div className="row">
            <div className="col-sm-12 mx-auto">
              <div className="scroll-animation-containerabout" ref={sectionRef}>
                <div
                  className="zoom-textAbout"
                  style={{
                    transform: `scale(${scaleValue}) translate(${
                      scrollY > 0 ? "0%" : "-50%"
                    }, -50%)`,
                    fontSize: `${fontSizeValue}px`, // Using px for consistency
                  }}
                >
                  Why High<span className="Mast-text">Mast</span>?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container Aboutparent ">
          <div className="row align-items-center">
            <div className="col-sm-4 aboutusleftimgparent text-center">
              <div className="aboutusimg ">
                <img
                  className="abouthighmastimg"
                  src={abouthighmastimg}
                  data-aos="zoom-in-down"
                  data-aos-duration="500"
                  data-aos-delay="200"
                ></img>
              </div>
            </div>
            <div className="col-sm-8 alltextparent ">
              <div
                className="aboutcontent"
                data-aos="fade-left"
                // data-aos-anchor="#example-anchor"
                data-aos-offset="300"
                data-aos-duration="300"
                data-aos-delay="400"
              >
                <Typography component="p"></Typography>
                <Typography component="p">
                  At HighMast Marine Services Pte Ltd, sustainability drives
                  everything we do. Founded in 2023 by a team with over 20 years
                  of ship management expertise, we are redefining maritime
                  operations through innovative green technology. Based in
                  Singapore, we deliver world-class marine solutions focused on
                  efficiency, quality, and environmental responsibility.
                </Typography>
                <br></br>
                <Typography component="p">
                  In partnership with ContiOcean Environment Global, China, we
                  bring cutting-edge sustainable technologies to the maritime
                  industry. Our advanced systems, including Exhaust Gas Cleaning
                  Systems (EGCS) and Carbon Capture & Solidification (CCS), set
                  new standards for emission reduction and fuel efficiency,
                  helping shipowners navigate the complexities of a changing
                  world.
                </Typography>
                <br></br>
                <Typography component="p">
                  With over 50 successful dry dockings and a 100% commitment to
                  emission-free energy, HighMast combines expertise with
                  eco-friendly innovation. Certified to ISO 9001, ISO 14001, and
                  ISO 45001 standards, we deliver unparalleled quality and
                  safety assurance, offering 24/7 support across 50+ global
                  ports to keep vessels running smoothly and sustainably.
                </Typography>
              </div>
            </div>
{/* 
            <div className="row card24x27parentrow">
              <div
                className="col-sm-5 mx-auto card24x27parent card24bg "
                data-aos="flip-down"
              >
                <div className="pt-4 px-3 ">
                  <img className="img24" src={img24x7}></img>
                  <h3 className="heading">We Are Available</h3>
                  <img className="datawaveimg" src={datawaveimg}></img>
                  <p className="para">
                    HighMast Marine Services provides 24/7 support to keep your
                    vessels running smoothly, with assistance available across
                    50+ global ports.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
