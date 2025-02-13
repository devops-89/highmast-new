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
    <div style={{backgroundColor:"#002C30"}}>
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
          name1="Fault Rectification: "
          name2="Troubleshooting Assistance:"
          name3="Sensor Malfunction Resolution:"
          name4="Communication & Power Issues: "
          name5="Mechanical Integrity: "
          pointername1="Specialized in resolving electrical and mechanical faults in ship machinery to ensure seamless operations."
          pointername2=" Expertise in investigating machinery failures and guiding resolution through advanced diagnostic techniques."
          pointername3="Addressing issues caused by software glitches, bugs, or errors leading to unexpected behavior."
          pointername4=" Resolving communication failures and power supply disruptions critical for system functionality."
          pointername5="Addressing wear and tear in components to maintain machinery performance and reliability."
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

export default MarineElectricalandAutomation;
