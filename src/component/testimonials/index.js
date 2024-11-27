import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
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

      // Scroll down if the Swiper is at the end
      if (swiper.isEnd) {
        window.scrollBy({ top: 500, behavior: "smooth" });
      }

      // Scroll up if the Swiper is at the beginning
      if (swiper.isBeginning) {
        window.scrollBy({ top: -500, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="container testimonialssection allpadding">
      <div data-aos="fade-right">
        <h2 className="subheading  headingcenter">Trusted by Many...</h2>
      </div>
      <div className="col-sm-10 mx-auto">
      <Swiper
        direction={"vertical"}
        slidesPerView={1} // Show one slide at a time
        spaceBetween={30}
        speed={1000}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
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
                <Typography  className="testimonialsp">
                  <img src={props.dwnquote}></img>
                  {props.para} <img src={props.upquote}></img>
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "21px",
                    color: "#e32226",
                    margin: "20px 0px",
                    fontWeight: "600",
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
              <img src={props.avtarimg} className="testimonialimg"></img>
            </div>
            <div className="col-sm-7">
              <div className="testimonialscontent">
                <Typography  className="testimonialsp">
                  <img src={props.dwnquote}></img>
                  {props.para2} <img src={props.upquote}></img>
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "21px",
                    color: "#e32226",
                    margin: "20px 0px",
                    fontWeight: "600",
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
              <img src={props.avtarimg} className="testimonialimg"></img>
            </div>
            <div className="col-sm-7">
              <div className="testimonialscontent">
                <Typography  className="testimonialsp">
                  <img src={props.dwnquote}></img>
                  {props.para3} <img src={props.upquote}></img>
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "21px",
                    color: "#e32226",
                    margin: "20px 0px",
                    fontWeight: "600",
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
