import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

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


  return (
    <div className="container allpadding">
      <Box sx={{ textAlign: "left" }}>
        <Typography sx={{ color: "red", fontWeight: "600" }}>
          {props.heading}
        </Typography>
      </Box>
      <div className="row align-items-center mt-4">
        <div className="col-sm-5 text-center mb-5 ">
          <div>
            <div
              className="pointerimg "
              data-aos="zoom-out-down"
              data-aos-mirror="true"
              data-aos-easing="ease-in-out"
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
            data-aos="fade-left"
            data-aos-mirror="true"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead "
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "15px" } }}
              >
                {props.name1}
              </Typography>
            </div>
            <div className="col-sm-9">
              <Typography
                className="pointername"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "15px" } }}
              >
                {props.pointername1}
              </Typography>
            </div>
          </div>
          <div
            className="row pointerparent"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-delay="200"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "15px" } }}
              >
                {props.name2}
              </Typography>
            </div>
            <div className="col-sm-9">
              <Typography
                className="pointername"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "15px" } }}
              >
                {props.pointername2}
              </Typography>
            </div>
          </div>
          <div
            className="row pointerparent"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-mirror="true"
          >
            <div className="col-sm-3">
              <Typography
                className="pointershead"
                sx={{ fontSize: { xs: "13px", md: "1rem", lg: "17px" } }}
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
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos-mirror="true"
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
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-mirror="true"
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
