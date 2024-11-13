import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aboutsection from "../../component/about";
import "./index.css";
import CoreValues from "../../component/core-values";
import Ourteam from "../../component/our-team";
import Certification from "../../component/certification";

const About = () => {
 
  return (
    <div>
      <section style={{ height: "100vh" }} className="aboutbanner secOne2 ">
        <div className="aboutbanneroverlay"></div>{" "}
        <div className="container bannercontainer">
          <div className="section-title desktop">
            <h1 data-aos="fade-down">
              <p className="rstoftext">
                <span className=""> Redefining </span> Marine{" "}
              </p>
              <p className="rstoftext">Operations with</p>
              <p className="rstoftext">
                <span
                  className="text-border highmasttextbg"
                  data-aos="flip-left"
                >
                  20<span style={{ color: "#E32226" }}>+</span>
                  <span> Years</span> of
                </span>{" "}
                Expertise
              </p>
            </h1>
          </div>

        </div>
      </section>

      <Aboutsection />
      <Ourteam />
      <CoreValues />
      <Certification />
    </div>
  );
};

export default About;
