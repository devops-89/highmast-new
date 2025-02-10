import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules"; // Import Autoplay module
import "./index.css";

import { Typography } from "@mui/material";

const Testimonials = (props) => {
  const swiperRef = useRef();

  const handleEnd = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      // if (swiper.isEnd) {
      //   setTimeout(() => {
      //     window.scrollBy({ top: 300, behavior: "smooth" });
      //   }, 1000);
      // }

      // if (swiper.isBeginning) {
      //   setTimeout(() => {
      //     window.scrollBy({ top: -300, behavior: "smooth" });
      //   }, 1000);
      // }
    }
  };

  return (
    <div className="container testimonialssection allpadding">
      <div data-aos="fade-down" data-aos-mirror="true">
        <h2 className="subheading headingcenter">Trusted by Many...</h2>
      </div>
      <div className="col-sm-10 mx-auto">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          speed={1000}
          mousewheel={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
          modules={[Mousewheel, Autoplay]} // Include Autoplay module
          className="testimonialswiper"
          onSlideChange={handleEnd}
          ref={swiperRef}
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-sm-4">
                <div className="testimonialavtarbg">
                  <img src={props.avtarimg} className="testimonialimg" alt="Avatar" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="testimonialscontent">
                  <Typography
                    className="testimonialsp"
                    sx={{ fontSize: { xs: "12px", md: "18px", lg: "20px" } }}
                  >
                    <img className="testimonialquote" src={props.dwnquote} alt="Down Quote" />
                    {props.para}
                    <img className="testimonialquote" src={props.upquote} alt="Up Quote" />
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "18px", md: "21px", lg: "21px" },
                      color: "#e32226",
                      margin: "20px 0px",
                      fontWeight: "600",
                      textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
                    }}
                  >
                    {props.name1}
                  </Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="col-sm-5">
                <div className="testimonialavtarbg">
                  <img src={props.avtarimg} className="testimonialimg" alt="Avatar" />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="testimonialscontent">
                  <Typography
                    className="testimonialsp"
                    sx={{ fontSize: { xs: "12px", md: "18px", lg: "20px" } }}
                  >
                    <img className="testimonialquote" src={props.dwnquote} alt="Down Quote" />
                    {props.para2}
                    <img className="testimonialquote" src={props.upquote} alt="Up Quote" />
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "18px", md: "21px", lg: "21px" },
                      color: "#e32226",
                      margin: "20px 0px",
                      fontWeight: "600",
                      textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
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
                  <img src={props.avtarimg} className="testimonialimg" alt="Avatar" />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="testimonialscontent">
                  <Typography
                    className="testimonialsp"
                    sx={{ fontSize: { xs: "12px", md: "18px", lg: "20px" } }}
                  >
                    <img className="testimonialquote" src={props.dwnquote} alt="Down Quote" />
                    {props.para3}
                    <img className="testimonialquote" src={props.upquote} alt="Up Quote" />
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "18px", md: "21px", lg: "21px" },
                      color: "#e32226",
                      margin: "20px 0px",
                      fontWeight: "600",
                      textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
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
