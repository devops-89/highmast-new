import React, { useState } from "react";
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
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bars } from "react-loader-spinner";
const Footer = () => {
  const navigate = useNavigate();

  // Newsletter form state
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous error message

    // Validate email
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If validation passes, submit the form
    setIsSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "26cc9ba3-3838-4e33-bfbf-5de20864a633",
          email: email,
        }),
      });

      const result = await response.json();
      setLoading(false);
      if (result.success) {
        setEmail("");
        navigate("/thank-you");
        toast.success("Subscribed successfully!");
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="footer ">
      <div className="container">
        <hr style={{ color: "#fff" }}></hr>

        <div className="row allpadding">
          {/* First Column: Logo and Contact Information */}
          <div className="col-sm-3">
            <div className="footer-logo">
              <Link to="/">
                {" "}
                <img className="footerlogo" src={footerlogo}></img>
              </Link>
            </div>
            <div className="my-4">
              <Typography variant="p" sx={{ color: "#fff", fontSize: "14px" }}>
                Your trusted partner in sustainable marine solutions, offering
                innovative engineering and repair services with a focus on
                environmental responsibility, available 24/7.
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
          <div className="col-sm-2 footer-linksparent">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Third Column: Services */}
          <div className="col-sm-4">
            <h5>Our Services</h5>
            <ul className="footer-services">
              <li>
                <Link to="/retrofit-led-power-saving-solutions">
                  Retrofit Led Power Saving Solutions
                </Link>
              </li>

              <li>
                <Link to="/scrubber-and-ccs-commisioning">
                  Scrubber & Ccs Commisioning
                </Link>
              </li>
              <li>
                <Link to="/amp-solutions-and-vdf-retrofit">
                  AMP Solutions & VDF Retrofit
                </Link>
              </li>
              <li>
                <Link to="/project-supervision-shipbuilding-and-ship-repairs">
                  Project Supervision Shipbuilding & Repairs
                </Link>
              </li>
              <li>
                <Link to="/vessel-3d-scanning-and-production-design">
                  Vessel 3D scanning & Production design
                </Link>
              </li>
              <li>
                <Link to="/marine-electrical-&-automation">
                  Marine Electrical & Automation
                </Link>
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
                  {""} Tong Eng Building, 101 Cecil Street, Unit 24-05 Singapore
                  069553
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
                onSubmit={handleSubmit}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    flex: 1,
                    input: { color: "#fff" },
                    fieldset: { border: "none" },
                  }}
                />

                {isSubmitting ? (
                  <Bars
                    height="30"
                    width="30"
                    color="red"
                    ariaLabel="loading-indicator"
                  />
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      p: 1.5,
                    }}
                  >
                    <SendIcon />
                  </Button>
                )}
              </Box>

              {error && (
                <Typography sx={{ color: "red !important" }}>
                  {error}
                </Typography>
              )}

              <ToastContainer />
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
