import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import shipImage1 from "../../assets/img/elements/serviceimg1.jpg";
import shipImage2 from "../../assets/img/elements/serviceimg2.jpg";
import shipImage3 from "../../assets/img/elements/serviceimg3.jpeg";
import shipImage4 from "../../assets/img/elements/serviceimg4.jpg";
import shipImage5 from "../../assets/img/elements/service5.jpg";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const images = [shipImage1, shipImage2, shipImage3, shipImage4, shipImage5];

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

      if (scrollPosition > 600) {
        setShowHighmastText(true);
      } else {
        setShowHighmastText(false);
      }

      if (scrollPosition > 800) {
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

  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Define the minimum and maximum values for scaling and font size
  const minScale = 1; // minimum zoom level
  const maxScale = 5;   // maximum zoom level

  const minFontSize = 450; // minimum font size in rem
  const maxFontSize = 250; // maximum font size in rem

  const scaleValue = Math.min(maxScale, Math.max(minScale, 1 - Math.cos(scrollY / 300)));
  const fontSizeValue = Math.min(maxFontSize, Math.max(minFontSize, 30 - Math.cos(scrollY /400) * 20));

  return (
    <>
      <div className="container ">
        {showHighmastText && (
          <Typography
            data-aos="fade-down"
            sx={{
              fontSize: {xs:"30px",md:"50px",lg:"50px"},
              textAlign: "left",
              fontWeight: "600",
              color: "#fff",
              textTransform: "uppercase",
           
            }}
          >
            Hight<span style={{ color: "red" }}>Mast </span>MARINE
          </Typography>
        )}
      </div>
      <div className="container-fluid">
        <div className="scroll-animation-container" ref={sectionRef}>
          <div
            className="zoom-text"
            style={{
              transform: `scale(${scaleValue})`,
              fontSize: `${fontSizeValue}px`, // Using px for consistency
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
                  fontSize: {xs:"30px", md:"50px",lg:"50px"},
                  textAlign: "right",
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
