import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointersimg from "../../assets/img/elements/marineoffshorepotrait.jpg";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import ExpertiesComponent from "../../component/expertiestypes";
import pipingwrks from "../../assets/img/elements/pipingwrks.jpg";
import mechanical from "../../assets/img/elements/mechanicalwrk.jpg";
import completesolution from "../../assets/img/elements/completesolution.jpg";

const Amp = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="ampbanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span className="">AMP SOLUTIONS </span>{" "}
                </p>
                <p className="rstoftext">
                  <span className="">AND VDF  RETROFIT</span>{" "}
                </p>
          
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription servicesdescription="Alternate marine power and variable drive frequency are advanced anti-pollution solutions for ships and ports." />
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
          mainheading="Offshore & Marine Maintenance"
          img1={pipingwrks}
          img2={mechanical}
          img3={completesolution}
          heading1="Piping Works"
          description1="Flow meter installation, copper-nickel & SS pipe fabrication, low-temperature pipe work, and manifold spool fabrication."
          heading2="Mechanical Works"
          description2="Mooring and windlass brake testing, roller overhauling, valve seat ring renewal."
          heading3="Complete Solutions"
          description3=" HighMast’s end-to-end piping and mechanical services ensure safe and efficient operations."
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

export default Amp;
