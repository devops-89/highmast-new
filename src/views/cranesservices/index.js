import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointersimg from "../../assets/img/elements/Craneservice2ndimg.jpg";
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
import majorrepairservice from "../../assets/img/elements/majorrepair&service.jpg";
import craneinstalation from "../../assets/img/elements/craneinstallation.jpg";
import inspectionandtesting from "../../assets/img/elements/inspectionandtesting.jpg";

const CranesServices = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="cranebanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span className=""> Crane Service </span>{" "}
                </p>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="Specialized crane repair, inspection, installation, and load testing for safe, efficient operations.
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
          img1={pendestal}
          img2={marinecrane}
          img3={bophandling}
          img4={gantry}
          text1="Repair"
          text2="Recondition"
          text3="Overhaul"
          text4="Renew"
        />
        <ExpertiesComponent
          mainheading="Complete Crane Care"
          img1={majorrepairservice}
          img2={craneinstalation}
          img3={inspectionandtesting}
          heading1="Major Repairs & Service"
          description1="Complete crane repair solutions ensuring top performance and reliability.
"
          heading2="Crane Installation & Removal"
          description2="Specialized crane installation and removal with minimal operational impact."
          heading3="Inspection & Testing"
          description3="Comprehensive inspection and testing for safety, backed by certifications."
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

export default CranesServices;
