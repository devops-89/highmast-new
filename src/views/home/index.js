import React, { useEffect } from "react";

import "./index.css";


import Servicesscroll from "../../component/service-scroll";


import ScrollAnimation from "../../component/greenimpactglance";
import Contactseection from "../../component/contactsection";
// import Ourclients from "../../component/our-clients";
import Commitsmentcomponent from "../../component/commitments";
import Homepagebanner from "../../component/homebanner";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   
  
  return (
   
    <div>
       <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="/header/Header3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Homepagebanner />
      <ScrollAnimation />
      <Commitsmentcomponent />
     
      <Servicesscroll />
      {/* <Ourclients /> */}
      <Contactseection />
    </div>
 
  );
};

export default Home;
