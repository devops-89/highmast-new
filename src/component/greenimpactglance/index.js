import React, { useEffect, useRef, useState } from "react";
import "./index.css";

import { Typography } from "@mui/material";
import GreenText from "../animations/GreenText/GreenText";


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
        setShowCommitmentText(true);
      } else {
        setShowHighmastText(false);
        setShowCommitmentText(false);
      }

      // if (scrollPosition > 100) {
      
      // } else {
       
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const minScale = 1; // No scaling, normal size
  const maxScale = 1; // Maximum scale of 1.5x for mobile
  const desktopscale = 1.5;

  const minFontSizeDesktop = 450; // minimum font size for desktop in px
  const maxFontSizeDesktop = 200; // maximum font size for desktop in px

  const minFontSizeMobile = 70; // minimum font size for mobile in px
  const maxFontSizeMobile = 90; // maximum font size for mobile in px

  // Determine if the screen is mobile
  const isMobile = window.innerWidth <= 768;

  // Adjust font size and scale based on screen size
  const fontSizeValue = isMobile
    ? Math.min(
        maxFontSizeMobile,
        Math.max(minFontSizeMobile, 40 - Math.cos(scrollY / 400) * 100)
      )
    : Math.min(
        maxFontSizeDesktop,
        Math.max(minFontSizeDesktop, 250 - Math.cos(scrollY / 400) * 200)
      );

  const scaleValue = isMobile
    ? Math.min(maxScale, Math.max(minScale, 1 - Math.cos(scrollY / 500)))
    : Math.min(desktopscale, Math.max(minScale, 1 - Math.cos(scrollY / 300))); //desktop scaling//

  return (

    <div style={{backgroundColor:"#d7d7d7"}} >
     
    {/* <div className="scrollable-container">
      <div className="container mobileviewcommitments  ">
        {showHighmastText && (
          <Typography
            data-aos="fade-down"
            sx={{
              fontSize: { xs: "30px", md: "50px", lg: "40px" },
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
      <div className="container-fluid desktop-container">
        <div className="scroll-animation-container" ref={sectionRef}>
          <div
            className="zoom-text"
            style={{
              fontSize:"20px",
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
      </div>


      <div>
          <div className="commitsmenttext">
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

 */}


{/* Test   */}

<div className="main_div">
  <div className="div_1">
  {showHighmastText && (
          <Typography
            data-aos="fade-down"
            sx={{
              fontSize: { xs: "30px", md: "50px", lg: "40px" },
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
              fontWeight: "600",
              color: "#002C30",
              textTransform: "uppercase",
            }}
          >
            High<span style={{ color: "red" }}>Mast </span>MARINE
          </Typography>
        )}
  </div>
  <div className="div_2 " ref={sectionRef} >
  {/* <div
            className="zoom-text"
            style={{
              fontSize:"20px",
              transform: `scale(${scaleValue})`,
              fontSize: `${fontSizeValue}px`,
              textAlign: "center",
              maxWidth: "90%",
              margin: "0 auto", // Using px for consistency
             
            }}
          >
            Green
          </div> */}
          <GreenText/>
  </div>
  <div className="div_3">
  {showCommitmentText && (
              <Typography
                data-aos="fade-down"
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
            )}
  </div>
</div>


</div>
  );
};

export default ScrollAnimation;
