import React, { useEffect } from "react";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import "aos/dist/aos.css";
import AOS from "aos"; // Ensure Aos is imported
import "./index.css";
import pointersimg from "../../assets/img/elements/retrofitpotrait.jpg";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import img24x7 from "../../assets/img/elements/24-hours.png";
import datawaveimg from "../../assets/img/elements/data-wave.png";
import ExpertiesComponent from "../../component/expertiestypes";
import retrofitparalaximg1 from "../../assets/img/elements/retrofitparalaximg1.jpg";
import retrofitparalaximg2 from "../../assets/img/elements/retrofitparalaximg2.jpg";
import retrofitparalaximg3 from "../../assets/img/elements/retrofitparalaximg3.jpg";
import Contactseection from "../../component/contactsection";

const Inspection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      mirror: true, 
      anchorPlacement: "top-bottom", 
    });
  }, []); // Add the dependency array to ensure it runs only once
  return (
    <div style={{backgroundColor:"#002C30"}}>
      <div className="container-fluid px-0">
        <section className="retrobanner servicesbanner  secOne2 ">
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-easing="ease-in-out"
              >
                <span className="rstoftext">Vessel Inspections </span>
                <br />
                <span className="rstoftext">Worldwide </span>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="Vessel inspections are comprehensive, reliable, professional, and cost-effective, ensuring maritime safety standards for a secure shipping future."
        />
        <ServicesPointers
          img={pointersimg}
          subheading="Support Services"
          name1="Complete Assessment:"
          name2="Extended Coverage:"
          name3="Reliability:"
          name4="Accuracy:"
          name5="Cost Savings:"
          pointername1=" Vessel inspections use significantly more expertise than basic surveys, ensuring thorough evaluation and reducing operational risks."
          pointername2="Inspections can cover multiple vessel types, minimizing frequent surveys and maintenance oversight needs."
          pointername3="Inspections resist operational gaps, delays, and compliance issues, ideal for complex maritime requirements."
          pointername4="Provide detailed assessments, reducing survey risks and ensuring safer vessel operations."
          pointername5="The expertise and comprehensive coverage of inspections can reduce operational risks by up to 80%."
        />
      </div>

      <ExpertiesComponent
        mainheading="Vessel Inspection Solutions"
        img1={retrofitparalaximg1}
        img2={retrofitparalaximg2}
        img3={retrofitparalaximg3}
        heading1="Maritime Expertise & Reliability"
        description1="Our vessel inspections offer several advantages like Comprehensive Coverage, Professional Accuracy"
        heading2="Extended Coverage for Savings"
        description2="Have a much broader scope, often covering multiple inspection types, reducing the need for frequent surveys and maintenance oversight."
        heading3="Built for Complex Requirements"
        description3="Are more resistant to operational gaps, compliance issues, and assessment challenges, making them ideal for the harsh maritime environment."/>
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

      {/* <div className="row ">
        <div
          className="col-sm-5 mx-auto card24x27parent card24bg "
          data-aos="flip-down"
        >
          <div className="pt-4 px-3 ">
            <img className="img24" src={img24x7}></img>
            <h3 className="heading">We Are Available</h3>
            <img className="datawaveimg" src={datawaveimg}></img>
            <p className="para">
              HighMast Marine Services provides 24/7 support to keep your
              vessels running smoothly, with assistance available across 50+
              global ports.
            </p>
          </div>
        </div>
      </div> */}
      <Contactseection />
    </div>
  );
};

export default Inspection;
