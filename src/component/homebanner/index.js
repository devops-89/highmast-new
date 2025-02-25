import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import SmallTextAnimation from "../../component/animations/SmallTextAnimation/SmallTextAnimation";
import AOS from "aos";
import "./index.css";
import "./custom.css";
import "aos/dist/aos.css";

const Homepagebanner = () => {
  const [fontSize, setFontSize] = useState(calculateFontSize());

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: false,
      mirror: true
    });

    const handleResize = () => {
      setFontSize(calculateFontSize());
      AOS.refresh(); // Refresh AOS on resize
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      AOS.refreshHard(); // Cleanup AOS
    };
  }, []);

  function calculateFontSize() {
    const width = window.innerWidth;
    return width > 767 ? "70px" : "2rem";
  }

  return (
    <ReactLenis root options={{ smooth: true }}>
      <section className="secOne secOne2">
        <div className="overlay"></div>
        <div className="container bannercontainer">
          <div className="desktop" data-aos="zoom-in-up">
            <h1>
              <span className="rstoftext">
                <span className="greentext">
                  <SmallTextAnimation text="GREEN" textColor="green" fontSize={fontSize} />
                </span>{" "}
                maritime
              </span>
              <br />
              <span className="rstoftext">innovation by</span>
              <br />
              <span className="rstoftext">
                <span className="highmasttextbg">
                  High{" "}
                  <span>
                    <SmallTextAnimation text="MAST" textColor="red" fontSize={fontSize} />
                  </span>{" "}
                  marine
                </span>{" "}
                &{" "}
              </span>
              <br />
              <span className="rstoftext contioceantext">ContiOcean ENVIRONMENT GLOBAL</span>
            </h1>
            <div 
              className="top-line" 
              data-aos="width-animation"
              data-aos-offset="200"
              data-aos-easing="ease-out"
            ></div>
          </div>

          {/* contersection */}
          <div 
            className="contersection desktop-view"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
          >
            <div className="row mx-auto">
              <div className="col">
                <h2 className="number" data-aos="zoom-in-up">
                  <span>1</span>
                  <span>0</span>
                  <span>0</span>
                  <span className="symbol">%</span>
                </h2>
                <h2 
                  className="desc"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="300"
                >
                  Emission-Free Green Energy Solutions
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

export default Homepagebanner;