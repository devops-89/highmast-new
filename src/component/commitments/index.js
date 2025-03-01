import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel,Autoplay } from "swiper/modules"; // Use Mousewheel instead of Autoplay
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import image1 from "../../assets/img/elements/lng.jpg";
import image2 from "../../assets/img/elements/serviceimg2.jpeg";
import image3 from "../../assets/img/elements/cargo-handling.jpg";
import image4 from "../../assets/img/elements/serviceimg4.jpg";
import ReactLenis from "lenis/react";

const Commitsmentcomponent = () => {
  // const [value, setValue] = React.useState(0);
  //   const swiperRef = useRef(null);

    // Handle slide change and scroll away from Swiper when reaching the first slide
    // const handleSlideChange = (swiper) => {
    //   setValue(swiper.activeIndex);
  
    //   // If the user scrolls backward to the first slide, scroll out of the section
    //   if (swiper.activeIndex === 0 && swiper.isBeginning) {
    //     setTimeout(() => {
    //       window.scrollBy({ top: -300, behavior: "smooth" });
    //     }, 1500); // Delay for smoother transition
    //   }
    // };
  
    // Scroll away from Swiper after reaching the last slide
    // const handleReachEnd = () => {
    //   setTimeout(() => {
    //     window.scrollBy({ top: 300, behavior: "smooth" });
    //   }, 1500); // Delay for smoother transition
    // };
  
  return (
    
    <div className="container-fluid commitments-container">
      <div className="container commitments-subcontainer">
        <Swiper
        //  ref={swiperRef}
          style={{ margin: "auto" }}
          speed={1200}
            
            spaceBetween={30}
            slidesPerView={1}
            initialSlide={0}
            direction={"horizontal"}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter:true
            // }}
            mousewheel={false}
            navigation={true}
            loop={true}
            modules={[ Autoplay,Mousewheel,Navigation]}
        >
          <SwiperSlide>
            <div className="slides">
              <div className="section1 image-content">
                <img src={image1} alt="image1" />
              </div>
              <div className="text-content">
                <h3>FGSS – LNG/LEG</h3>
                <p>
                  Fuel Gas Supply Systems are designed to power ships with Liquefied
                  Natural Gas (LNG) and Ethylene Gas (LEG), reducing carbon emissions.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides">
              <div className="section2 image-content">
                <img src={image2} alt="image2" />
              </div>
              <div className="text-content">
                <h3>LFSS – Methanol/LPS/Ammonia</h3>
                <p>
                  Low-flashpoint fuel systems support cleaner fuels like Methanol,
                  Ammonia, and Liquid Petroleum Gas (LPG) for a greener voyage.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides">
              <div className="section3 image-content">
                <img src={image3} alt="image3" />
              </div>
              <div className="text-content">
                <h3>Cargo Handling – LNG/LPG/Ammonia/LCO2</h3>
                <p>
                  Eco-efficient cargo handling systems designed for safe transport of
                  green fuels and gases.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides">
              <div className="section4 image-content">
                <img src={image4} alt="image3" />
              </div>
              <div className="text-content">
                <h3>Cryogenic Piping &amp; Valves</h3>
                <p>
                  Advanced cryogenic systems that support the sustainable handling of
                  ultra-low-temperature fuels, optimizing energy use.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
   
  );
};

export default Commitsmentcomponent;
