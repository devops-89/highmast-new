import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointersimg from "../../assets/img/elements/scrubberpotrait.jpg";
import Additinalservices from "../../component/additionalservices";
import pendestal from "../../assets/img/elements/crane.png";
import marinecrane from "../../assets/img/elements/underwater-crane.png";
import bophandling from "../../assets/img/elements/bophandling.png";
import gantry from "../../assets/img/elements/gantry-crane.png";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import ExpertiesComponent from "../../component/expertiestypes";
import scrubberparalaximg1 from "../../assets/img/elements/scrubberparalaximg1.jpg";
import scrubberparalaximg2 from "../../assets/img/elements/scrubberparalaximg2.jpg";
import scrubberparalaximg3 from "../../assets/img/elements/scrubberparalaximg3.jpg";

const Scrubber = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="scrubberbanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span className="">SCRUBBER AND </span>{" "}
                </p>
                <p className="rstoftext">
                  <span className="">CCS COMMISIONING</span>{" "}
                </p>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="Reducing sulfur and carbon emissions from vessels is key to meeting the 2050 zero-emission target.
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
        <Additinalservices
        mainheading="EXPERTISE DOMAIN"
          img1={pendestal}
          img2={marinecrane}
          img3={bophandling}
          img4={gantry}
          text1="EGCS"
          text2="CCS"
          text3="CO2"
          text4="UREA"
        />
        <ExpertiesComponent
          mainheading="Emission Control Leadership"
          img1={scrubberparalaximg1}
          img2={scrubberparalaximg2}
          img3={scrubberparalaximg3}
          heading1="Achieving 2050 Zero Emissions"
          description1=" Controlling the Sulphur and Carbon emissions from the vessels for the future to achieve the 2050 zero emission deadline.
"
          heading2="Advanced CCS Technology for CO2 Capture"
          description2="Our CCS technologies have the potential to capture a significant portion of CO2 emissions from ship exhaust gases."
          heading3="Utilizing Captured CO2 for Industrial Processes"
          description3="Captured carbon dioxide can be used as a feedstock for various industrial processes, such as enhanced oil recovery (EOR)"
        />

        <Testimonials
          avtarimg={avtarimg}
          dwnquote={dwnquote}
          upquote={upquote}
          para=" Great work from a designer in the Dribbble community; your
                  best resource to discover and connect with designers
                  worldwide. Testimonials Web DesignTestimonial
                  GraphicTestimonial Ads"
          para2=" Great work from a designer in the Dribbble community; your
                  best resource to discover and connect with designers
                  worldwide. Testimonials Web DesignTestimonial
                  GraphicTestimonial Ads"
          para3=" Great work from a designer in the Dribbble community; your
                  best resource to discover and connect with designers
                  worldwide. Testimonials Web DesignTestimonial
                  GraphicTestimonial Ads"
          name1="Rohit"
          name2="Simren"
          name3="Nidhi"
        />
      </div>
    </div>
  );
};

export default Scrubber;
