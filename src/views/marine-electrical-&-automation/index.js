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

import testingrepair from "../../assets/img/elements/testing&repair.jpg";
import marineparalaximg1 from "../../assets/img/elements/marineparalaximg1.jpg";
import marineparalaximg2 from "../../assets/img/elements/marineparalaximg2.jpg";
import Contactseection from "../../component/contactsection";

const MarineElectricalandAutomation = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        <section className="marinebanner servicesbanner  secOne2 ">
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <span className="rstoftext">Marine Electrical</span>
                <br />
                <span className="rstoftext"> & Automation</span>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="Electrical and mechanical fault rectification for ship machinery ensures smooth operations and safety..
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
          mainheading="ADVANCE SOLUTIONS"
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
          mainheading="Electrical & Mechanical Solutions"
          img1={marineparalaximg1}
          img2={marineparalaximg2}
          heading1="Electrical Fault Rectification"
          description1="Ships machinery-related electrical/mechanical faults rectification."
          heading2="Mechanical Fault Investigation"
          description2="Machinery failure investigation and assist in troubleshooting by our engineers"
          excludeThirdParallax={true}
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

export default MarineElectricalandAutomation;
