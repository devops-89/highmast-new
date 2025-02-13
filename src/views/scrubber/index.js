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
        para="Highmast marine ESD installation team was very proffesional @ the shipyard. The PVC retrofit was done to our satisfaction and time given."
        para2="We had a shut down in our dual fuel system , the problem was resolved with proper knowledge of the system , with required spares avalibility and stipulated time given in the discharge port."
        para3="HighMast Marine’s work on our scrubber and CCS commissioning was flawless. Their team guided us through the entire process with unmatched expertise and clarity."
        name1="R. Deshmukh - Sr Tech Supt"
        name2="Vinod S. - Fleet Mgr"
        name3="Anil G. - Fleet Mgr"
      />
      </div>
      <Contactseection />
    </div>
  );
};

export default Scrubber;
