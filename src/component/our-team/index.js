import React, { useEffect } from "react";
import "./index.css";
import Teamimg1 from "../../assets/img/elements/Teamimg1.jpeg";
import Teamimg2 from "../../assets/img/elements/Team2.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { Typography } from "@mui/material";

const Ourteam = () => {
  useEffect(() => {
    // AOS.init({ once: false });
    // AOS.refresh();
    AOS.init({
      offset: 100, // Adjust this to control the point at which animation starts
      duration: 600, // Control the speed of animation
      once: false, // Run animation only once
    });
  }, []);
  return (
    <div className="container allpadding">
      <div data-aos="fade-right">
        <h2 className="Ourteamheading headingcenter ">OUR TEAM</h2>
      </div>
      <div className="container allpadding pb-0">
        <div className="row align-items-center pb-5   ourrteamsection ourteamsectionist ">
          <div
            className="col-sm-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
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
              }}
            >
              Arbind Singh brings 20 years of experience in ship classification,
              management, and repair. His hands-on approach fosters a
              collaborative culture, ensuring progress across all projects.
            </Typography>
          </div>
          <div className="col-sm-7 teamimgparnt1">
            <div className="image-overlay">
              <img data-aos="zoom-in-up" src={Teamimg2} alt="Team Member" />
            </div>
          </div>
        </div>
        <div className="row align-items-center ourrteamsection ourteamsection2nd">
          <div className="col-sm-7 text-left teamimgparnt2">
            <div className="image-overlay">
              <img data-aos="zoom-in-up" src={Teamimg1}></img>
            </div>
          </div>
          <div
            className="col-sm-5"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
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
              }}
            >
              Sourav Hore leads HighMast with 25 years of marine expertise,
              specializing in green energy and market expansion. His strategic
              focus on sustainable growth drives operations from Singapore,
              London, and India.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ourteam;
