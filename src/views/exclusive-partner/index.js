import React, { useEffect } from "react";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Contactseection from "../../component/contactsection";
import linkistLogo from "../../assets/img/partners/linkist.png";
import smDesignLogo from "../../assets/img/partners/sm-design.png";
import purifierPdf from "../../assets/pdfs/CATALOG(PURIFIER).pdf";
import spareCatalogPdf from "../../assets/pdfs/SMD SPARE CATALOG.pdf";
import valvePdf from "../../assets/pdfs/SMD_ Valve.pdf";

const ExclusivePartner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  const partners = [
    {
      name: "Link Instruments",
      url: "https://linkinst.com/",
      description: "Link Instruments is a leading manufacturer of ultrasonic measurement and gas detection solutions for industrial and marine environments. With decades of engineering expertise, the company delivers reliable instruments designed to enhance safety, accuracy, and operational efficiency across multiple industries.",
      image: linkistLogo,
      features: [
        "Ultrasonic Measurement Instruments",
        "Gas Leak Detection Solutions",
        "Marine & Industrial Applications",
        "Precision Engineering and Reliable Performance"
      ]
    },
    {
      name: "SM Designworks",
      url: "http://www.smdesign.co.kr/default/index.php",
      description: "SM Designworks is a specialized engineering and marine service company providing retrofit solutions, ship repair, and technical support for vessels. The company focuses on delivering efficient engineering, fabrication, and installation services to improve vessel performance and meet international maritime standards.",
      image: smDesignLogo,
      features: [
        "Marine Engineering & Retrofit Solutions",
        "3D Scanning and Technical Survey",
        "Ship Repair & Installation Services",
        "Fabrication and Equipment Integration"
      ]
    }
  ];

  const resources = [
    { title: "Purifier Catalog", file: purifierPdf, size: "1.3 MB" },
    { title: "Spare Parts Catalog", file: spareCatalogPdf, size: "151 KB" },
    { title: "Valves Catalog", file: valvePdf, size: "4.2 MB" }
  ];

  return (
    <div className="exclusive-partner-page">
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="/header/Header3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section */}
      <section className="partner-hero secOne2">
        <div className="container bannercontainer">
          <div className="section-title desktop">
            <h1 data-aos="fade-down" className="premium-title">
              Our <span style={{ color: "#E32226" }}>Exclusive</span> <br />
              Strategic Partners
            </h1>
            <Typography 
              variant="h6" 
              sx={{ color: "#fff", maxWidth: "800px", mt: 2, opacity: 0.9 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Excellence through collaboration. We partner with world-class organizations to deliver 
              unparalleled marine solutions and educational advancement.
            </Typography>
          </div>
        </div>
      </section>

      {/* Partners Sections */}
      <Container sx={{ py: 10 }}>
        {partners.map((partner, index) => (
          <Box 
            key={index} 
            className="partner-card"
            sx={{ mb: 8 }}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Grid container spacing={4} alignItems="center" direction={index % 2 === 0 ? "row" : "row-reverse"}>
              <Grid item xs={12} md={6}>
                <Box className="partner-glass-content">
                  <Typography variant="h3" className="partner-name">
                    {partner.name}
                  </Typography>
                  <Typography variant="body1" className="partner-description" sx={{ mt: 2, mb: 3 }}>
                    {partner.description}
                  </Typography>
                  <Stack spacing={1} sx={{ mb: 4 }}>
                    {partner.features.map((feature, fIndex) => (
                      <Typography key={fIndex} variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
                        <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#E32226', mr: 2 }} />
                        {feature}
                      </Typography>
                    ))}
                  </Stack>
                  <Button 
                    variant="contained" 
                    href={partner.url} 
                    target="_blank"
                    className="partner-btn"
                  >
                    Visit Website
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="partner-visual">
                  <Box className="partner-image-card" data-aos="zoom-in">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="partner-full-img"
                    />
                    <div className="image-overlay"></div>
                  </Box>
                  <div className="visual-glow"></div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}

        {/* PDF Resources Section */}
        <Box sx={{ mt: 15, textAlign: 'center' }} data-aos="fade-up">
          <Typography variant="h2" className="premium-title" sx={{ mb: 6 }}>
            Technical <span style={{ color: "#E32226" }}>Resources</span>
          </Typography>
          <Grid container spacing={4}>
            {resources.map((res, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box className="resource-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="pdf-icon-wrapper">
                    <div className="pdf-icon"></div>
                  </div>
                  <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                    {res.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 3 }}>
                    PDF Document • {res.size}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    href={res.file} 
                    download 
                    className="download-btn"
                  >
                    Download
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Contactseection />
    </div>
  );
};

export default ExclusivePartner;
