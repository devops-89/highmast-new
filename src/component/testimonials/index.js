import React, { useRef,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lenis from "lenis";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules"; // Import Navigation module
import "./index.css";

import { Typography } from "@mui/material";

const Testimonials = (props) => {
  const swiperRef = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Re-enable scroll after Swiper initializes
    setTimeout(() => {
      lenis.start();
    }, 1000);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#002C30" }}>
      <div className="container testimonialssection allpadding">
        <div data-aos="fade-down" data-aos-mirror="true">
          <h2 className="subheading headingcenter">Trusted by Many...</h2>
        </div>
        <div className="col-sm-10 mx-auto">
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={30}

            loop={true}
            speed={1000}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }} // Enable navigation
            modules={[Navigation]} // Include Navigation module
            className="testimonialswiper"
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

          {/* Navigation Buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
