import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import "aos/dist/aos.css";

const Homepagebanner = () => {
  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.to("body, html", {
      scrollBehavior: "smooth",
    });

   
   // Animate topline width and opacity
   gsap.utils.toArray(".top-line").forEach((topline) => {
    gsap.fromTo(
      topline,
      {
        width: "0%", // initial state: width is 0
        opacity: 0,  // initial state: hidden
      },
      {
        width: "100%", // final state: width is full
        opacity: 1,    // final state: fully visible
        duration: 1.5, // duration of animation
        ease: "power1.out",
        scrollTrigger: {
          trigger: topline,
          start: "top 80%", // Start when the top of the element reaches 90% of the viewport
          end: "top 50%",   // End when the top reaches 30% of the viewport
          scrub: 2,         // Smooth scrolling
         
        },
      }
    );
  });

    
    // Animate .contersection with scroll
  gsap.to(".contersection", {
    scrollTrigger: {
      trigger: ".contersection",
      start: "top 70%",  // Start animation when the element's top reaches 40% of the viewport
      end: "top 60%",    // End when the element's top reaches 30% of the viewport
      scrub: 1,
      
    },
    y: 0,               // Move the element to its original position
    opacity: 1,         // Fade the element in
    ease: "power1.out", // Easing function for smooth animation
    duration: 1.5,      // Optional: smooth duration
  });

  // Animate text reveal inside .contersection
  gsap.fromTo(
    ".contersection .desc", // Target the text element inside .contersection
    {
      opacity: 0,           // Start with text hidden
      y: 50,                // Start with text 50px below its normal position
    },
    {
      opacity: 1,           // Fade in the text
      y: 0,                 // Move the text to its original position
      duration: 1.5,        // Optional: smooth duration for text animation
      ease: "power1.out",   // Easing for smooth animation
      scrollTrigger: {
        trigger: ".contersection",
        start: "top 55%",   // Start the animation when the element's top reaches 40% of the viewport
        end: "top 50%",     // End when the top reaches 30%
        scrub: true,        // Synchronize with the scroll position
      },
    }
  );
    return () => {
      
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  

  return (
    <div>
      <section
        
        className="secOne secOne2 "
      >
         
        <div className="overlay" >
       
          </div> 
        <div className="container bannercontainer">
          <div className="desktop" data-aos="zoom-in-up">
       
            <h1>
              <span className="rstoftext">
                <span className="text-border greentext">green</span> maritime
              </span>
              <br />
              <span className="rstoftext">innovation by</span>
              <br />
              <span className="rstoftext">
                <span className="text-border highmasttextbg">
                  High<span style={{ color: "#E32226" }}>Mast</span> marine
                </span>{" "}
                &{" "}
              </span>
              <br />
              <span className="rstoftext contioceantext">
                ContiOcean ENVIRONMENT GLOBAL
              </span>
            </h1>
            <div className="top-line"></div>
          </div>
            
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
          {/* Add mobile-view content as required */}
            {/* mobile view */}
            <div className="mobile-view">
            <div className="row mx-auto">
              
              <div className="col" >
                {/* <div className="top-line"></div> */}
                <h3 className="number" data-aos="zoom-in-down" >
                  <span>1</span>
                  <span>0</span>
                  <span>0</span>
                  <span className="symbol">%</span>
                </h3>
                <p className="desc">Emission-Free Green Energy Solutions</p>
              </div>
            </div>
          
         
          </div>
          {/* end mobile view */}
        </div>
      </section>
    </div>
  );
};

export default Homepagebanner;