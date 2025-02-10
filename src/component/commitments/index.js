import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import EffectFade
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import image1 from "../../assets/img/elements/lng.jpg";
import image2 from "../../assets/img/elements/serviceimg2.jpeg";
import image3 from "../../assets/img/elements/cargo-handling.jpg";
import image4 from "../../assets/img/elements/serviceimg4.jpg";

const Commitsmentcomponent = () => {
  return (
    <div className="container-fluid commitments-container">
      <div className="container commitments-subcontainer">
        <Swiper
          style={{ margin: "auto" }}
          modules={[Navigation,Autoplay]} 
          spaceBetween={10}
          slidesPerView={1} 
          navigation
          loop={true} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          speed={800} 
          
          fadeEffect={{ crossFade: true }} 
        >
          <SwiperSlide>
            <div className="slides">
              <div className="text-content">
                <h2>FGSS – LNG/LEG</h2>
                <p>
                  Fuel Gas Supply Systems are designed to power ships with Liquefied
                  Natural Gas (LNG) and Ethylene Gas (LEG), reducing carbon emissions.
                </p>
              </div>
              <div className="section1 image-content">
                <img src={image1}  alt="image1" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides">
              <div className="text-content">
                <h2>LFSS – Methanol/LPS/Ammonia</h2>
                <p>
                  Low-flashpoint fuel systems support cleaner fuels like Methanol,
                  Ammonia, and Liquid Petroleum Gas (LPG) for a greener voyage.
                </p>
              </div>
              <div className="section2 image-content"  >
                <img src={image2} alt="image2" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides">
              <div className="text-content">
                <h2>Cargo Handling – LNG/LPG/Ammonia/LCO2</h2>
                <p>
                  Eco-efficient cargo handling systems designed for safe transport of
                  green fuels and gases.
                </p>
              </div>
              <div className="section3 image-content">
              <img src={image3} alt="image3" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides">
              <div className="text-content">
                <h2>Cryogenic Piping &amp; Valves</h2>
                <p>
                  Advanced cryogenic systems that support the sustainable handling of
                  ultra-low-temperature fuels, optimizing energy use.
                </p>
              </div>
              <div className="section4 image-content" >
                <img src={image4} alt="image3" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Commitsmentcomponent;
