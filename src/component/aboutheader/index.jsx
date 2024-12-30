import React from "react";
import "./index.css"; // Import the CSS file
import { GrUserPolice } from "react-icons/gr";
import { TfiMoney } from "react-icons/tfi";


const AboutHeader = () => {
  return (
    <div  style={{ backgroundColor: "white",overflow:"hidden" }}>
      <div className="container-fluid parent-container">
      {/* Desktop View */}
      <div className="desktop-view main-container">
      {/* <img src="/about/staring.png" alt="staring"  className="steering_img" /> */}
      <div className="absolute-section">
              <h2>We Are</h2>
              <h4>Available 24X7 For All Supports Needed For Our Customers.</h4>
            </div>
        <div className="content-container">
          {/* Left Section (Text Content) */}
          <div className="text-section">
            <h1>ABOUT US</h1>

            <div style={{ display: "flex", justifyContent: "flex-start", gap:"20px" }}>
              <div className="text-content">
                <img src="/marine.jpg" alt="marine" className="icon-img" />
                <p>
                  <b>
                    High<span style={{ color: "red" }}>Mast</span> Marine
                    Services PVT LTD
                  </b>{" "}
                  was established in Singapore in 2023 by Ex-Technical
                  Directors Mr. Sourav Hore and Mr. Arbind Singh with over 20
                  years of experience. The founders have successfully led turnkey
                  projects for more than 20 vessels in shipyards across Japan,
                  Korea, and China.
                </p>
                <img src="/about/staring.png" alt="staring"   className="steering_img" />
              </div>

              <div style={{ height: "250px",width:"0px", border: "2px solid black" }}></div>

              <div className="text-content">
                <img src="/smiley.jpg" alt="smiley" className="icon-img" />
                <p>
                  <b>We are a highly cost sensitive,</b> and time-focussed and
                  result-driven team, fully equipped to meet mandatory green
                  compliance and offer a wide range of eco-friendly solutions,
                  always delivering as expected to our clients.
                </p>
              </div>
            </div>
           

            {/* staring section */}

            {/* absolute section  */}
           
          </div>



          {/* Right Section (Image with Hover Effect) */}
          <div className="image-section">
          
          <img src="/about.webp"  alt="image" className="about-image"  />

        
        
       
          </div>
        </div>
      
      </div>
      </div>

      {/* Mobile View */}
      <div className="container-fluid mobile-view mobile-container">
         <div className="text-section">
         <h1>ABOUT US</h1>
         {/* Add mobile-specific content here */}
         <div className="text-content" style={{borderBottom:"2px solid white", marginBottom:"20px"}}>
               <GrUserPolice style={{color:"white",fontSize:"30px",marginTop:"10px",marginBottom:"15px"}} />
                <p>
                  <b>
                    High<span style={{ color: "red" }}>Mast</span> Marine
                    Services PVT LTD
                  </b>{" "}
                  was established in Singapore in 2023 by Ex-Technical
                  Directors Mr. Sourav Hore and Mr. Arbind Singh with over 20
                  years of experience. The founders have successfully led turnkey
                  projects for more than 20 vessels in shipyards across Japan,
                  Korea, and China.
                </p>
              </div>
             
              <div className="text-content">
              <TfiMoney style={{color:"white",fontSize:"30px",marginTop:"10px",marginBottom:"12px"}}  />
                <p>
                  <b>We are a highly cost sensitive,</b> and time-focussed and
                  result-driven team, fully equipped to meet mandatory green
                  compliance and offer a wide range of eco-friendly solutions,
                  always delivering as expected to our clients.
                </p>
              </div>
         </div>
         <img src="/about/staring.png" alt="staring"  className="mobile_steering_img" />
        
      </div>
    </div>
  );
};

export default AboutHeader;
