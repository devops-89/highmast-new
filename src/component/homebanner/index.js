import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmallTextAnimation from "../../component/animations/SmallTextAnimation/SmallTextAnimation";
import "./index.css";
import "aos/dist/aos.css";

const Homepagebanner = () => {
  const [fontSize, setFontSize] = useState(calculateFontSize());

  useEffect(() => {
    const handleResize = () => {
      setFontSize(calculateFontSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("body, html", {
      scrollBehavior: "smooth",
    });

    gsap.utils.toArray(".top-line").forEach((topline) => {
      gsap.fromTo(
        topline,
        { width: "0%", opacity: 0 },
        {
          width: "100%",
          opacity: 1,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: topline,
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        }
      );
    });

    gsap.to(".contersection", {
      scrollTrigger: {
        trigger: ".contersection",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
      },
      y: 0,
      opacity: 1,
      ease: "power1.out",
      duration: 1.5,
    });

    gsap.fromTo(
      ".contersection .desc",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".contersection",
          start: "top 55%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  function calculateFontSize() {
    const width = window.innerWidth;
    if (width > 1200) return "70px";
    if (width > 767) return "70px";
    return "2rem";
  }

  return (
    <div>
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
            <div className="top-line"></div>
          </div>

          {/* contersection */}

          <div className="contersection desktop-view " >
            <div className="row mx-auto">
             
              <div className="col ">
                {/* <div className="top-line"></div> */}
                <h2 className="number"  data-aos="zoom-in-up">
                  <span>1</span>
                  <span>0</span>
                  <span>0</span>
                  <span className="symbol">%</span>
                </h2>
                <h2 className="desc">Emission-Free Green Energy Solutions</h2>
              </div>
          
            </div>
            </div>
          {/* Mobile and additional content */}
        </div>
      </section>
    </div>
  );
};

export default Homepagebanner;
