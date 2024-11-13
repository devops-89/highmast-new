import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import "./index.css";
import ModalComponent from "../dialog";

const Contactseection = () => {
  const [fixed, setFixed] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setFixed(window.pageYOffset > 0);
      window.addEventListener("scroll", handleScroll);
      // Cleanup on component unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div>
      <Container
        style={{
          border: fixed ? "1px solid #d7d7d7" : "1px solid #121a27",
          paddingTop: "10px",
          paddingBottom: "0px",
          paddingRight: "50px",
          marginTop: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: fixed ? "rgb(16 59 81 / 15%)" : "transparent",
          backdropFilter: fixed ? "blur(5px)" : "none",
        }}
      >
        <div className="row">
          <div className="col-sm-8">
            <h6 className="callheading">Join the Clean Seas Revolution</h6>
            <p className="callsubheading">
              Sail into the Future with Us – Contact for Zero-Emission Solutions
            </p>
          </div>
          <div className="col-sm-4 contactusparent">
            <div className="buttonparnt">
              <button className="allbutton" onClick={handleShow}>
                Contact Us
              </button>
            </div>
          </div>
          <ModalComponent show={show} handleClose={handleClose} />
        </div>
      </Container>
    </div>
  );
};

export default Contactseection;
