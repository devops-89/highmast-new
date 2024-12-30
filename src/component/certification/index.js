import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import anchorimg from "../../assets/img/elements/anchor-desktop.png";
import "./index.css";

import certificationimg1 from "../../assets/img/elements/certificationimg1.png";
import certificationimg2 from "../../assets/img/elements/certificationimg2.png";
import certificationimg3 from "../../assets/img/elements/certificationimg3.png";
import certificationimg4 from "../../assets/img/elements/certificationimg4.png";

const Certification = () => {
 
  return (
    <div className="container-fluid" style={{backgroundColor:"#2A5962"}}>
    <div className="container allpadding pb-0">
      <div>
        <h2 className="headingcenter" data-aos="fade-up">
          {" "}
          DELIVERING QUALITY
        </h2>
      </div>
      <div class="row align-items-center allpadding">
        <div class="col-sm-4">
          <div
            class="certicationscol"
            data-aos="fade-right"
            data-aos-mirror="true"
            data-aos-delay="200"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg1}></img>
              </div>
              <Typography
                className="certiondetail"
                sx={{
                  fontSize: {
                    xs: "13px", // Small font size for mobile devices (extra-small breakpoint)
                    sm: "1rem", // Slightly larger for tablets and small screens
                    md: "20px",
                  },
                }}
              >
                ISO 9001 instils quality awareness in all of our marina service
                modules that then can drive operational efficiency and client
                satisfaction.
              </Typography>
            </div>
          </div>
          <div
            class="certicationscol"
            data-aos="fade-right"
            data-aos-mirror="true"
            data-aos-delay="300"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg2}></img>
              </div>
              <Typography
                className="certiondetail"
                sx={{
                  fontSize: {
                    xs: "13px", // Small font size for mobile devices (extra-small breakpoint)
                    sm: "1rem", // Slightly larger for tablets and small screens
                    md: "20px",
                  },
                }}
              >
                ISO 14001 enhances our environmental responsibility, guiding
                sustainable practices and reducing our ecological impact.
              </Typography>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="text-center">
            <img src={anchorimg} alt="Parallax Image" class="anchorimg"></img>
          </div>
        </div>

        <div class="col-sm-4">
          <div
            class="certicationscol"
            data-aos="fade-left"
            data-aos-mirror="true"
            data-aos-delay="400"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg3}></img>
              </div>
              <Typography
                className="certiondetail"
                sx={{
                  fontSize: {
                    xs: "13px", // Small font size for mobile devices (extra-small breakpoint)
                    sm: "1rem", // Slightly larger for tablets and small screens
                    md: "20px",
                  },
                }}
              >
                Emphasis on the safety and health of our crew and clients in
                terms of safe working conditions across all our operations.
              </Typography>
            </div>
          </div>
          <div
            class="certicationscol"
            data-aos="fade-left"
            data-aos-mirror="true"
            data-aos-delay="500"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg4}></img>
              </div>
              <Typography
                className="certiondetail"
                sx={{
                  fontSize: {
                    xs: "13px", // Small font size for mobile devices (extra-small breakpoint)
                    sm: "1rem", // Slightly larger for tablets and small screens
                    md: "20px",
                  },
                }}
              >
                bizSAFE certification depicts our proactive approach to safety
                at the workplace and regulatory compliance.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Certification;
