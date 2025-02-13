import React, { useState,useEffect } from "react";
import Testimonials from "../../component/testimonials";
import Aboutsection from "../../component/about";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import "./index.css";
import CoreValues from "../../component/core-values";
import Ourteam from "../../component/our-team";
import Certification from "../../component/certification";
import Contactseection from "../../component/contactsection";
import AboutHeader from "../../component/aboutheader";
import SmallTextAnimation from "../../component/animations/SmallTextAnimation/SmallTextAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      mirror: true, 
      anchorPlacement: "top-bottom", 
    })
  })

  const [font,setFont]=useState(calculateFontSize());

  function calculateFontSize() {
    const width = window.innerWidth;
    if (width > 1200) return "70px";
    if (width > 767) return "70px";
    return "2rem";
  }

  return (
    <div>
       <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="/header/Header3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="aboutbanner secOne2 ">
        {/* <div className="aboutbanneroverlay"></div>{" "} */}
        <div className="container bannercontainer">
          <div className="section-title desktop">
            <h1 data-aos="fade-down">
              <span className="rstoftext"><SmallTextAnimation text="Redefining" textColor="red" fontSize={font} /> <SmallTextAnimation text="Marine" textColor="red" fontSize={font} /> </span>
              <br />
              <span className="rstoftext">Operations with</span>
              <br />
              <span className="rstoftext">
                <span
                  className="text-border highmasttextbg"
                  data-aos="flip-left"
                >
                  20<span style={{ color: "#E32226" }}>+</span>
                  <span> Years</span> of Expertise
                </span>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <AboutHeader />
      <Ourteam />
      {/* adding testimonials in about page */}
      <Testimonials
        avtarimg={avtarimg}
        dwnquote={dwnquote}
        upquote={upquote}
        para="Highmast marine ESD installation team was very proffesional @ the shipyard. The PVC retrofit was done to our satisfaction and time given."
        para2="We had a shut down in our dual fuel system , the problem was resolved with proper knowledge of the system , with required spares avalibility and stipulated time given in the discharge port."
        para3="HighMast Marine’s work on our scrubber and CCS commissioning was flawless. Their team guided us through the entire process with unmatched expertise and clarity."
        name1="R. Deshmukh - Sr Tech Supt"
        name2="Vinod S. - Fleet Mgr"
        name3="Anil G. - Fleet Mgr"
      />
      {/* testimonials end */}
      <Aboutsection />
     <CoreValues />
     
      <Certification />
      <Contactseection />
    </div>
  );
};

export default About;