import React, { useState } from "react";
import "aos/dist/aos.css";
import Aboutsection from "../../component/about";
import "./index.css";
import CoreValues from "../../component/core-values";
import Ourteam from "../../component/our-team";
import Certification from "../../component/certification";
import Contactseection from "../../component/contactsection";
import AboutHeader from "../../component/aboutheader";
import SmallTextAnimation from "../../component/animations/SmallTextAnimation/SmallTextAnimation";

const About = () => {

  const [font,setFont]=useState(calculateFontSize());

  function calculateFontSize() {
    const width = window.innerWidth;
    if (width > 1200) return "70px";
    if (width > 767) return "70px";
    return "2rem";
  }

  return (
    <div>
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
      <Aboutsection />
     <CoreValues />
     
      <Certification />
      <Contactseection />
    </div>
  );
};

export default About;
