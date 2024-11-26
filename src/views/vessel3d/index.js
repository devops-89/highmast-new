import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointersimg from "../../assets/img/elements/vessels3dpotrait.jpg";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import ExpertiesComponent from "../../component/expertiestypes";
import designmodification from "../../assets/img/elements/design&modification.jpg";
import hydraulicrepair from "../../assets/img/elements/hydraulicrepairs.jpg";
import hydrauliccomponent from "../../assets/img/elements/hydrauliccomponent.jpg";

const Vessels3d = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="vesselbanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span className="">Vessel 3D scanning </span>{" "}
                </p>
                <p className="rstoftext">
                  <span className="">& Production design </span>{" "}
                </p>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription servicesdescription="3D scanning for retrofit installations allows precise measurements during dry dock or while sailing, ensuring accurate design and installation." />
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
        <ExpertiesComponent
          mainheading="3D Scanning & Retrofit"
          img1={designmodification}
          img2={hydraulicrepair}
          img3={hydrauliccomponent}
          heading1="Advanced 3D Scanning"
          description1="3D Scanning for our retrofit installations at dry dock and during sailing."
          heading2="Vortex Elimination Technology"
          description2="HVAF Vortex elimination fin is a kind of ship propeller hydrodynamic energy-saving device for eliminating propeller hub vortex energy loss .
"
          heading3="Fuel-Saving EEXI Solutions"
          description3="Our EEXI retrofit solutions with considerable fuel saving for owners and charters"
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

export default Vessels3d;
