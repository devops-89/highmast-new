import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = ({ faqData = [] }) => {
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
    <div className="container">
    <Box sx={{ width: "100%", padding: 4 }}>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{ marginBottom: 4 , fontFamily:"roboto",fontSize:"50px",color:"#6CBBC8"}}
      >
        FAQ<span style={{ fontSize: "18px" }}>s</span>
      </Typography>
      <Box>
        {faqData.length > 0 ? (
          faqData.map((faq, index) => (
            <motion.div key={faq.id} style={{ marginBottom: "16px" }}>
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
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                  sx={{
                    borderRadius:"10px",
                    padding: 2,
                    background: `linear-gradient(50deg, white, hsl(0, 0%, 90%))`, // Blue gradient
                    backgroundSize: "300% 100%", // Increase width for more movement
                    backgroundPosition: getBackgroundPosition(), // Calculate position based on scroll
                    transition: "background-position 0.2s ease",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      fontFamily:"poppins"
                    }}
                  >
                    <span
                      style={{
                        marginRight: "40px",
                        fontSize: "40px",
                        fontWeight: "600",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}.{" "}
                      {/* Add leading zero */}
                    </span>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 4 }}>
                  <Typography variant="body1" align="left" sx={{
                    fontFamily:"poppins"
                  }}>
                    {faq.answer}
                  </Typography>
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
