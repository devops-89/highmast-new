import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import anchorimg from "../../assets/img/elements/anchor.png";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import certificationimg1 from "../../assets/img/elements/certificationimg1.png";
import certificationimg2 from "../../assets/img/elements/certificationimg2.png";
import certificationimg3 from "../../assets/img/elements/certificationimg3.png";
import certificationimg4 from "../../assets/img/elements/certificationimg4.png";

const Certification = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container allpadding pb-0">
      <div>
        <Typography
          data-aos="fade-up"
          sx={{ fontSize: "80px", color: "#fff" }}
          component="p"
        >
          DElIVERING QUALITY
        </Typography>
      </div>
      <div class="row align-items-center allpadding">
        <div class="col-4">
          <div
            class="certicationscol"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg1}></img>
              </div>
              <Typography sx={{ fontSize: "18px" }} className="certiondetail">
                ISO 9001 instils quality awareness in all of our marina service
                modules that then can drive operational efficiency and client
                satisfaction.
              </Typography>
            </div>
          </div>
          <div
            class="certicationscol"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg2}></img>
              </div>
              <Typography sx={{ fontSize: "18px" }} className="certiondetail">
                ISO 14001 empowers us even more on our commitment to being
                environmentally responsible and stewards us to conduct practices
                of sustainable and innovative green energy and reduces our
                impact on the environment.
              </Typography>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="text-center">
            <img src={anchorimg} alt="Parallax Image" class="anchorimg"></img>
          </div>
        </div>

        <div class="col-4">
          <div
            class="certicationscol"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg3}></img>
              </div>
              <Typography sx={{ fontSize: "18px" }} className="certiondetail">
                Emphasis on the safety and health of our crew and clients in
                terms of safe working conditions across all our operations.
              </Typography>
            </div>
          </div>
          <div
            class="certicationscol"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div class="   ">
              <div className="certificationparent">
                <img className="certificationimg" src={certificationimg4}></img>
              </div>
              <Typography sx={{ fontSize: "18px" }} className="certiondetail">
                bizSAFE certification depicts our proactive approach to safety
                at the workplace and regulatory compliance.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
