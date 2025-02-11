import React, { useEffect,useState } from "react";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import Servicesscroll from "../../component/service-scroll";
import Majorservice from "../../component/majorservice";
import { useLocation } from "react-router-dom";


import SmallTextAnimation from "../../component/animations/SmallTextAnimation/SmallTextAnimation";


const Service = () => {

  const [font,setFont]=useState(calculateFontSize());

  useEffect(() => {
    AOS.init({
      // delay: 500,
      mirror: false,
    });
    AOS.refresh();
  }, []); // Add the dependency array to ensure it runs only once


  
  
  

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
          <source src="https://cdn.pixabay.com/video/2022/05/05/116105-706674457_tiny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section  className="servicebanner secOne2   ">
        {/* Add this div for the overlay */}
        <div className="container bannercontainer">
          <div
            className="section-title desktop"
            data-aos="fade-up"
            duration="200"
          >
            <div
              className="section-title desktop"
              data-aos="fade-up"
              data-duration="200"
            >
              <h1>
                <span className="rstoftext"><SmallTextAnimation  text="Comprehensive" fontSize={font} textColor="red" /> <SmallTextAnimation  text="Services" fontSize={font} textColor="red" /></span>
                <br />
                <span className="rstoftext">for Optimal Performance</span>
                <br />
                <span className="rstoftext">
                  <span
                    className="text-border highmasttextbg"
                    data-aos="flip-left"
                  >
                    in Sustainability Together
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* Boxes Section */}
        <section className="container" style={{backgroundColor:"transparent"}}>
        <div className="row">
          <div
            className="col-sm-3  mb-4 "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <div className="borderboxes box-inner ">
              <div className="box-title">
                <DirectionsBoatIcon />
                <h3>
                  Consultation & Assessment
                  <span style={{ color: "#E32226" }}></span>
                </h3>
              </div>
              <div className="box-content">
                Identifying client needs and evaluating the scope of work.
              </div>
            </div>
          </div>

          <div
            className="col-sm-3 mb-4 "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <div className="borderboxes box-inner">
              <DirectionsBoatIcon />
              <div className="box-title">
                <h3>Planning & Design</h3>
              </div>
              <div className="box-content">
                Crafting custom solutions with engineering expertise for
                efficiency.
              </div>
            </div>
          </div>

          <div
            className="col-sm-3 mb-4 "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="borderboxes box-inner">
              <DirectionsBoatIcon />
              <div className="box-title">
                <h3>
                  Execution & Repair
                  <span style={{ color: "#E32226" }}></span>
                </h3>
              </div>
              <div className="box-content">
                Skilled technicians carry out the repair, overhaul, or
                installation processes.
              </div>
            </div>
          </div>
          <div
            className="col-sm-3 mb-4 "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div className="borderboxes box-inner">
              <DirectionsBoatIcon />
              <div className="box-title">
                <h3>
                  Testing & Certification
                  <span style={{ color: "#E32226" }}></span>
                </h3>
              </div>
              <div className="box-content">
                Rigorous testing and certification ensure compliance with
                industry standards.
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
    
      <Servicesscroll />
      <Majorservice />
    </div>
  );
};

export default Service;
