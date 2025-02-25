import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";
import "./index.css";

import shipImage1 from "../../assets/img/elements/retrofitservice.jpg";
import shipImage2 from "../../assets/img/elements/serviceimg2.jpeg";
import shipImage3 from "../../assets/img/elements/ampservice.jpg";
import shipImage4 from "../../assets/img/elements/projectsupervisionservice.jpg";
import vesselsimg from "../../assets/img/elements/serviceimg5.jpg";
import shipImage6 from "../../assets/img/elements/marineautomationservice.jpg";

const Servicesscroll = () => {
  const swiperRef = useRef();

  const images = [
    shipImage1,
    shipImage2,
    shipImage3,
    shipImage4,
    vesselsimg,
    shipImage6,
  ];

  const textItems = [
    "Retrofit Led Power <br/> Saving Solutions",
    "Scrubber & Ccs Commissioning",
    "Alternate Marine Power <br/> AMP Solutions",
    "Project Supervision Shipbuilding & <br/> Repairs",
    "Vessel 3D scanning <br/> & Production design",
    "Marine Electrical <br/> & Automation",
  ];

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
    <div>
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
        mousewheel={{ enabled: false }} // Initially disabled
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="service-scroll-container"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="overlay">
                <div
               
                  className={`animated-text container ${
                    activeSlide === index ? "animate mySwiper" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: textItems[index] }}
                  onMouseEnter={enableMousewheel}
                  onMouseLeave={disableMousewheel}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Servicesscroll;
