import React from "react";
import "./index.css";
import footerlogo from "../../assets/img/logo/highmastlogo.png";

import {
  Box,
  TextField,
  Button,
  Typography,
  InputLabel,
  colors,
  Divider,
  Grid2,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  Facebook,
  LinkedIn,
  LocalPhone,
  LocationOn,
  MailOutline,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <hr style={{ color: "#fff" }}></hr>
     
        <div className="row allpadding">
          {/* First Column: Logo and Contact Information */}
          <div className="col-sm-3">
            <div className="footer-logo">
              <img className="footerlogo" src={footerlogo}></img>
            </div>
            <div className="my-4">
              <Typography variant="p" sx={{ color: "#fff", fontSize: "14px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Typography>
            </div>
            <div className="social-links">
              <a href="https://facebook.com">
                <Facebook />
              </a>
              <a href="https://twitter.com">
                <Twitter />{" "}
              </a>
              <a href="https://linkedin.com">
                <LinkedIn />
              </a>
            </div>
          </div>

          {/* Second Column: Links */}
          <div className="col-sm-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/supply">Supply</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Third Column: Services */}
          <div className="col-sm-3">
            <h5>Our Services</h5>
            <ul className="footer-services">
              <li>
                <a href="">Dry Docking Repair</a>
              </li>
              <li>
                <a href="">Engine Overhauling</a>
              </li>
              <li>
                <a href="">Marine Electrical & Automation</a>
              </li>
              <li>
                <a href="">Crane Service and Repair</a>
              </li>
              <li>
                <a href="">Annual Service</a>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Address, Social Links, and Newsletter */}
          <div className="col-sm-3">
            <h5>Contact Us</h5>

            <div className="contact-info">
              <ul>
                <li style={{ color: "#fff" }}>
                  <LocationOn sx={{ fontSize: "20px" }} />
                  {""} Street Name, City, Country
                </li>
                <li>
                  <a href="mailto:service@highmastmarine.com">
                    <MailOutline sx={{ fontSize: "20px" }} />{" "}
                    service@highmastmarine.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890">
                    <LocalPhone sx={{ fontSize: "20px" }} />
                    {""}+65 90487544, +65 83060857
                  </a>
                </li>
              </ul>
            </div>

            <Box sx={{ mt: 3 }}>
              <h5> Subscribe to Newsletter</h5>

              <Box
                component="form"
                label="Subscribe to Newsletter"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #fff",
                  borderRadius: "4px",
                  overflow: "hidden",
                  mt: 1,
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Enter your email"
                  sx={{
                    flex: 1,
                    input: { color: "#fff" },
                    fieldset: { border: "none" },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "transparent", color: "#fff", p: 1.5 }}
                >
                  <SendIcon />
                </Button>
              </Box>
            </Box>
          </div>
        </div>
        <hr style={{ color: "#fff" }}></hr>
        <Box
          sx={{
            color: "#fff",
            padding: "20px 0",
          }}
        >
          <Grid2 container justifyContent="space-between" alignItems="center">
            <Grid2 item xs={12} md={4}>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: "13px" }}
              >
                © 2024 HighMast Marine, All Rights Reserved
              </Typography>
            </Grid2>
            <Grid2 item xs={12} md={8}>
              <Box
                display="flex"
                justifyContent="center"
                gap={2}
                flexWrap="wrap"
                sx={{ mt: { xs: 2, md: 0 } }}
              >
                <Link
                  href="/terms-and-conditions"
                  color="inherit"
                  underline="hover"
                  sx={{ typography: "body1", fontSize: "15px" }}
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  color="inherit"
                  underline="hover"
                  sx={{ typography: "body1", fontSize: "15px" }}
                >
                  Privacy Policy
                </Link>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
