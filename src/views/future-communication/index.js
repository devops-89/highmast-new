import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointers from "../../assets/img/elements/Future.jpg";
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
import innovaphone from "../../assets/img/elements/future5.png";
import scrubberparalaximg2 from "../../assets/img/elements/future7.jpg";
import scrubberparalaximg3 from "../../assets/img/elements/future3.png";
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
                <span className="rstoftext">Future-Ready Communication </span>
                <br />
                <span className="rstoftext">for the Maritime Industry</span>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="Developed and Certified to Meet the Unique Challenges of the Maritime Industry."
        />
        <ServicesPointers
          img={pointers}
          subheading="Support Services"
          name1="Innovaphone Expertise:"
          name2="Voice and Video Connectivity:"
          name3="Advanced Alert Systems:"
          name4="Security Measures:"
          name5="Connected Communication:"
          pointername1="Skilled in delivering dependable communication networks with advanced backup systems for top performance."
          pointername2="Offers safe voice calls and video meetups for global discussions, even in tough conditions."
          pointername3="Offers real-time notifications and alarms for crew safety, integrating with emergency setups."
          pointername4="Provides strong data protection for all business interactions across the network."
          pointername5="Ensures seamless links between ships and onshore offices using cloud technology."
        />
        <Additinalservices
          mainheading="Core Skill Areas"
          img1={pendestal}
          img2={marinecrane}
          img3={bophandling}
          img4={gantry}
          text1="Exhaust Gas Regulation"
          text2="Carbon Emission Control"
          text3="Carbon Storage Technology"
          text4="Emission Reduction Support"
        />
        <ExpertiesComponent
          mainheading="Leading Emission Solutions"
          img1={innovaphone}
          img2={scrubberparalaximg2}
          img3={scrubberparalaximg3}
          heading1="Innovaphone VoIP Gateways"
          description1=" Highly durable, DNV-approved gateways designed for secure and reliable emission data tracking across vessels, ensuring continuous monitoring even in harsh marine conditions."
          heading2="Sound Systems for Onboard Announcements"
          description2="External speakers and text alerts for employees/passengers, integrated via PBX for emission status broadcasts, ensuring quick responses to sulfur/carbon compliance issues."
          heading3="Wireless Solutions for Mobile Emission Checks"
          description3="Sturdy, long-battery handsets with IP-DECT and WiFi, including EX versions for explosive areas, allowing portable teams to track and report CO2 levels in real-time toward 2050 targets."
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