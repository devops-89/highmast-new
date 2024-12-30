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
import Contactseection from "../../component/contactsection";

const Scrubber = () => {
  return (
    <div style={{backgroundColor:"#002C30"}}>
      <div className="container-fluid px-0">
        <section className="scrubberbanner servicesbanner  secOne2 ">
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <span className="rstoftext">SCRUBBER AND</span>
                <br />
                <span className="rstoftext">CCS COMMISSIONING</span>
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
          name1="Carbon Sequestration:"
          name2="CCS Process:"
          name3="Enhanced Oil Recovery (EOR):"
          name4="Carbon Utilization:"
          name5="Onboard CO2 Utilization:"
          pointername1="Expertise in storing CO2 underground in geological formations like oil reservoirs or saline aquifers."
          pointername2="Securely trapping CO2 underground to prevent atmospheric release through carbon capture and storage."
          pointername3="Utilizing CO2 injection to boost oil production in reservoirs."
          pointername4="Converting captured CO2 into valuable products like chemicals, fuels, and plastics."
          pointername5="Leveraging captured CO2 for onboard processes or enhancing oil recovery, if applicable."
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

export default Scrubber;
