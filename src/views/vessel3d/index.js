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
import vesselsparalaximg1 from "../../assets/img/elements/vesselsparalaximg1.jpg";
import vesselsparalaximg2 from "../../assets/img/elements/vesselsparalaximg2.jpg";
import vesselsparalaximg3 from "../../assets/img/elements/vesselsparalaximg3.jpg";
import Contactseection from "../../component/contactsection";

const Vessels3d = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section

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
          name1="EEXI Value Calculation: "
          name2="EEXI Comparison:"
          name3="Generate Technical File:"
          name4="MM Submission:"
          name5="Seamless Process:"
          pointername1="Use our digital tool to calculate the EEXI value for your vessel."
          pointername2="Compare the required and attained EEXI values to ensure compliance."
          pointername3="Automatically generate the EEXI technical file for documentation."
          pointername4="Submit the generated technical file and OMM for approval."
          pointername5="Simplify your EEXI compliance process with our efficient, digital solution."
        />
        <ExpertiesComponent
          mainheading="3D Scanning & Retrofit"
          img1={vesselsparalaximg1}
          img2={vesselsparalaximg2}
          img3={vesselsparalaximg3}
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
          para=" Our experience with HighMast Marine during our EEXI retrofit project was incredible! From the initial consultation to project completion, their team’s technical guidance was spot on. They handled everything with professionalism, making sure we adhered to regulations while optimizing our operations for fuel savings."
          para2=" When it comes to ship repairs, HighMast Marine is hands down the best! Their prompt and professional service saved us so much downtime. Their engineers are knowledgeable and extremely efficient. Every repair was handled with precision, making it an absolute pleasure working with them."
          para3="The LED power-saving retrofit by HighMast Marine transformed our energy consumption. Their team didn’t just install LED lights—they explained the benefits and ensured we saw a dramatic reduction in our operational costs. Excellent service, excellent results!"
          name1="S. Gaur"
          name2="Mohammad Ali"
          name3="R. Kumar"
        />
      </div>
      <Contactseection />
    </div>
  );
};

export default Vessels3d;
