import { Typography } from "@mui/material";
import React from "react";
import "./index.css";

const Aboutsection = () => {
  return (
    <div>
      <div className="container-fluid px-0   greenimpactbgabout ">
        <div className="container allpadding ">
          <div className="row">
            <div className="col-sm-6 ">
              <Typography
                variant="h2"
                sx={{
                  fontSize: "60px",
                  textAlign: "left",
                  marginBottom: "4rem",
                  fontFamily: "roboto",
                  color:"#6CBBC8"
                }}
              >
                Why High<span style={{color:"#E32226"}}>Mast</span>{" "}Marine?
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  textAlign: "left",
                  marginBottom: "4rem",
                  fontFamily: "poppins",
                  color:"#fff"
                }}
              >
                <strong>HighMast Marine Services Pte Ltd</strong> was
                established in Singapore in 2023 by Ex -Technical Directors
                Sourav Hore and Arbind Singh with over 20 years of experience.
                The founders have successfully led turnkey projects for more
                than 20 vessels in shipyards across Japan, Korea, and China.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  textAlign: "left",
                  marginBottom: "4rem",
                  fontFamily: "poppins",
                  color:"#fff"
                }}
              >
                <strong> We are a highly cost-sensitive</strong>, time-focused,
                and result-driven team, fully equipped to meet mandatory green
                compliance and offer a wide range of eco-friendly solutions,
                always delivering as expected to our clients.
              </Typography>
            </div>
            <div className="col-sm-6  ">
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;

