import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import "./index.css";

// import { red } from "@mui/material/colors";
import Services from "../../component/services-section";
import Aboutsection from "../../component/about";
import FAQSection from "../../component/faq";
import highlightbgvideo from "../../assets/img/elements/Higlightedbgvideo.mp4";
import "aos/dist/aos.css";
import AOS from "aos";
import Servicesscroll from "../../component/service-scroll";
import Partnershipsection from "../../../component/partnership";
import ScrollAnimation from "../../component/greenimpactglance";
import Contactseection from "../../component/contactsection";
import AnoetherSection from "../../component/commitments";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What does HighMast Marine specialize in?",
      answer:
        "We deliver everything from ship management, engine overhauls, and any environmentally friendly technology such as scrubbers and nitrogen generators.",
    },
    {
      id: 2,
      question: "Can you provide spare parts and equipment?",
      answer:
        "You bet! We supply spare parts, including valves, pumps, and specialized green tech, which keeps your fleet afloat. Besides, we supply anything from spare parts to advanced equipment like FGSS and cryogenic piping.",
    },
    {
      id: 3,
      question: "How do you incorporate sustainability in your services?",
      answer:
        "We bring in green energy solutions like FGSS, cryogenic systems, and more to make shipping eco-friendlier! We're all about reducing emissions with carbon capture systems and energy-efficient tech.",
    },
    {
      id: 4,
      question: "Do you work 24/7?",
      answer:
        "Yes, we provide round-the-clock services to meet your maritime needs.",
    },
  ];

  return (
    <div>
    
      {/* <div className="container-fluid banner">
        <div className="container  ">
          <div className="row ">
            <div className="col-sm-10 banner-text">
              <Typography
                variant="h1"
                className="heading"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                High Mast Marine Services,
              </Typography>
              <Typography
                variant="h1"
                className="heading"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Together with <span style={{ color: "red" }}>ContiOcean</span>{" "}
                Environment Global Leads
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bgcolorblue">
        <div className="container allpadding  ">
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", fontSize: "25px" }}
                >
                  High Mast Marine Services, Together with ContiOcean
                  Environment Global, Leads the Way in Green Marine Innovation
                  for a Sustainable Future. By Pioneering Advanced Green
                  Technologies, we are committed to reducing environmental
                  impact and using a more responsible approach to global marine
                  operations.
                </Typography>

                <div className="scrolldwn1">
                  <span className="scrollbox"></span>
                  <small className="scroll-down-small ">Scroll & Explore</small>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div> */}
      <Services />
      <Servicesscroll />
      {/* <Servicesscroll/> */}
      {/* <Greenimpactglance/> */}
      <ScrollAnimation />
      <AnoetherSection/>

      <Partnershipsection />
      <Contactseection />
      {/* <MovieScroll/> */}

      {/* <div
        className="container-fluid   "
        style={{
          position: "relative",
          padding: "0px",
          backgroundColor: "#0c0b0b69",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={highlightbgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container allpadding " data-aos="zoom-in-up">
          <div className="row">
            <div className="col-sm-12 mx-auto">
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "50px",
                    textAlign: "left",
                    marginBottom: "4rem",
                    fontFamily: "roboto",
                    color: "#fff",
                  }}
                  data-aos="fade-right" // Animation for heading from the right
                >
                  High<span style={{ color: "red" }}>Mast</span> Marine Services
                  Pte Ltd
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "poppins",
                    textAlign: "left",
                  }}
                >
                  Is Proud To Be Partnered With{" "}
                  <span
                    className="highlight-text" // Apply custom CSS class for highlighting
                    style={{
                      fontSize: "40px",
                      color: "red",
                      textTransform: "uppercase",
                    }}
                    data-aos="fade-left" // Animation from left for this text
                  >
                    Contiocean
                  </span>{" "}
                  Environment Global,{" "}
                  <span
                    className="highlight-text"
                    style={{
                      fontSize: "40px",
                      color: "red",
                      textTransform: "uppercase",
                    }}
                    data-aos="fade-right" // Animation from right for this text
                  >
                    China and wavelength
                  </span>{" "}
                  technologies,{" "}
                  <span
                    className="highlight-text"
                    style={{
                      fontSize: "40px",
                      color: "red",
                      textTransform: "uppercase",
                    }}
                    data-aos="fade-left" // Animation from left for this text
                  >
                    Norway / HAMBURG
                  </span>
                  , For Bringing{" "}
                  <span
                    className="highlight-text"
                    style={{
                      fontSize: "40px",
                      color: "green",
                      textTransform: "uppercase",
                    }}
                    data-aos="fade-right" // Animation from right for this text
                  >
                    Green Technology
                  </span>
                  To Ship Owners/Managers
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </div> */}
      {/* 
      <Aboutsection />
      <FAQSection faqData={faqData} /> */}
    </div>
  );
};

export default Home;
