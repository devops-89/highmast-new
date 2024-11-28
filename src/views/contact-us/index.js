import React, { useEffect } from "react";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import googlemapimg from "../../assets/img/elements/googlemapimg.png";
import globebannerimg from "../../assets/img/elements/globeimg.png";
import Contactaddress from "../../component/faq";
import Contactseection from "../../component/contactsection";

const Contactus = () => {
  const contactaddressdata = [
    {
      icon: <LocationOnIcon />,
      countryname: "SINGAPORE",
      answer:
        "We deliver everything from ship management, engine overhauls, and any environmentally friendly technology such as scrubbers and nitrogen generators.",

      addressright1: "GROUP HQ SINGAPORE",
      addressright2: "6th Floor, Zig Zag Building 70 Victoria St, London, SW1E",
      addressheading: "Head Office/Corporate Office",
      addressdetails: "Tong Eng Building, 101 Cecil Street, Unit 24-05",
      addresdetailspin: "Singapore 069533",
      
      email: "service@highmastmarine.com",
      phoneno: "+65 90487544 +65 91870596",

      img: googlemapimg,
      mapUrl: "https://www.google.com/maps?q=Tong+Eng+Building,+101+Cecil+Street,+Unit+24-05,+Singapore+069533&output=embed",
    },
    {
      icon: <LocationOnIcon />,
      countryname: "DUBAI",
      answer:
        "You bet! We supply spare parts, including valves, pumps, and specialized green tech, which keeps your fleet afloat. Besides, we supply anything from spare parts to advanced equipment like FGSS and cryogenic piping.",

      addressright1: "DUBAI OFFICE",
      addressright2: "6th Floor, Zig Zag Building 70 Victoria St, London, SW1E",
      addressheading: "Dubai Corporate Office",
      addressdetails: "Office 44, 1st Floor, Emirates Tower",
      addresdetailspin: "Hamdan Bin Md Street, Al Danah, Abu Dhabi UAE",
      email: "service@highmastmarine.com",
      phoneno: "+971 529069489",

      img: googlemapimg,
      mapUrl: "https://www.google.com/maps?q=Office+44,+1st+Floor,+Emirates+Tower,+Hamdan+Bin+Md+Street,+Al+Danah,+Abu+Dhabi+UAE&output=embed",

      
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration as needed
  }, []);
  return (
    <div>
      <section
     
        className="conatactbanner   secOne2   "
      >
        <div className="conatactbanneroverlay"></div>{" "}
        {/* Add this div for the overlay */}
        <div className="container contactmobilebaner bannercontainer">
          <div className="row">
            <div className="col-sm-8">
              <div
                className="section-title desktop"
                data-aos="fade-up"
                duration="200"
              >
                <h1>
                  <p className="rstoftext">
                    <span className="">Contact Us</span> Today
                  </p>
                  <p className="rstoftext">and Make Waves </p>
                  <p className="rstoftext">
                    <span
                      className="text-border highmasttextbg"
                      data-aos="flip-left"
                    >
                      in Sustainability
                    </span>{" "}
                  </p>
                  <p className="rstoftext">Together</p>
                </h1>
              </div>
              <section className="boxes">
                <div className="box-row one">
                  <div
                    className="box one"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="0"
                  >
                    <div className="box-inner">
                      <div className="box-title">
                        <h3>20<span style={{ color: "#E32226" }}>+</span></h3>
                      </div>
                      <div className="box-content">Years Experience</div>
                    </div>
                  </div>

                  <div
                    className="box two"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <div className="box-inner">
                      <div className="box-title">
                        <h3>24/7</h3>
                      </div>
                      <div className="box-content">Support</div>
                    </div>
                  </div>

                  <div
                    className="box three"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="600"
                  >
                    <div className="box-inner">
                      <div className="box-title">
                        <h3>
                        20<span style={{ color: "#E32226" }}>%</span>
                        </h3>
                      </div>
                      <div className="box-content">Ports Served</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-sm-4 ">
              <div data-aos="fade-left" data-aos-delay="300" className="contactimgparent">
                <img className="globebanerimg" src={globebannerimg}></img>
              </div>
            </div>
          </div>
        </div>
        {/* Boxes Section */}
      </section>
      {/* <FAQSection faqData={faqData} /> */}
      <Contactaddress  contactaddressdata={contactaddressdata}/>
      <Contactseection/>
    </div>
  );
};

export default Contactus;
