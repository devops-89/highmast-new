import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ThankYou = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="container-fluid px-0">
        <section
          style={{ height: "100vh" }}
          className="thankyoubanner servicesbanner  secOne2 "
        >
          <div className="servicesbanneroverlay"></div>{" "}
          <div className="container bannercontainer">
            <div className="section-title desktop">
              <h1>
                <p className="rstoftext text-center">
                  <span className=""> Thank you! </span>{" "}
                </p>
              </h1>
              <p className="thank-you-message">
                Your booking has been successfully completed.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container thank-you-content allpadding">
        <div className="col-sm-6 mx-auto allpadding thankyouborder px-5" data-aos="fade-right" >
          <div className="thank-you-details">
            <ThumbUpIcon  sx={{color:"red",marginBottom:"20px"}} />
            <p>
              We appreciate your trust in our service. A confirmation email with
              the booking details has been sent to your registered email
              address. If you have any questions, please feel free to contact
              our support team.
            </p>
            <div className="thankyoubtnparent">
              <button className="allbutton">
              <Link to="/" >Back to Home</Link>  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
