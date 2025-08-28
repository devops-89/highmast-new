import {
  Box,
  Container,
  Stack,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Dropdown arrow icon
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
      { name: "Services", url: "/services", dropdown: true },
      { name: "Contact", url: "/contact-us" },
    ],
    servicesDropdown: [
      {
        name: "Retrofit Led Power Saving Solutions",
        url: "/retrofit-led-power-saving-solutions",
      },

      {
        name: "Scrubber & Ccs Commissioning",
        url: "/scrubber-and-ccs-commisioning",
      },
      {
        name: "AMP Solutions & VDF  Retrofit",
        url: "/amp-solutions-and-vdf-retrofit",
      },
      {
        name: "Project Supervision Shipbuilding & Repairs",
        url: "project-supervision-shipbuilding-and-ship-repairs",
      },
      {
        name: "Vessel 3D scanning & Production design",
        url: "vessel-3d-scanning-and-production-design",
      },
      {
        name: "Marine electrical & Automation",
        url: "/marine-electrical-&-automation",
      },
      {
        name: "Energy Saving & Efficiency Devices",
        url: "/energy-efficiency-devices",
      },
      {
        name: "Inspection and Audits",
        url: "/inspection-and-audits",
      },
    ],
  };

  const location = useLocation();
  const [fixed, setFixed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setFixed(window.pageYOffset > 0));
    }
  }, []);

  const enquiryLinks = [{ name: "ENQUIRY FORM", onClick: handleShow }];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <Box
      sx={{
        position: fixed ? "fixed" : "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 999,
        height: 80,
        display: "flex",
        alignItems: "center",
        transition: "0.5s ease all",
        padding: { xs: "0px 12px ", md: "0px 0px", lg: "0px 0px" },
      }}
    >
      <div className="container px-0 nav-container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            minWidth: { xs: "100%", md: "800px", lg: "800px" },
            width: "100%",
          }}
        >
          <Stack 
            sx={{
              border: fixed ? "1px solid #d7d7d7" : "1px solid #121a27",
              height: 70,
              mt: 3,
              borderRadius: 2,
              backgroundColor: fixed ? "rgb(16 59 81 / 50%)" : "rgb(16 59 81 / 50%)",
              backdropFilter: fixed && "blur(5px)",
              alignItems: "center",
              paddingLeft: { xs: "0px", md: "20px", lg: "20px" },
              paddingRight: { xs: "0px", md: "20px", lg: "20px" },
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

            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
            {/* mobile view */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: { width: "100%", height: "100%" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#031C32",
                  position: "relative",
                  padding: 4,
                }}
                role="presentation"
              >
                <Link to="/">
                  <img
                    onClick={toggleDrawer(false)}
                    className="highmastlogo"
                    src={highmastlogo}
                    width={150}
                    alt="Highmast Logo"
                  />
                </Link>
                <IconButton
                  onClick={toggleDrawer(false)}
                  sx={{ position: "absolute", right: 16 }}
                  color="inherit"
                  aria-label="close"
                >
                  <CloseIcon
                    sx={{
                      color: "#fff",
                    }}
                  />
                </IconButton>

                <Stack
                  direction="column"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{ marginTop: 6 }}
                >
                  {Data.navlinks.map((val, i) => (
                    <Box key={i} sx={{ width: "100%" }}>
                      {/* Navigation Link and Dropdown Icon in Horizontal Line */}
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                       
                        <Link
                          to={val.url}
                          style={{ textDecoration: "none" }}
                          className={
                            location.pathname === val.url ? "active-link" : ""
                          }
                          onClick={toggleDrawer(false)} // Close drawer on link click
                        >
                          <Typography
                            fontFamily="poppins"
                            fontWeight={500}
                            textTransform={"uppercase"}
                            fontSize="14px"
                            color="#fff"
                          >
                            {val.name}
                          </Typography>
                        </Link>

                        {/* Dropdown Icon - Positioned Next to the "Services" Link */}
                        {val.dropdown && (
                          <IconButton
                            onClick={toggleMobileDropdown} // Toggle dropdown on icon click
                            sx={{ marginLeft: 1 }}
                          >
                            <ArrowDropDownIcon sx={{ color: "#fff" }} />
                          </IconButton>
                        )}
                      </Box>

                      {/* Dropdown Menu - Positioned Below the "Services" Link */}
                      {val.dropdown && mobileDropdownOpen && (
                        <Stack spacing={1} sx={{ paddingTop: 1 }}>
                          {Data.servicesDropdown.map((service, j) => (
                            <Link
                              key={j}
                              to={service.url}
                              style={{
                                textDecoration: "none",
                                color: "#fff",
                                display: "block",
                                padding: "5px 0",
                              }}
                              onClick={toggleDrawer(false)} // Close drawer on link click
                            >
                              {service.name}
                            </Link>
                          ))}
                        </Stack>
                      )}
                    </Box>
                  ))}

                  {enquiryLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        display: "block",
                        padding: "5px 0",
                      }}
                      onClick={() => {
                        setDrawerOpen(false); // Close the drawer first
                        if (link.onClick) link.onClick(); // Call the onClick handler from the array
                      }}
                    >
                      <Typography
                        fontFamily="poppins"
                        fontWeight={500}
                        textTransform={"uppercase"}
                        fontSize="14px"
                        color="#fff"
                      >
                        {link.name}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Box>
            </Drawer>
            {/* end mobile view */}

            <Stack
              direction={"row"}
              alignItems={"center"}
              className="navlinks"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {Data.navlinks.map((val, i) => (
                <Box
                  key={i}
                  onMouseEnter={() =>
                    val.dropdown && setMobileDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    val.dropdown && setMobileDropdownOpen(false)
                  }
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

                  {val.dropdown && mobileDropdownOpen && (
                    <Box
                      className="serviceslinks"
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "rgb(16 59 81 / 94%)",
                        borderRadius: 2,
                        border: "1px solid #6cbbc8",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                        zIndex: 1,
                        width: "270px",
                        textAlign: "left",
                      }}
                      onMouseEnter={() => setMobileDropdownOpen(true)}
                      onMouseLeave={() => setMobileDropdownOpen(false)}
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
            <Stack
              sx={{ display: { xs: "none", md: "block", lg: "block" } }}
            ></Stack>
          </Stack>

          <Box
            className="emailcallbox"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              border: fixed ? "1px solid #d7d7d7" : "1px solid #121a27",
              borderRadius: 2,
              padding: "10px 15px",
              height: 70,
              marginLeft: "5px",
              marginTop: "25px",
              backgroundColor: fixed ? "rgba(16, 59, 81, 50%)" : "rgba(16, 59, 81, 50%)",
              backdropFilter: fixed && "blur(5px)",
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
      </div>
    </Box>
  );
};

export default Navbar;
