import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import "./index.css";

const ServicesPointers = (props) => {
  const imageRef = useRef(null);
  useEffect(() => {
    // Create an Intersection Observer
    const handleScroll = () => {
      const image = imageRef.current;
      if (!image) return;

      const scrollY = window.scrollY; // Get current scroll position
      if (scrollY > 100) {
        // Adjust threshold as needed
        image.classList.add("zoom-effect"); // Add zoom effect on scroll down
        image.classList.remove("zoom-out-effect"); // Remove zoom-out effect if any
      } else {
        image.classList.remove("zoom-effect"); // Remove zoom effect on scroll up
        image.classList.add("zoom-out-effect");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) {
      AOS.init({
        offset: 100,
        duration: 600,
        once: false,

        easing: "ease-in-sine",
      });
    } else {
      AOS.init({
        once: true,
      });
    }
  }, []);

  return (
    <div className="container allpadding">
      <Box sx={{ textAlign: "left" }}>
        <Typography sx={{ color: "red", fontWeight: "600" }}>
          {props.heading}
        </Typography>
        {/* <Typography
          sx={{ color: "#fff", fontSize: "70px" }}
          data-aos="fade-right"
        >
          {props.subheading}
        </Typography> */}
      </Box>
      <div className="row align-items-center mt-4">
        <div className="col-sm-5 text-center mb-5 ">
          <div>
            <div
              // ref={imageRef} // Attach ref to target the image element
              className="pointerimg "
              data-aos="zoom-out-down"
              style={{
                backgroundImage: `url(${props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                borderRadius: "5px",
                margin: "0px auto",
              }}
            ></div>
          </div>
        </div>
        <div className="col-sm-7 ">
          <div
            className="row pointerparent"
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead "
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.name1}
              </Typography>
            </div>
            <div className="col-sm-9">
              <Typography
                className="pointername"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.pointername1}
              </Typography>
            </div>
          </div>
          <div
            className="row pointerparent"
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.name2}
              </Typography>
            </div>
            <div className="col-sm-9">
              <Typography
                className="pointername"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.pointername2}
              </Typography>
            </div>
          </div>
          <div
            className="row pointerparent"
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.name3}
              </Typography>
            </div>
            <div className="col-sm-9">
              <Typography
                className="pointername"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.pointername3}
              </Typography>
            </div>
          </div>
          <div
            className="row pointerparent"
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.name4}
              </Typography>
            </div>
            <div className="col-sm-9">
              <Typography
                className="pointername"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.pointername4}
              </Typography>
            </div>
          </div>
          <div
            className="row pointerparent"
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.name5}
              </Typography>
            </div>
            <div className="col-sm-9">
              <Typography
                className="pointername"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "1rem" } }}
              >
                {props.pointername5}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPointers;
