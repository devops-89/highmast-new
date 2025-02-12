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

const Retrofit = () => {
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
                <span className="rstoftext">RETROFIT LED POWER</span>
                <br />
                <span className="rstoftext">SAVING SOLUTIONS</span>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <ServicesDescription
          servicesdescription="LED lights are energy-efficient, long-lasting, durable, and cost-effective, reducing greenhouse gas emissions for a sustainable future.
"
        />
        <ServicesPointers
          img={pointersimg}
          subheading="Support Services"
          name1="Energy Efficiency:"
          name2="Long Lifespan:"
          name3="Durability:"
          name4="Safety:"
          name5="Cost Savings:"
          pointername1="LED lights use significantly less power than incandescent or halogen lights, conserving fuel and reducing operational costs."
          pointername2="LEDs can last up to 50,000 hours, minimising frequent replacements and maintenance needs."
          pointername3="LEDs resist shock, vibration, and corrosion, ideal for harsh marine environments."
          pointername4="Emit minimal heat, lowering fire risk and making them safer to handle."
          pointername5="The durability and long lifespan of LEDs can reduce maintenance costs by up to 80%."
        />
      </div>

      <ExpertiesComponent
        mainheading="LED Performance Solutions"
        img1={retrofitparalaximg1}
        img2={retrofitparalaximg2}
        img3={retrofitparalaximg3}
        heading1="Energy Efficiency & Durability"
        description1=" Our LED lights offer several advantages like  Energy Efficiency, Durability"
        heading2="Extended Lifespan for Savings"
        description2="Have a much longer lifespan, often lasting up to 50,000 hours, reducing the need for frequent replacements and maintenance."
        heading3="Built for Harsh Environments"
        description3="Are more resistant to shock, vibration, and corrosion, making them ideal for the harsh climate."
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

export default Retrofit;
