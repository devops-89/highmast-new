import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointersimg from "../../assets/img/elements/marineautomationpotrait.jpg";
import Additinalservices from "../../component/additionalservices";
import Renew from "../../assets/img/elements/recycle-sign.png";
import overhaulimg from "../../assets/img/elements/technician.png";
import recondition from "../../assets/img/elements/transport.png";
import repair from "../../assets/img/elements/mechanic.png";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import ExpertiesComponent from "../../component/expertiestypes";
import rewindingservices from "../../assets/img/elements/rewindingservices.jpg";
import testingrepair from "../../assets/img/elements/testing&repair.jpg";
import troubleshooting from "../../assets/img/elements/troubleshooting&diagonastic.jpg";

const MarineElectricalandAutomation = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="marinebanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span className=""> Marine Electrical </span>{" "}
                </p>
                <p className="rstoftext">
                  <span className="">& Automation </span>{" "}
                </p>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="Comprehensive diagnostics, repair, and rewinding services for marine generators, motors, and control panels.
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
          img1={repair}
          img2={recondition}
          img3={overhaulimg}
          img4={Renew}
          text1="Repair"
          text2="Recondition"
          text3="Overhaul"
          text4="Renew"
        />
        <ExpertiesComponent
          mainheading="Rewinding & Testing"
          img1={troubleshooting}
          img2={rewindingservices}
          img3={testingrepair}
          heading1="Troubleshooting & Diagnostics"
          description1="Visuals of engineers inspecting electrical panels and marine control systems."
          heading2="Rewinding Services"
          description2="Images of motor coils, detailed rewinding workstations, and insulated components."
          heading3="Testing & Inspections"
          description3="Photos showing performance testing setups, safety checks, or electrical equipment under examination."
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
      </div>
    </div>
  );
};

export default MarineElectricalandAutomation;
