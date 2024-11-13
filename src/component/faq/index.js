import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = ({ faqData }) => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate background position based on scroll position
  const getBackgroundPosition = () => {
    const speed = 0.2; // Adjust this value for more noticeable movement
    const offset = scrollY * speed; // Move background based on scroll position
    return `${offset}px 0`; // Move background from left to right
  };

  return (
    <div className="container  allpadding">
      <Box sx={{ width: "100%", padding: 4 }}>
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          sx={{
            marginBottom: 4,
            fontFamily: "roboto",
            fontSize: "70px",
            color: "#fff",
            fontFamily:"poppins"
          }}
        >
          Where We Are
        </Typography>
        <Box>
          {faqData.length > 0 ? (
            faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index % 2 === 0 ? index * 100 : index * 200} 
                style={{ marginBottom: "16px" }}
              >
                <Accordion
                  sx={{
                    width: "100%",
                    boxShadow: "none",
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    className="contactparent"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                    sx={{
                      borderRadius: "10px",
                      padding: 0,
                      background: `linear-gradient(50deg, white, hsl(0, 0%, 90%))`, 
                      backgroundSize: "300% 100%",
                      backgroundPosition: getBackgroundPosition(),
                      transition: "background-position 0.2s ease",
                    }}
                  >
                    <div className="col-sm-6 py-4">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          fontFamily: "poppins",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "40px",
                            fontSize: "40px",
                            fontWeight: "600",
                            marginLeft: "40px",
                          }}
                        >
                          {faq.icon}
                        </span>
                        {faq.countryname}
                      </Typography>
                    </div>
                    <div className="col-sm-6 text-left px-3  py-4 contactlocbg">
                      <Typography
                        sx={{ fontFamily: "poppins", textAlign: "left" }}
                      >
                        {faq.addressright1}
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 4 }}>
                    <div className="row">
                      <div className="col-sm-6 " style={{ textAlign: "left" }}>
                        <Typography sx={{ fontWeight: "600" }}>
                          {" "}
                          {faq.addressheading}
                        </Typography>
                        <Typography>{faq.addressdetails}</Typography>
                        <Typography>{faq.addresdetailspin}</Typography>

                        <div class="mt-5">
                          <Typography sx={{fontWeight:"600"}}>Phone:</Typography>
                          <Typography>{faq.phoneno}</Typography>
                          <Typography sx={{fontWeight:"600"}}>Email:</Typography>
                          <Typography> {faq.email}</Typography>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <img src={faq.img}></img>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))
          ) : (
            <Typography variant="body1" align="center">
              No FAQs available.
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default FAQSection;
