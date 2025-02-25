import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
import GreenText from "../animations/GreenText/GreenText";
import "./index.css";

const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <div style={{ backgroundColor: "#d7d7d7" }}>
      <div className="main_div">
        {/* Highmast Text */}
        <div className="div_1" data-aos="fade-down">
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "50px", lg: "40px" },
              textAlign: { xs: "center", md: "left" },
              fontWeight: "600",
              color: "#002C30",
              textTransform: "uppercase",
            }}
          >
            High<span style={{ color: "red" }}>Mast </span>MARINE
          </Typography>
        </div>

        {/* GreenText Animation */}
        <div className="div_2" data-aos="zoom-in">
          <GreenText />
        </div>

        {/* Commitments Text */}
        <div className="div_3" data-aos="fade-up">
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "50px", lg: "50px" },
              textAlign: { xs: "center", md: "right" },
              fontWeight: "600",
              color: "#002C30",
              textTransform: "uppercase",
            }}
          >
            Commitments
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
