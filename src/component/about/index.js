import React, { useEffect, useRef, useState } from "react";
import { Typography, Container, Stack} from "@mui/material";
// import gsap from "gsap";
import AOS from "aos";
import ScrollTrigger from "gsap/ScrollTrigger";
import img24x7 from "../../assets/img/elements/24-hours.png";
import datawaveimg from "../../assets/img/elements/data-wave.png";
import abouthighmastimg from "../../assets/img/elements/abouthighmastimg.jpg";
import Grid2 from '@mui/material/Grid2';


import "./index.css";

// gsap.registerPlugin(ScrollTrigger);

const Aboutsection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  
   useEffect(()=>{
       AOS.init({
         duration: 1000, 
         mirror: true, 
         anchorPlacement: "top-bottom", 
       })
     },[]);
    

  // useEffect(() => {
  //   const gsapContext = gsap.context(() => {
  //     if (sectionRef.current) {
  //       gsap.fromTo(
  //         sectionRef.current,
  //         { opacity: 0 },
  //         { opacity: 1, duration: 1 }
  //       );
  //     }
  //   }, sectionRef);

  //   return () => {
  //     gsapContext.revert();
  //   };
  // }, []);

  // Determine screen size
  const screenWidth = window.innerWidth;

  // Define font size ranges for different screen sizes
  const fontSizes = {
    mobile: { min: 40, max: 100 }, // 0px - 768px
    tablet: { min: 80, max: 100 }, // 768px - 1024px
    large: { min: 100, max: 150 }, // 1024px - 1440px
    desktop: { min: 150, max: 300 }, // > 1440px
  };

  // Adjust font size based on screen size
  let fontSizeValue;
  if (screenWidth <= 768) {
    fontSizeValue = 60;
  } else if (screenWidth > 768 && screenWidth <= 1024) {
    fontSizeValue = Math.min(
      fontSizes.tablet.max,
      Math.max(fontSizes.tablet.min, 85 - Math.cos(scrollY / 300) * 10)
    );
  } else if (screenWidth > 1024 && screenWidth <= 1440) {
    fontSizeValue = Math.min(
      fontSizes.large.max,
      Math.max(fontSizes.large.min, 120 - Math.cos(scrollY / 300) * 20)
    );
  } else {
    fontSizeValue = Math.min(
      fontSizes.desktop.max,
      Math.max(fontSizes.desktop.min, 150 - Math.cos(scrollY / 400) * 30)
    );
  }

  return (
    <div  className="container-fluid " style={{backgroundColor:  "#4C8C91",paddingBottom:"20px"}}>
     
        <Stack data-aos="flip-left" sx={{justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{fontSize:{xs:"40px",md:"120px"}, py:{xs:1,md:2}, fontWeight: 'bold', color: 'white' }} >
  Why High<span style={{ color: 'red' }}>Mast?</span>
</Typography>
        </Stack>
   
         {/* start */}
         <Container>
        <Grid2 container rowGap={2} columnGap={4} sx={{my:10,}}>
          <Grid2 size={{md:12,lg:4}} >
            <Stack sx={{justifyContent:"center",alignItems:"center"}}>
          <img
                    
                    style={{width:"100%",height:"100%",overflow:"hidden",borderRadius:"4px"}}
                    src={abouthighmastimg}
                    data-aos="zoom-in-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  />
                  </Stack>
          </Grid2>
          <Grid2 size={{md:12,lg:7}} >
            <Stack spacing={1} sx={{p:2,border:"2px solid white",borderRadius:2}}>
          <Typography component="p" className="para" sx={{fontSize:{sm:"",md:"",lg:"18px"},color:"white"}}  data-aos="fade-left"
                  data-aos-mirror="true">
                    At HighMast Marine Services Pte Ltd, sustainability drives
                    everything we do. Founded in 2023 by a team with over 20 years
                    of ship management expertise, we are redefining maritime
                    operations through innovative green technology. Based in
                    Singapore, we deliver world-class marine solutions focused on
                    efficiency, quality, and environmental responsibility.
                  </Typography>
                  <br />
                  <Typography component="p" className="para" sx={{fontSize:{sm:"",md:"",lg:"18px"},color:"white"}}  data-aos="fade-left"
                  data-aos-mirror="true">
                    In partnership with ContiOcean Environment Global, China, we
                    bring cutting-edge sustainable technologies to the maritime
                    industry. Our advanced systems, including Exhaust Gas Cleaning
                    Systems (EGCS) and Carbon Capture & Solidification (CCS), set
                    new standards for emission reduction and fuel efficiency,
                    helping shipowners navigate the complexities of a changing
                    world.
                  </Typography>
                  <br />
                  <Typography component="p" className="para" sx={{fontSize:{sm:"",md:"",lg:"18px"},color:"white"}}  data-aos="fade-left"
                  data-aos-mirror="true">
                    With over 50 successful dry dockings and a 100% commitment to
                    emission-free energy, HighMast combines expertise with
                    eco-friendly innovation. Certified to ISO 9001, ISO 14001, and
                    ISO 45001 standards, we deliver unparalleled quality and
                    safety assurance, offering 24/7 support across running smoothly and sustainably.
                  </Typography>
                  </Stack>
          </Grid2>
            
        </Grid2>
        </Container>
        {/* end */}
      
    </div>
  );
};

export default Aboutsection;