import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import "./index.css";
import "aos/dist/aos.css";


import Aboutsection from "../../component/about";
import FAQSection from "../../component/faq";

import Servicesscroll from "../../component/service-scroll";

import ScrollAnimation from "../../component/greenimpactglance";
import Contactseection from "../../component/contactsection";
import AnoetherSection from "../../component/commitments";
import Ourclients from "../../component/our-clients";
import Services from "../../component/services-section";
import Commitsmentcomponent from "../../component/commitments";

const Home = () => {


  return (
    <div>
      <Services/>
      <ScrollAnimation />
      {/* <AnoetherSection /> */}
      <Commitsmentcomponent/>
      <Servicesscroll />
    {/* <Trialservices/> */}

      <Ourclients />
      <Contactseection />
    </div>
  );
};

export default Home;
