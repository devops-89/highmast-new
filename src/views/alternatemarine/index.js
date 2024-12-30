import React from "react";
import "./index.css";
import ServicesDescription from "../../component/servicesdescription";
import ServicesPointers from "../../component/servicespointers";
import pointersimg from "../../assets/img/elements/ampotrait.jpg";
import Testimonials from "../../component/testimonials";
import avtarimg from "../../assets/img/elements/user.png";
import dwnquote from "../../assets/img/elements/dwnquote.png";
import upquote from "../../assets/img/elements/upquote.png";
import ExpertiesComponent from "../../component/expertiestypes";
import ampparalaximg1 from "../../assets/img/elements/ampparalaximg1.jpg";
import ampparalaximg2 from "../../assets/img/elements/ampparalaximg2.jpg";
import ampparalaximg3 from "../../assets/img/elements/ampparalaximg3.jpg";
import Contactseection from "../../component/contactsection";

const Amp = () => {
  return (
    <div  style={{backgroundColor:"#002C30"}}>
      <div className="container-fluid px-0">
        <section className="ampbanner servicesbanner  secOne2 ">
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <span className="rstoftext">AMP SOLUTIONS</span>
                <br />
                <span className="rstoftext">AND VDF RETROFIT</span>
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
          name1="LED:"
          name2="SCRUBBER AND CCS: "
          name3="AMP AND VDF: "
          name4="VESSEL 3 D SCANNING:"
          name5="PROJECT SUPERVISION:"
          pointername1="Low heat Emmision and low operating costs contributing to GHG emmisions for the future"
          pointername2="Controlling the Sulphur and Carbon emission from the vessels for the future to achieve the 2050 zero emission deadline"
          pointername3="forthcoming  anti-pollution measure which we can install on ships / ports  "
          pointername4="Entire designing by our naval architects till satisfactory commisioning"
          pointername5="Retrofit and conversions projects at our JV yards in China / Turkey"
        />
        <ExpertiesComponent
          mainheading="Clean Port Powering"
          img1={ampparalaximg1}
          img2={ampparalaximg2}
          img3={ampparalaximg3}
          heading1="Harnessing Shore Power"
          description1="Alternate marine power and Variable Drive Frequency  "
          heading2="Connecting to the Port Grid"
          description2="When a ship is docked at a port, it connects to the shore power grid instead of running its onboard diesel generators or Cold Ironing"
          heading3="Reducing Emissions at Dock"
          description3="Reduces emissions of pollutants and greenhouse gases, contributing to cleaner air quality around ports or Cold Ironing"
        />
        <Testimonials
          avtarimg={avtarimg}
          dwnquote={dwnquote}
          upquote={upquote}
          para="HighMast Marine’s expertise in engine overhauling was beyond impressive! The team’s professionalism, attention to detail, and timely delivery of services made our operations smoother than ever. Their guidance throughout the process, along with proactive troubleshooting, ensured the machinery was optimized perfectly. Truly a game-changer!"
          para2="We were struggling with our ship's electrical systems, but HighMast Marine’s team jumped in with unmatched knowledge. They diagnosed issues quickly, provided clear solutions, and were always available for support. Their timely, thorough repairs and efficiency made a world of difference!"
          para3="HighMast Marine’s work on our scrubber and CCS commissioning was flawless. Their team guided us through the entire process with unmatched expertise and clarity. They didn’t just fix the issue, they provided a comprehensive solution with ongoing support. We couldn’t have asked for better."
          name1="R. Deshmukh"
          name2="Vinod S. "
          name3="Anil G."
        />
      </div>
      <Contactseection />
    </div>
  );
};

export default Amp;
