import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Mousewheel } from "swiper/modules";
import "./index.css";

import testimonialimg1 from "../../assets/img/elements/Teamimg1.jpeg";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import { Typography } from "@mui/material";

const Testimonials = (props) => {
  const swiperRef = useRef();
  const handleEnd = () => {
    // Check if swiperRef is available and the Swiper instance is correctly referenced
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      // // Scroll down if the Swiper is at the end
      // if (swiper.isEnd) {
      //   window.scrollBy({ top: 300, behavior: "smooth" });
      // }

      // // Scroll up if the Swiper is at the beginning
      // if (swiper.isBeginning) {
      //   window.scrollBy({ top: -300, behavior: "smooth" });
      // }
      // Scroll down if the Swiper is at the end
      if (swiper.isEnd) {
        setTimeout(() => {
          window.scrollBy({ top: 300, behavior: "smooth" });
        }, 1000); // Delay for smoother transition when reaching the end
      }

      // Scroll up if the Swiper is at the beginning
      if (swiper.isBeginning) {
        setTimeout(() => {
          window.scrollBy({ top: -300, behavior: "smooth" });
        }, 1000); // Delay for smoother transition when reaching the beginning
      }
    }
  };

  return (
    <div className="container testimonialssection allpadding">
      <div data-aos="fade-down" data-aos-mirror="true">
        <h2 className="subheading   headingcenter">Trusted by Many...</h2>
      </div>
      <div className="col-sm-10 mx-auto">
        <Swiper
          direction={"vertical"}
          slidesPerView={1} // Show one slide at a time
          spaceBetween={30}
          speed={1000}
          mousewheel={true}
         
          modules={[Mousewheel]}
          className="testimonialswiper"
          onSlideChange={handleEnd}
          ref={swiperRef}
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-sm-4">
                <div className="testimonialavtarbg">
                  <img src={props.avtarimg} className="testimonialimg"></img>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="testimonialscontent">
                  <Typography
                    className="testimonialsp"
                    sx={{ fontSize: { xs: "12px", md: "18px", lg: "20px" } }}
                  >
                    <img
                      className="testimonialquote"
                      src={props.dwnquote}
                    ></img>
                    {props.para}{" "}
                    <img className="testimonialquote" src={props.upquote}></img>
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "18px", md: "21px", lg: "21px" },
                      color: "#e32226",
                      margin: "20px 0px",
                      fontWeight: "600",
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                      },
                    }}
                  >
                    {props.name1}
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="row">
              <div className="col-sm-5">
                <div className="testimonialavtarbg">
                  <img src={props.avtarimg} className="testimonialimg"></img>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="testimonialscontent">
                  <Typography
                    className="testimonialsp"
                    sx={{ fontSize: { xs: "12px", md: "18px", lg: "20px" } }}
                  >
                    <img
                      className="testimonialquote"
                      src={props.dwnquote}
                    ></img>
                    {props.para2}{" "}
                    <img className="testimonialquote" src={props.upquote}></img>
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "18px", md: "21px", lg: "21px" },
                      color: "#e32226",
                      margin: "20px 0px",
                      fontWeight: "600",
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                      },
                    }}
                  >
                    {props.name2}
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-sm-5">
                <div className="testimonialavtarbg">
                  <img src={props.avtarimg} className="testimonialimg"></img>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="testimonialscontent">
                  <Typography
                    className="testimonialsp"
                    sx={{ fontSize: { xs: "12px", md: "18px", lg: "20px" } }}
                  >
                    <img
                      className="testimonialquote"
                      src={props.dwnquote}
                    ></img>
                    {props.para3}{" "}
                    <img className="testimonialquote" src={props.upquote}></img>
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "18px", md: "21px", lg: "21px" },
                      color: "#e32226",
                      margin: "20px 0px",
                      fontWeight: "600",
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                      },
                    }}
                  >
                    {props.name3}
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
