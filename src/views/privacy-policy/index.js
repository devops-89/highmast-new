import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./index.css";
import AOS from "aos";
import { Typography } from "@mui/material";
import Data from "../../assets/data";
import Contactseection from "../../component/contactsection";

const Privacypolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="privacybanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1 data-aos="fade-up-right">
                <p className="rstoftext">
                  <span className="">PRIVACY POLICY </span>{" "}
                </p>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="container allpadding termsconditions">
        <Typography sx={{ color: "#fff", lineHeight: "2.2rem" }}>
          HighMast Marine Services Pte Ltd ("HighMast", "we", "us", or "our") is
          committed to protecting the privacy and security of your personal
          data.
        </Typography>
        <Typography sx={{ color: "#fff", lineHeight: "2.2rem" }}>
          his Privacy Policy explains how we collect, use, and protect your
          personal data, and your rights in relation to that data.
        </Typography>
        <Typography sx={{ color: "#fff", lineHeight: "2.2rem" }}>
          This Privacy Policy applies to all personal data we collect through
          our website, social media, and other online platforms, as well as
          through our business operations.
        </Typography>

        {/* Render lists dynamically */}
        {Data.PrivacypolicylistData.map((section, index) => (
          <div key={index}>
            <h4 className="">{section.title}</h4>
            <h5 className="privacysubtitle">{section.tittle2}</h5>
            <ul className="Termsconditionslist">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Typography sx={{ color: "#fff", lineHeight: "2.2rem" }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Contactseection/>
    </div>
  );
};

export default Privacypolicy;
