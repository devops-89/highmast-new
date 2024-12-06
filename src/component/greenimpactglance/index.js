import React, { useEffect, useRef, useState } from "react";
import "./index.css";

import { Typography } from "@mui/material";

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showHighmastText, setShowHighmastText] = useState(false);
  const [showCommitmentText, setShowCommitmentText] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      if (scrollPosition > 200) {
        setShowHighmastText(true);
      } else {
        setShowHighmastText(false);
      }

      if (scrollPosition > 400) {
        setShowCommitmentText(true);
      } else {
        setShowCommitmentText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // // Define the minimum and maximum values for scaling and font size
  // const minScale = 1; // minimum zoom level
  // const maxScale = 5; // maximum zoom level

  // const minFontSize = 450; // minimum font size in rem
  // const maxFontSize = 250; // maximum font size in rem

  // const scaleValue = Math.min(
  //   maxScale,
  //   Math.max(minScale, 1 - Math.cos(scrollY / 300))
  // );
  // const fontSizeValue = Math.min(
  //   maxFontSize,
  //   Math.max(minFontSize, 30 - Math.cos(scrollY / 400) * 20)
  // );
  // Define the minimum and maximum values for scaling and font size
  const minScale = 1; // minimum zoom level
  const maxScale = 5; // maximum zoom level

  const minFontSizeDesktop = 450; // minimum font size for desktop in px
  const maxFontSizeDesktop = 250; // maximum font size for desktop in px

  const minFontSizeMobile = 40; // minimum font size for mobile in px
  const maxFontSizeMobile = 90; // maximum font size for mobile in px

  // Determine if the screen is mobile
  const isMobile = window.innerWidth <= 768;

  // Adjust font size and scale based on screen size
  const fontSizeValue = isMobile
    ? Math.min(
        maxFontSizeMobile,
        Math.max(minFontSizeMobile, 90 - Math.cos(scrollY / 400) * 4)
      )
    : Math.min(
        maxFontSizeDesktop,
        Math.max(minFontSizeDesktop, 250 - Math.cos(scrollY / 400) * 200)
      );

  const scaleValue = isMobile
    ? Math.min(maxScale, Math.max(minScale, 1 - Math.cos(scrollY / 500)))
    : Math.min(maxScale, Math.max(minScale, 1 - Math.cos(scrollY / 300)));

  return (
    <>
      <div className="container mobileviewcommitments  ">
        {showHighmastText && (
          <Typography
            data-aos="fade-down"
            sx={{
              fontSize: { xs: "30px", md: "50px", lg: "50px" },
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
              fontWeight: "600",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            High<span style={{ color: "red" }}>Mast </span>MARINE
          </Typography>
        )}
      </div>
      <div className="container-fluid">
        <div className="scroll-animation-container" ref={sectionRef}>
          <div
            className="zoom-text"
            style={{
              transform: `scale(${scaleValue})`,
              fontSize: `${fontSizeValue}px`,
              textAlign: "center",
              maxWidth: "90%",
              margin: "0 auto", // Using px for consistency
            }}
          >
            Green
          </div>
        </div>
        <div>
          <div className="container">
            {showCommitmentText && (
              <Typography
                data-aos="fade-down"
                sx={{
                  fontSize: { xs: "30px", md: "50px", lg: "50px" },
                  textAlign: { xs: "center", md: "right" },
                  fontWeight: "600",
                  color: "#fff",
                  textTransform: "uppercase",

                }}
              >
                Commitments
              </Typography>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimation;
