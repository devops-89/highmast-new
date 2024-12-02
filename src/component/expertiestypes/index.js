import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import "./index.css";


const ExpertiesComponent = (props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Smooth scrolling only in browsers that support it
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);
 

  return (
    <div className="container-fluid px-0 ">
      <div data-aos="fade-down" data-aos-mirror="true">
        <h2 className="subheading headingcenter ">{props.mainheading}</h2>
      </div>
      {/* First Parallax Section */}
      <Parallax
        bgImage={props.img1}
        strength={200}
        className="expertiseparallax-container"
      >
        <div className="expertiseoverlay"></div>
        <div className="expertisecontent container">
          <h2>{props.heading1}</h2>
          <p>{props.description1}</p>
        </div>
      </Parallax>

      {/* Additional Parallax Sections */}
      <Parallax
        bgImage={props.img2}
        strength={250}
        className="expertiseparallax-container"
      >
        <div className="expertiseoverlay"></div>
        <div className="expertisecontent container">
          <h2>{props.heading2}</h2>
          <p>{props.description2}</p>
        </div>
      </Parallax>
      {!props.excludeThirdParallax && (
        <Parallax
          bgImage={props.img3}
          strength={300}
          className="expertiseparallax-container"
        >
          <div className="expertiseoverlay"></div>
          <div className="expertisecontent container">
            <h2>{props.heading3}</h2>
            <p>{props.description3}</p>
          </div>
        </Parallax>
      )}
    </div>
  );
};

export default ExpertiesComponent;
