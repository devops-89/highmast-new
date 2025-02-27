import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import SmallTextAnimation from "../../component/animations/SmallTextAnimation/SmallTextAnimation";
import AOS from "aos";
import "./index.css";
import "./custom.css";
import "aos/dist/aos.css";
import SplitText from "../splittext/SplitText.js";
import BlurText from "../blurtext/BlurText.js";

const Homepagebanner = () => {
  const [fontSize, setFontSize] = useState(calculateFontSize());

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out",
      once: false,
      mirror: true,
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
                 
                  <SplitText
                    text="GREEN MARITIME"
                    className="text-style"
                    delay={150}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    fontSize={fontSize}
                   
                  />
                </span>
              </span>
              <br />
              <span className="rstoftext">innovation by</span>
              <br />
              <span className="rstoftext">
              

                <SplitText
                  text="HIGH MAST MARINE"
                  className="text-style"
                  delay={150}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  fontSize={fontSize}
                 
                />
              </span>
              <br />
            
             
              <BlurText
  text="ContiOcean ENVIRONMENT GLOBAL"
  delay={80}
  animateBy="letters"
  direction="top"

  className="text-2xl mb-8"
  fontSize={fontSize}
/>
          
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
