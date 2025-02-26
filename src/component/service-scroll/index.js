import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";
import "./index.css";
import { Link } from "react-router-dom";
import shipImage1 from "../../assets/img/elements/retrofitservice.jpg";
import shipImage2 from "../../assets/img/elements/serviceimg2.jpeg";
import shipImage3 from "../../assets/img/elements/ampservice.jpg";
import shipImage4 from "../../assets/img/elements/projectsupervisionservice.jpg";
import vesselsimg from "../../assets/img/elements/serviceimg5.jpg";
import shipImage6 from "../../assets/img/elements/marineautomationservice.jpg";
import shipImage7 from "../../assets/img/energy-efficiency-devices/energy-saving-main-image.webp";

const Servicesscroll = () => {
  const swiperRef = useRef();

  const images = [
    shipImage1,
    shipImage2,
    shipImage3,
    shipImage4,
    vesselsimg,
    shipImage6,
    shipImage7,
  ];

  const textItems = [
    "Retrofit Led Power <br/> Saving Solutions",
    "Scrubber & Ccs Commissioning",
    "Alternate Marine Power <br/> AMP Solutions",
    "Project Supervision Shipbuilding & Repairs",
    "Vessel 3D scanning <br/> & Production design",
    "Marine Electrical <br/> & Automation",
    "Energy Saving <br/>& Efficiency Devices",
  ];

  const linkItems=[
    "/retrofit-led-power-saving-solutions",
    "/scrubber-and-ccs-commisioning",
    "/amp-solutions-and-vdf-retrofit",
    "/project-supervision-shipbuilding-and-ship-repairs",
    "/vessel-3d-scanning-and-production-design",
    "/marine-electrical-&-automation",
    "/energy-efficiency-devices"
  ]
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
    if (swiper.activeIndex === 0 && swiper.isBeginning) {
      setTimeout(() => {
        window.scrollBy({ top: -300, behavior: "smooth" });
      }, 1500);
    }
  };

  // const handleReachEnd = () => {
  //   setTimeout(() => {
  //     window.scrollBy({ top: 300, behavior: "smooth" });
  //   }, 1500);
  // };

  const enableMousewheel = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.mousewheel.enabled = true;
      swiperRef.current.swiper.mousewheel.enable();
    }
  };

  const disableMousewheel = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.mousewheel.enabled = false;
      swiperRef.current.swiper.mousewheel.disable();
    }
  };

  return (
    <div >
      <Swiper
      
        effect="coverflow"
        ref={swiperRef}
        style={{ margin: "auto", backgroundColor: "gray" }}
        speed={1200}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        initialSlide={0}
        modules={[EffectCoverflow, Mousewheel, Autoplay]}
        loop={true}
        mousewheel={{  enabled: false }} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onWheel={(e) => e.preventDefault()}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="service-scroll-container"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="overlay" data-lenis-prevent>
                <Link to={linkItems[index]} style={{textDecoration:"none",marginLeft:"30px"}}>
                  <div
                    className={`animated-text container ${
                      activeSlide === index ? "animate mySwiper" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: textItems[index]}}
                    onMouseEnter={enableMousewheel}
                    onMouseLeave={disableMousewheel}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Servicesscroll;
