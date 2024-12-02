import React, { useEffect } from "react";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Homepagebanner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".contersection");
      const topLines = document.querySelectorAll(".top-line");
      const maxScale = 3.8;
      const minScale = 1;
      const startScroll = section.getBoundingClientRect().top + 400;
      const endScroll = startScroll + 500;
      const maxTranslateY = 500;

      const toplineScroll = section.getBoundingClientRect().top;
      const maxWidth = 100;
      const minWidth = 0;
      const currentScroll = window.scrollY;

      topLines.forEach((topline) => {
        if (currentScroll >= toplineScroll && currentScroll < startScroll) {
          const progressTopLine = Math.min(
            Math.max(
              (currentScroll - toplineScroll) / (startScroll - toplineScroll),
              0
            ),
            1
          );

          const width = minWidth + progressTopLine * (maxWidth - minWidth);
          const opacity = progressTopLine;
          topline.style.width = `${width}%`;
          topline.style.opacity = opacity;
        }
      });

      if (currentScroll >= startScroll) {
        const progress = Math.min(
          Math.max(
            (currentScroll - startScroll) / (endScroll - startScroll),
            0
          ),
          1
        );
        const scale = maxScale - progress * (maxScale - minScale);
        const translateY = progress * maxTranslateY;
        section.style.transform = `translate3d(0px, ${translateY}px, 0px) scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        style={{ height: "240vh", paddingBottom: "300px" }}
        className="secOne secOne2 "
      >
        <div className="overlay"></div> {/* Add this div for the overlay */}
        <div className="container bannercontainer">
          <div className="section-title desktop" data-aos="zoom-in-up">
            <h1>
              <p className="rstoftext">
                <span className="text-border greentext "> green</span> maritime{" "}
              </p>
              <p className="rstoftext">innovation by</p>
              <p className="rstoftext">
                <span
                  className="text-border highmasttextbg"
                  data-aos="flip-left"
                >
                  High<span style={{ color: "#E32226" }}>Mast</span> marine
                </span>{" "}
                &{" "}
              </p>
              <p className="rstoftext  contioceantext" >
             
                  ContiOcean ENVIRONMENT
               
           
                
              </p>
            </h1>
          </div>
          <div className="contersection">
            <div className="row">
              <div className="col" >
                <div className="top-line"></div>
                <h3 className="number" data-aos="zoom-in-up">
                  <span>5</span>
                  <span>0</span>
              
                  <span className="symbol">+</span>
                </h3>
                <p className="desc">Successful Dry Dockings</p>
              </div>
              <div className="col" >
                <div className="top-line"></div>
                <h3 className="number" data-aos="zoom-in-up">
                  <span>1</span>
                  <span>0</span>
                  <span>0</span>
                  <span className="symbol">%</span>
                </h3>
                <p className="desc">Emission-Free Green Energy Solutions</p>
              </div>
              <div className="col" data-aos="zoom-in-up">
                <div className="top-line"></div>
                <h3 className="number">
                  <span>2</span>
                  <span>0</span>
                  <span className="symbol">%</span>
                </h3>
                <p className="desc">Global Ports Served</p>
              </div>
            </div>
            <div className="row">
              <div className="col" >
                <div className="top-line"></div>
                <h3 className="number" data-aos="zoom-in-up">
                  <span>2</span>
                  <span>0</span>
                  <span className="symbol">+</span>
                </h3>
                <p className="desc">Eco-Friendly Ship Designs</p>
                <div className="bottom-line"></div>
              </div>
              <div className="col" >
                <div className="top-line"></div>
                <h3 className="number" data-aos="zoom-in-up">
                  <span>1</span>
                  <span>0</span>
                  <span className="symbol">+</span>
                </h3>
                <p className="desc">Managed vessels</p>
                <div className="bottom-line"></div>
              </div>
              <div className="col" >
                <div className="top-line"></div>
                <h3 className="number" data-aos="zoom-in-up">
                  <span>6</span>
                  <span className="symbol">+</span>
                </h3>
                <p className="desc">Shipping pools</p>
                <div className="bottom-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepagebanner;
