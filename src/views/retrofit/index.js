import React from "react";
import ServicesDescription from "../../component/servicesdescription";
import { color } from "framer-motion";
import ServicesPointers from "../../component/servicespointers";
import "aos/dist/aos.css";
import "./index.css";
import pointersimg from "../../assets/img/elements/engineoverhaulinpotrait.jpg";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import img24x7 from "../../assets/img/elements/24-hours.png";
import datawaveimg from "../../assets/img/elements/data-wave.png";
import ExpertiesComponent from "../../component/expertiestypes";
import twofourstroke from "../../assets/img/elements/2-stroke-4stroke.jpg";
import MEMCengine from "../../assets/img/elements/ME&MCengine.jpg";
import duelfuel from "../../assets/img/elements/duelfuelengine.jpg";

const Retrofit = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="retrobanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span className=""> RETROFIT LED POWER </span>{" "}
                </p>
                <p className="rstoftext">
                  <span className=""> SAVING SOLUTIONS </span>{" "}
                </p>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="LED lights are energy-efficient, long-lasting, durable, and cost-effective, reducing greenhouse gas emissions for a sustainable future.
"
        />
        <ServicesPointers
          img={pointersimg}
          subheading="Support Services"
          name1="Engine Types: "
          name2="Supported Brands:"
          name3="Specialized Engineers:"
          name4="Additional Services: "
          name5="Geographic Reach: "
          pointername1=" Expertise in overhauling 2-stroke and 4-stroke engines, including ME & MC types and dual-fuel engines."
          pointername2="MAN B&W, Wartsila, Mitsubishi, Hyundai, Doosan, STX, MTU, Yanmar, Cummins, Daihatsu, Caterpillar."
          pointername3="Service engineers for Turbo Chargers and Governors."
          pointername4="Multi-stage pumps, cargo pumps, and tank cleaning machines."
          pointername5="Available at Singapore, Malaysia anchorage, and along the Indian coast."
        />
      </div>

      <ExpertiesComponent
        mainheading="Expertise In Engine Type"
        img1={twofourstroke}
        img2={MEMCengine}
        img3={duelfuel}
        heading1="2-Stroke & 4-Stroke Engines"
        description1="Reliable power solutions offering versatility for various marine applications."
        heading2=" ME & MC Type Engines"
        description2="Advanced engine types known for high performance and efficiency in maritime operations."
        heading3="Dual Fuel Engines"
        description3="Eco-friendly propulsion systems enabling reduced emissions and greater fuel flexibility."
      />
      <Testimonials
        avtarimg={avtarimg}
        dwnquote={dwnquote}
        upquote={upquote}
        para="      Great work from a designer in the Dribbble community; your
                  best resource to discover and connect with designers
                  worldwide. Testimonials Web DesignTestimonial
                  GraphicTestimonial Ads"
        para2="      Great work from a designer in the Dribbble community; your
                  best resource to discover and connect with designers
                  worldwide. Testimonials Web DesignTestimonial
                  GraphicTestimonial Ads"
        para3="      Great work from a designer in the Dribbble community; your
                  best resource to discover and connect with designers
                  worldwide. Testimonials Web DesignTestimonial
                  GraphicTestimonial Ads"
        name1="Rohit"
        name2="Simren"
        name3="Nidhi"
      />

      {/* <div className="row ">
        <div
          className="col-sm-5 mx-auto card24x27parent card24bg "
          data-aos="flip-down"
        >
          <div className="pt-4 px-3 ">
            <img className="img24" src={img24x7}></img>
            <h3 className="heading">We Are Available</h3>
            <img className="datawaveimg" src={datawaveimg}></img>
            <p className="para">
              HighMast Marine Services provides 24/7 support to keep your
              vessels running smoothly, with assistance available across 50+
              global ports.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Retrofit;
