import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AOS from "aos";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./index.css";
import Highmastbigimg from "./../../assets/img/elements/highmastmarinebigimg2.png";

import { Typography } from "@mui/material";

const Additinalservices = (props) => {
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

  // Define the minimum and maximum values for scaling
  const minScale = 1; // minimum zoom level
  const maxScale = 5; // maximum zoom level

  const scaleValue = Math.min(
    maxScale,
    Math.max(minScale, 1 - Math.cos(scrollY / 300))
  );

  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="container additionalservicesparent allpadding ">


      <div>
        <Typography  data-aos="fade-down"  sx={{ fontSize: "80px", color: "#fff",marginBottom:"80px" }}>
          {props.mainheading}
        </Typography>
      </div>
      <div className="scroll-animation-containerhighmast " ref={sectionRef}>
        <div className="circle-grid">
          <div
            className="circle"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
            data-aos-duration="300"
          >
            <img src={props.img1} alt="Circle Image" className="circle-image" />
            <Typography sx={{ fontWeight: "600" }}>{props.text1}</Typography>
          </div>
          <div
            className="circle"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
            data-aos-duration="300"
          >
            <img src={props.img2} alt="Circle Image" className="circle-image" />
            <Typography sx={{ fontWeight: "600" }}>{props.text2}</Typography>
          </div>
          <img
            src={Highmastbigimg}
            alt="Animated"
            className="zoom-imagehigmast"
            style={{
              transform: `scale(${scaleValue})`,
              transition: "transform 0.3s ease",
            }}
          />
          <div
            className="circle"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
            data-aos-duration="300"
          >
            <img src={props.img3} alt="Circle Image" className="circle-image" />
            <Typography sx={{ fontWeight: "600" }}>{props.text3}</Typography>
          </div>
          <div
            className="circle"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
            data-aos-duration="300"
          >
            <img src={props.img4} alt="Circle Image" className="circle-image" />
            <Typography sx={{ fontWeight: "600" }}>{props.text4}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additinalservices;
