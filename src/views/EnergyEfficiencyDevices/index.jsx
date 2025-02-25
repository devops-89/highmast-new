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

const EnergyEfficiencyDevices = () => {
  return (
    <div style={{backgroundColor:"#002C30"}}>
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
        <ServicesDescription servicesdescription="Innovative marine propulsion devices optimize energy savings for efficient voyages." />
        <ServicesPointers
          img={pointersimg}
          subheading="Support Services"
          name1="Pre-Shrouded Vanes (PSV):"
          name2="Propeller-Trimming (PT):"
          name3="Hub Vortex Absorbed Fins (HAVF):"
          name4="Rudder Bulb (RB):"
          name5="Integrated Control System (ICS):"
          pointername1="Pre-Shrouded Vanes (PSV) employ a pre-spin effect to reduce propeller energy loss, achieving 3–7% energy savings while enhancing overall propulsion efficiency."
          pointername2="Propeller-Trimming (PT) reduces propeller load using a vortex elimination fin, saving 3–5% energy and lowering load by 10–15% for improved engine performance."
          pointername3="Hub Vortex Absorbed Fins (HAVF) capture lost hub vortex energy, delivering 2–5% energy savings and boosting overall hydrodynamic efficiency during vessel operation."
          pointername4="Rudder Bulb (RB) integrates a high-efficiency propeller with a vortex elimination fin, achieving 1–3% energy savings while optimizing blade load distribution."
          pointername5="The Integrated Control System (ICS) synchronizes all energy-saving devices, optimizing overall system performance and further enhancing vessel efficiency."
         
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

export default EnergyEfficiencyDevices;
