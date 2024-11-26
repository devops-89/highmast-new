import React from "react";
import Marquee from "react-fast-marquee";
import "./index.css"; // Assuming you have styles in this file
import bwimg from "../../assets/img/logo/bwimg.webp";
import hafnialogo from "../../assets/img/logo/hafnialogo.png";
import molimg from "../../assets/img/logo/molimg.jpg";
import islandviewshiping from "../../assets/img/logo/islandviewshiping.png";
import vships from "../../assets/img/logo/vshipsimg.png";

const OurClients = () => {
  return (
    <div className="fw-col-inner">
      <Marquee
        style={{
          transform: "rotate(-7deg)",
          marginBottom: "20px",
          overflow: "hidden",
        }}
        speed={80}
        pauseOnHover={true}
      >
        <div className="marquee-item">
          <img src={bwimg} alt="BW Epic Kosan" />
          <span>BW Epic Kosan</span>
        </div>
        <div className="marquee-item">
          <img src={hafnialogo} alt="Hafnia" />
          <span>Hafnia</span>
        </div>
        <div className="marquee-item">
          <span style={{ color: "#E32226" }}>- OUR CLIENT -</span>
        </div>
        <div className="marquee-item">
          <img src={vships} alt="SHIPS" />
          <span>SHIPS</span>
        </div>
        <div className="marquee-item">
          <img src={islandviewshiping} alt="ISLAND VIEW SHIPPING SERVICES" />
          <span>ISLAND VIEW SHIPPING SERVICES</span>
        </div>
        <div className="marquee-item">
          <img src={molimg} alt="Mitsui O.S.K. Lines" />
          <span>Mitsui O.S.K. Lines</span>
        </div>
      </Marquee>
      <Marquee
        style={{
          transform: "rotate(-7deg)",
          marginBottom: "20px",
          overflow: "hidden",
        }}
        speed={80}
        pauseOnHover={true}
      >
        <div className="marquee-item">
          <img src={hafnialogo} alt="Hafnia" />
          <span>Hafnia</span>
        </div>
        <div className="marquee-item">
          <img src={molimg} alt="Mitsui O.S.K. Lines" />
          <span>Mitsui O.S.K. Lines</span>
        </div>

        <div className="marquee-item">
          <img src={vships} alt="SHIPS" />
          <span>SHIPS</span>
        </div>
        <div className="marquee-item">
          <img src={islandviewshiping} alt="ISLAND VIEW SHIPPING SERVICES" />
          <span>ISLAND VIEW SHIPPING SERVICES</span>
        </div>
        <div className="marquee-item">
     
          <span style={{ color: "#E32226" }}>- OUR CLIENT -</span>
        </div>

        <div className="marquee-item">
          <img src={bwimg} alt="BW Epic Kosan" />
          <span>BW Epic Kosan</span>
        </div>
      </Marquee>
      <Marquee
        style={{
          transform: "rotate(-7deg)",
          marginBottom: "20px",
          overflow: "hidden",
        }}
        speed={80}
        pauseOnHover={true}
      >
        <div className="marquee-item">
          <img src={vships} alt="SHIPS" />
          <span>SHIPS</span>
        </div>
        <div className="marquee-item">
          <img src={hafnialogo} alt="Hafnia" />
          <span>Hafnia</span>
        </div>
        <div className="marquee-item">
          <img src={vships} alt="SHIPS" />
          <span>SHIPS</span>
        </div>
        <div className="marquee-item">
          <img src={bwimg} alt="BW Epic Kosan" />
          <span>BW Epic Kosan</span>
        </div>
        <div className="marquee-item">
          <span style={{ color: "#E32226" }}>- OUR CLIENT -</span>
        </div>
        <div className="marquee-item">
          <img src={islandviewshiping} alt="ISLAND VIEW SHIPPING SERVICES" />
          <span>ISLAND VIEW SHIPPING SERVICES</span>
        </div>
        <div className="marquee-item">
          <img src={molimg} alt="Mitsui O.S.K. Lines" />
          <span>Mitsui O.S.K. Lines</span>
        </div>
      </Marquee>
    </div>
  );
};

export default OurClients;
