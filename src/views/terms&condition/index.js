import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./index.css";
import { Typography } from "@mui/material";
import Contactseection from "../../component/contactsection";
import Data from "../../assets/data";

const TermsAndCondition = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ backgroundColor: "#2A5962" }}>
      <div className="container-fluid px-0">
        <section className="termconditionbanner servicesbanner secOne2">
          <div className="servicesbanneroverlay"></div>
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span>TERMS & CONDITIONS</span>
                </p>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="container allpadding termsconditions">
        <Typography
          sx={{
            color: "#fff",
            lineHeight: "2.2rem",
            fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          These Terms and Conditions ("Terms") govern your use of the HighMast
          Marine Services Pte Ltd ("HighMast", "we", "us", or "our") website
          ("Website") and any services provided through the Website.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            lineHeight: "2.2rem",
            fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          By accessing or using the Website, you agree to be bound by these
          Terms. If you do not agree to these Terms, you must not use the
          Website.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            lineHeight: "2.2rem",
            fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          These Terms may be amended from time to time. Your continued use of
          the Website following any changes to these Terms will be deemed
          acceptance of those changes.
        </Typography>

        {/* Render lists dynamically */}
        {Data.termsconditionlistData.map((section, index) => (
          <div key={index}>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                marginTop: "1.5rem",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              }}
            >
              {section.title}
            </Typography>
            <ul className="Termsconditionslist">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Typography
                    sx={{
                      color: "#fff",
                      lineHeight: "2.2rem",
                      fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" },
                    }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Contactseection />
    </div>
  );
};

export default TermsAndCondition;
