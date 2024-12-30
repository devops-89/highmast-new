import React, { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import majorserviceimg from "../../assets/img/elements/handshakingimg.webp";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import certificationimg1 from "../../assets/img/elements/certificationimg1.png";
import certificationimg2 from "../../assets/img/elements/certificationimg2.png";
import certificationimg3 from "../../assets/img/elements/certificationimg3.png";
import certificationimg4 from "../../assets/img/elements/certificationimg4.png";

const Majorservice = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <ParallaxProvider>
      <div className="container-fluid" style={{backgroundColor:"#2A5962"}}>
      <div className="container allpadding">
        <div className="row align-items-center">
          <div className="col-sm-4 text-left ">
            <div className="majorsimgerviceparent">
              {/* Static image or content */}
              <img
                data-aos="zoom-in-down"
                className="majorimgservice"
                src={majorserviceimg}
                alt="Service"
              />
            </div>
          </div>
          <div className="col-sm-8 majorscrollable-content">
            {/* Parallax effect on the content */}
            <Parallax>
              <div>
                {/* Your scrollable content */}
                <div className="row">
                  <div className="col-sm-6 py-5 majortopbottom">
                    <div className="majorright majorheight ">
                      <div className="certificationparent" data-aos="fade-down">
                        <img
                          className="certificationimg"
                          src={certificationimg1}
                        ></img>
                      </div>{" "}
                      <p className="majorgpara">
                        ISO 9001 instils quality awareness in all of our marina
                        service modules that then can drive operational
                        efficiency and client satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 py-5 majortopbottom">
                    <div className=" majorheight">
                      <div className="certificationparent" data-aos="fade-down">
                        <img
                          className="certificationimg"
                          src={certificationimg2}
                        ></img>
                      </div>
                      <p className="majorgpara">
                        Emphasis on the safety and health of our crew and
                        clients in terms of safe working conditions across all
                        our operations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 py-5 majorbottom">
                    <div className="majorright majorheight ">
                      <div className="certificationparent" data-aos="fade-down">
                        <img
                          className="certificationimg"
                          src={certificationimg3}
                        ></img>
                      </div>
                      <p className="majorgpara">
                        ISO 14001 enhances our environmental responsibility,
                        guiding sustainable practices and reducing our
                        ecological impact.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 py-5 majorbottom">
                    <div className=" majorheight">
                      <div className="certificationparent" data-aos="fade-down">
                        <img
                          className="certificationimg"
                          src={certificationimg4}
                        ></img>
                      </div>
                      <p className="majorgpara">
                        bizSAFE certification depicts our proactive approach to
                        safety at the workplace and regulatory compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
      </div>
    </ParallaxProvider>
  );
};

export default Majorservice;
