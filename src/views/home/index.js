import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import "./index.css";

import Services from "../../component/services-section";
import Aboutsection from "../../component/about";
import FAQSection from "../../component/faq";
import highlightbgvideo from "../../assets/img/elements/Higlightedbgvideo.mp4";
import "aos/dist/aos.css";
import Servicesscroll from "../../component/service-scroll";

import ScrollAnimation from "../../component/greenimpactglance";
import Contactseection from "../../component/contactsection";
import AnoetherSection from "../../component/commitments";
import Ourclients from "../../component/our-clients";

const Home = () => {
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
      <Services />
      <ScrollAnimation />
      <AnoetherSection />
      <Servicesscroll />

      <Ourclients />
      <Contactseection />
    </div>
  );
};

export default Home;
