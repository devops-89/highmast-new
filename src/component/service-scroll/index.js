import React, { useState,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Mousewheel } from "swiper/modules";
import "./index.css";
import GreenText from "../animations/GreenText/GreenText";

// Assuming images are imported like this:
import shipImage1 from "../../assets/img/elements/retrofitservice.jpg";
import shipImage2 from "../../assets/img/elements/serviceimg2.jpeg";
import shipImage3 from "../../assets/img/elements/ampservice.jpg";
import shipImage4 from "../../assets/img/elements/projectsupervisionservice.jpg";
import vesselsimg from "../../assets/img/elements/serviceimg5.jpg";
import shipImage6 from "../../assets/img/elements/marineautomationservice.jpg";

const Servicesscroll = () => {

  const swiperRef=useRef();

  const images = [
    shipImage1,
    shipImage2,
    shipImage3,
    shipImage4,
    vesselsimg,
    shipImage6,
  ];

  // Handle slide change and scroll away from Swiper when reaching the first slide
  const handleSlideChange = (swiper) => {
    
    setActiveSlide(swiper.realIndex);

    // If the user scrolls backward to the first slide, scroll out of the section
    if (swiper.activeIndex === 0 && swiper.isBeginning) {
      setTimeout(() => {
        window.scrollBy({ top: -300, behavior: "smooth" });
      }, 1500); // Delay for smoother transition
    }
  };

  // Scroll away from Swiper after reaching the last slide
  const handleReachEnd = () => {
    setTimeout(() => {
      window.scrollBy({ top: 300, behavior: "smooth" });
    }, 1500); // Delay for smoother transition
  };

  const textItems = [
    "Retrofit Led Power <br/> Saving Solutions",
    "Scrubber & Ccs Commisioning ",
    "Alternate Marine Power <br/> AMP Solutions",
    "Project Supervision Shipbuilding & <br/> Repairs",
    "Vessel 3D scanning <br/> & Production design",
    "Marine Electrical <br/> & Automation",
  ];

  // State for tracking the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        style={{ margin: "auto" }}
        speed={1200}
        onSlideChange={handleSlideChange}
        onReachEnd={handleReachEnd}
        slidesPerView={1}
        initialSlide={0}
        mousewheel={true}
        modules={[EffectFade, Mousewheel]}
        effect="fade"
     
       
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="container-fluid service-scroll-container"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="overlay">
                <div
                  className={`animated-text container  ${
                    activeSlide === index ? "animate" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: textItems[index] }}
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
