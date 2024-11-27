import React from "react";
import "./index.css";
import Teamimg1 from "../../assets/img/elements/Teamimg1.jpeg";
import Teamimg2 from "../../assets/img/elements/Team2.jpg";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";


const Ourteam = () => {
  return (
    <div className="container allpadding">
      <div data-aos="fade-right">
        <h2 className="Ourteamheading headingcenter ">OUR TEAM</h2>
      </div>
      <div className="container allpadding pb-0">
        <div className="row align-items-center pb-5 mb-5   ourrteamsection ">
          <div
            className="col-sm-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Typography
              sx={{
                fontSize: "50px",
                color: "#fff",
                textAlign: "left",
                textTransform: "uppercase",
              }}
              component="p"
            >
              Arbind Singh
            </Typography>
            <Typography
              component="p"
              sx={{ color: "red", fontSize: "22px", textAlign: "left" }}
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
        <div className="row align-items-center ourrteamsection">
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
              sx={{ fontSize: "50px", color: "#fff", textAlign: "left" }}
              component="p"
            >
              SOURAV HORE
            </Typography>
            <Typography
              component="p"
              sx={{ color: "red", fontSize: "22px", textAlign: "left" }}
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
