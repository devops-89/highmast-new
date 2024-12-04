import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointersimg from "../../assets/img/elements/powersupervisionpotrait.jpg";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import ExpertiesComponent from "../../component/expertiestypes";
import powersupparalaximg1 from "../../assets/img/elements/powersupparalaximg1.jpg";
import powersupparalaximg2 from "../../assets/img/elements/powersupparalaximg2.jpg";
import powersupparalaximg3 from "../../assets/img/elements/powersupparalaximg3.jpg";
import Contactseection from "../../component/contactsection";

const Projectsupervision = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section className="projectsupervisionbanner servicesbanner  secOne2 ">
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <span className="rstoftext">Project Supervision</span>
                <br />
                <span className="rstoftext">Shipbuilding & Repairs</span>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription servicesdescription="Our conversion projects and designs are expertly managed from our offices in Norway and China." />
        <ServicesPointers
          img={pointersimg}
          subheading="Support Services"
          name1="EU ETS 2024:"
          name2="Emission Scope:"
          name3="GHG Inclusion:"
          name4="Compliance Cost:"
          name5="Administrative Complexity:"
          pointername1="First year of EU ETS assessment with EUAs due for surrender in 2025."
          pointername2="40% of emissions in scope in 2024, increasing to 100% over time."
          pointername3="Methane (CH4) and Nitrous Oxide (N2O) emissions to be included in 2026."
          pointername4="Based on the EU emissions allowance (EUA) spot price of €/tCO2."
          pointername5="EU ETS introduces additional tasks for managing and surrendering allowances."
        />
        <ExpertiesComponent
          mainheading="Ship Repair Management"
          img1={powersupparalaximg1}
          img2={powersupparalaximg2}
          img3={powersupparalaximg3}
          heading1="Global Conversion Projects"
          description1="Conversion projects and designs from our office in Norway/ China."
          heading2="Comprehensive Project Management"
          description2="Planning, Initiation, Execution, Monitoring, and Closing of a Project by Our Engineers.
"
          heading3="On-Time, On-Budget Execution"
          description3="Completion of all work on time and within budget"
        />

        <Testimonials
          avtarimg={avtarimg}
          dwnquote={dwnquote}
          upquote={upquote}
          para=" HighMast Marine’s knowledge of hydraulic systems is second to none. Their team overhauled our system efficiently, ensuring everything worked perfectly. They even helped with complex troubleshooting and offered solid, practical advice. Truly a top-notch service provider!"
          para2="From CO2 capture to managing emissions, HighMast Marine helped us navigate new regulations with ease. Their guidance was clear, and their expertise in CCS and emission management was invaluable. With their support, we’ve made our operations greener and more compliant than ever before."
          para3="Our experience with HighMast Marine during our EEXI retrofit project was incredible! From the initial consultation to project completion, their team’s technical guidance was spot on. They handled everything with professionalism, making sure we adhered to regulations while optimizing our operations for fuel savings."
          name1="K. Reddy"
          name2="Manish Parekh"
          name3="S. Gaur"
        />
      </div>
      <Contactseection />
    </div>
  );
};

export default Projectsupervision;
