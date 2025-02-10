import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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


  return (
    <div className="container additionalservicesparent allpadding ">


      <div>
        <h2  data-aos="fade-down"       data-aos-mirror="true"  className="subheading headingcenter" sx={{ color: "#fff", marginBottom:{xs:"60px",md:"80px",lg:"80px"} }}>
          {props.mainheading}
        </h2>
      </div>
      <div className="scroll-animation-containerhighmast " ref={sectionRef}>
        <div className="circle-grid">
          <div
            className="circle"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
            data-aos-mirror="true"

          >
            <img src={props.img1} alt="Circle Image" className="circle-image" />
            <Typography sx={{fontSize:{xs:"14px",md:"20px",lg:"20px"}, fontWeight: "600" }}>{props.text1}</Typography>
          </div>
          <div
            className="circle"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
            data-aos-mirror="true"
          >
            <img src={props.img2} alt="Circle Image" className="circle-image" />
            <Typography sx={{fontSize:{xs:"14px",md:"20px",lg:"20px"},fontWeight: "600" }}>{props.text2}</Typography>
          </div>
          <img
            src={Highmastbigimg}
            alt="Animated"
            className="zoom-imagehigmast"
            style={{
              transform: `scale(${scaleValue})`,
              transition: "transform 0.3s ease",
              filter:`invert(1)`
            }}
          />
          <div
            className="circle"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
              data-aos-mirror="true"
          >
            <img src={props.img3} alt="Circle Image" className="circle-image" />
            <Typography sx={{fontSize:{xs:"14px",md:"20px",lg:"20px"}, fontWeight: "600" }}>{props.text3}</Typography>
          </div>
          <div
            className="circle"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
             data-aos-mirror="true"
          >
            <img src={props.img4} alt="Circle Image" className="circle-image" />
            <Typography sx={{fontSize:{xs:"14px",md:"20",lg:"20px"}, fontWeight: "600" }}>{props.text4}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additinalservices;
