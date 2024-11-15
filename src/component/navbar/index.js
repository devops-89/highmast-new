import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import highmastlogo from "../../assets/img/logo/highmastlogo.png";
import emailcall from "../../assets/img/elements/contact-mail.png";
import ModalComponent from "../dialog";

import "./index.css";

const Navbar = () => {
  let Data = {
    navlinks: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about-us" },
      { name: "Services", url: "/services", dropdown: true, disabled: true }, // Indicating this has a dropdown
      // { name: "Supply", url: "/supply" },
      { name: "Contact", url: "/contact-us" },
    ],
    servicesDropdown: [
      { name: "Engine Overhauling", url: "/engine-overhauling" },
      {
        name: "Marine electrical & Automation ",
        url: "/marine-electrical-&-automation",
      },
      { name: "Cranes Service ", url: "/cranes-services" },
      { name: "Marine and Offshore ", url: "/marine-and-offshore" },
      { name: "Hydraulic Power", url: "/hydraulic-power" },
    ],
  };
  const location = useLocation();
  const [fixed, setFixed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setFixed(window.pageYOffset > 0));
    }
  }, []);

  return (
    <Box
      sx={{
        position: fixed ? "fixed" : "absolute",
        width: "100%",
        zIndex: 999,
        height: 80,
        display: "flex",
        alignItems: "center",
        transition: "0.5s ease all",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", minWidth: "800px" }}
        >
          <Stack
            sx={{
              border: fixed ? "1px solid #d7d7d7" : "1px solid #121a27",
              height: 70,
              mt: 3,
              borderRadius: 2,
              backgroundColor: fixed ? "rgb(16 59 81 / 15%)" : "transparent",
              backdropFilter: fixed && "blur(5px)",
              alignItems: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              flexGrow: 1,
            }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Link to="/">
              <img
                className="highmastlogo"
                src={highmastlogo}
                width={150}
                alt="Highmast Logo"
              />
            </Link>

            <Stack
              direction={"row"}
              alignItems={"center"}
              className="navlinks"
              spacing={3}
            >
              {Data.navlinks.map((val, i) => (
                <Box
                  key={i}
                  onMouseEnter={() => val.dropdown && setShowDropdown(true)}
                  onMouseLeave={() => val.dropdown && setShowDropdown(false)}
                  style={{ position: "relative" }}
                >
                  <Link
                    to={val.url}
                    style={{ textDecoration: "none" }}
                    className={
                      location.pathname === val.url ? "active-link" : ""
                    }
                  >
                    <Typography
                      fontFamily="poppins"
                      fontWeight={500}
                      textTransform={"uppercase"}
                      margin="0px 20px"
                    >
                      {val.name}
                    </Typography>
                  </Link>

                  {val.dropdown && showDropdown && (
                    <Box
                      className="serviceslinks"
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "rgb(16 59 81 / 40%)",
                        borderRadius: 2,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                        zIndex: 1,
                        width: "180%",
                        textAlign: "left",
                        border: "1px solid #6CBBC8",
                      }}
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      {Data.servicesDropdown.map((service, j) => (
                        <Link
                          key={j}
                          to={service.url}
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            display: "block",
                            padding: "5px 10px",
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Stack>
            <Stack></Stack>
          </Stack>

          <Box
            className="emailcallbox"
            sx={{
              display: "flex",
              alignItems: "center",
              border: fixed ? "1px solid #d7d7d7" : "1px solid #121a27",
              mt: 3,
              borderRadius: 2,
              backgroundColor: fixed ? "rgb(16 59 81 / 15%)" : "transparent",
              backdropFilter: fixed && "blur(5px)",
              padding: "10px 15px",
              height: 70,
              borderRadius: "8px",
              marginLeft: "5px",
              marginTop: "25px",
            }}
            onClick={handleShow}
          >
            <img
              src={emailcall}
              alt="Email Call Icon"
              style={{ width: "30px", height: "30px" }}
            />
          </Box>
        </Stack>
        <ModalComponent show={show} handleClose={handleClose} />
      </Container>
    </Box>
  );
};

export default Navbar;
