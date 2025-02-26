import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Teamimg1 from "../../assets/img/elements/Team1.jpg";
import Teamimg2 from "../../assets/img/elements/Team2.jpg";
import Teaming3 from "../../assets/img/elements/Team3.jpg";

import { Typography } from "@mui/material";

const Ourteam = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      mirror: true, 
      anchorPlacement: "top-bottom", 
    })
  })

  return (
    <div className="container-fluid team-main-container">
    <div className="container allpadding">
      <div data-aos="fade-right"  data-aos-offset="50">
        <h2 className="Ourteamheading headingcenter ">OUR TEAM</h2>
      </div>
      <div className="container allpadding pb-0">
        <div className="row align-items-center pb-5   ourrteamsection ourteamsectionist ">
          <div
            className="col-sm-5"
            data-aos="fade-left"
            data-aos-delay="500"
             data-aos-offset="100"
           
     
          
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "25px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "25px", // Slightly larger for tablets and small screens
                  md: "50px",
                  // Default size for medium and larger screens
                },
                textAlign: { xs: "center", lg: "left" },
                color: "#fff",
                textTransform: "uppercase",
              }}
              component="p"
            >
              Arbind Singh
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "red",
                fontSize: {
                  xs: "20px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "20px", // Slightly larger for tablets and small screens
                  md: "22px",
                },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Director & Founder
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#fff",
                textAlign: "justify",
                marginTop: "20px ",
                fontSize: {
                  xs: "13px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "1rem", // Slightly larger for tablets and small screens
                  md: "22px",
                },
              }}
            >
             Arbind Singh’s extensive 32 years of maritime experience makes him a highly valuable asset in the fields of ship management, new building projects, and major repairs and retrofits. His hands-on approach, combined with his entrepreneurial skills, fosters a collaborative environment that ensures projects are completed efficiently, on time, and within budget. This skillset allows him to navigate the complexities of maritime operations with a keen focus on cost-effective solutions while maintaining high standards of quality and safety. His leadership style and expertise in driving results contribute significantly to successful outcomes in the maritime industry.
            </Typography>
          </div>
          <div className="col-sm-7 teamimgparnt1">
            <div className="image-overlay" style={{backgroundColor:"white",borderRadius:"50%",overflow:"hidden"}}>
              <img data-aos="zoom-in-up" style={{objectFit:"contain"}}   src={Teamimg1} alt="Team Member" />
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-5 ourrteamsection ourteamsection2nd">
          <div className="col-sm-7 text-left teamimgparnt2">
            <div className="image-overlay" style={{backgroundColor:"white",borderRadius:"50%",overflow:"hidden"}}>
              <img data-aos="zoom-in-up" style={{objectFit:"contain"}} src={Teamimg2}></img>
            </div>
          </div>
          <div
            className="col-sm-5"
            data-aos="fade-left"
           data-aos-delay="500"
            data-aos-offset="100"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "25px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "25px", // Slightly larger for tablets and small screens
                  md: "50px",
                  // Default size for medium and larger screens
                },
                textAlign: { xs: "center", lg: "left" },
                color: "#fff",
              }}
              component="p"
            >
              SOURAV HORE
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "red",
                fontSize: {
                  xs: "20px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "20px", // Slightly larger for tablets and small screens
                  md: "22px",
                },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Managing Director & Co-Founder
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#fff",
                textAlign: "justify",
                marginTop: "20px ",
                fontSize: {
                  xs: "13px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "1rem", // Slightly larger for tablets and small screens
                  md: "22px",
                },
              }}
            >
              Sourav Hore leads HighMast with 25 years of marine expertise,
              specializing in green energy and market expansion. His strategic
              focus on sustainable growth drives operations from Singapore,
              London, and India.
            </Typography>
          </div>
        </div>
        <div className="row align-items-center pb-5   ourrteamsection ourteamsectionist ">
          <div
            className="col-sm-5"
            data-aos="fade-left"
            data-aos-delay="500"
             data-aos-offset="100"
           
     
          
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "25px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "25px", // Slightly larger for tablets and small screens
                  md: "50px",
                  // Default size for medium and larger screens
                },
                textAlign: { xs: "center", lg: "left" },
                color: "#fff",
                textTransform: "uppercase",
              }}
              component="p"
            >
              Rasna Vijayvargiya
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "red",
                fontSize: {
                  xs: "20px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "20px", // Slightly larger for tablets and small screens
                  md: "22px",
                },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Director & Founder
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#fff",
                textAlign: "justify",
                marginTop: "20px ",
                fontSize: {
                  xs: "13px", // Small font size for mobile devices (extra-small breakpoint)
                  sm: "1rem", // Slightly larger for tablets and small screens
                  md: "22px",
                },
              }}
            >
             Rasna Vijayvargiya brings a wealth of Financial expertise and strategic Vision to the organization. With over 9 years of financial Experience across Globe and an MBA Finance from Icfai Hyderabad. Rasna has excelled in strategic Financial management, business development, and client relationship management. Her expertise and leadership drive the company’s growth and success, ensuring excellence in every financial and strategic endeavor.
            </Typography>
          </div>
          <div className="col-sm-7 teamimgparnt1">
            <div className="image-overlay" style={{backgroundColor:"white",borderRadius:"50%",overflow:"hidden"}}>
              <img data-aos="zoom-in-up" style={{objectFit:"contain"}}  src={Teaming3} alt="Team Member" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Ourteam;