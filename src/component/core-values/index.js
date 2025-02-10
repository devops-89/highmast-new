import React, { useRef } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel, Autoplay } from "swiper/modules"; // Import the Autoplay module
import "./index.css";
import mission from "../../assets/img/elements/eye.png";
import vision from "../../assets/img/elements/mission.png";
import Responsibility from "../../assets/img/elements/social.png";

function CoreValues() {
  const [value, setValue] = React.useState(0);
  const swiperRef = useRef(null);

  // Sync Swiper with Tabs
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(newValue);
    }
  };

  // Handle slide change and scroll away from Swiper when reaching the first slide
  const handleSlideChange = (swiper) => {
    setValue(swiper.activeIndex);

    // If the user scrolls backward to the first slide, scroll out of the section
    // if (swiper.activeIndex === 0 && swiper.isBeginning) {
    //   setTimeout(() => {
    //     window.scrollBy({ top: -300, behavior: "smooth" });
    //   }, 1500); // Delay for smoother transition
    // }
  };

  // Scroll away from Swiper after reaching the last slide
  // const handleReachEnd = () => {
  //   setTimeout(() => {
  //     window.scrollBy({ top: 300, behavior: "smooth" });
  //   }, 1500); // Delay for smoother transition
  // };

  return (
    <div className="container-fluid core-value-container">
      <Box className="container corevaluessection">
        <Box className="tabs-section my-10">
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="Core Values Tabs"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab className="tab" sx={{ fontSize: { sm: "16px", md: "30px" } }} label="Mission" />
            <Tab className="tab" sx={{ fontSize: { sm: "16px", md: "30px" } }} label="Vision" />
            <Tab className="tab" sx={{ fontSize: { sm: "16px", md: "30px" } }} label="Responsibility" />
          </Tabs>
        </Box>
        <Box className="swiper-section mt-5">
          <Swiper
            ref={swiperRef}
            speed={1200}
            onSlideChange={handleSlideChange}
            // onReachEnd={handleReachEnd}
            spaceBetween={30}
            slidesPerView={1}
            initialSlide={0}
            direction={"horizontal"}
            mousewheel={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
            modules={[Mousewheel, Autoplay]} // Include Autoplay module
            className="mySwiper"
          >
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <div className="row">
                  <div className="col-sm-4 valueparent" data-aos-mirror="true">
                    <Box>
                      <img src={mission} alt="Mission" style={{ borderRadius: "8px", margin: "auto" }} />
                    </Box>
                  </div>
                  <div className="col-sm-8 valueparent2" data-aos-mirror="true" data-aos="fade-left">
                    <Box>
                      <Typography variant="h1">Mission</Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "1rem",
                            md: "22px",
                          },
                        }}
                      >
                        To become the leading company in our industry by innovating and building long-lasting relationships
                        with our customers.
                      </Typography>
                    </Box>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <div className="row">
                  <div className="col-sm-4 valueparent">
                    <Box>
                      <img src={vision} alt="Vision" style={{ borderRadius: "8px" }} />
                    </Box>
                  </div>
                  <div className="col-sm-8 valueparent2">
                    <Box>
                      <Typography variant="h1">Vision</Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "1rem",
                            md: "22px",
                          },
                        }}
                      >
                        To provide exceptional products/services while contributing to the well-being of our customers.
                      </Typography>
                    </Box>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <div className="row">
                  <div className="col-sm-4 valueparent">
                    <Box>
                      <img src={Responsibility} alt="Responsibility" style={{ borderRadius: "8px" }} />
                    </Box>
                  </div>
                  <div className="col-sm-8 valueparent2">
                    <Box>
                      <Typography variant="h1">Responsibility</Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "1rem",
                            md: "22px",
                          },
                        }}
                      >
                        A strong commitment to social and environmental responsibility.
                      </Typography>
                    </Box>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </div>
  );
}

export default CoreValues;

