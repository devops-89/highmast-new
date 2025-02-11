import React,{useEffect} from "react";
import "./index.css"; // Import the CSS file
import { GrUserPolice } from "react-icons/gr";
import { TfiMoney } from "react-icons/tfi";
import AOS from "aos";


const AboutHeader = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      mirror: true, 
      anchorPlacement: "top-bottom", 
    })
  })

  return (
    <div  style={{ backgroundColor: "white",overflow:"hidden" }}>
      <div className="container-fluid parent-container">
      {/* Desktop View */}
      <div className="desktop-view about-main-container">
      {/* <img src="/about/staring.png" alt="staring"  className="steering_img" /> */}
     
        <div className="content-container">
          {/* Left Section (Text Content) */}
          <div className="text-section">
            <h1 data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">ABOUT US</h1>

            <div style={{ display: "flex",flexDirection:"column", justifyContent: "flex-start", gap:"20px" }}>
              <div className="text-content" data-aos="fade-right">
                
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

            

              <div className="text-content" data-aos="fade-left">
               
                <p>
                  <b>We are a highly cost sensitive,</b> and time-focussed and
                  result-driven team, fully equipped to meet mandatory green
                  compliance and offer a wide range of eco-friendly solutions,
                  always delivering as expected to our clients.
                </p>
                <div className="absolute-section" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <h3>We Are</h3>
              <h6>Available 24X7 For All Supports Needed For Our Customers.</h6>
            </div>
              </div>
              
            </div>
           

            {/* staring section */}

            {/* absolute section  */}
           
          </div>



          {/* Right Section (Image with Hover Effect) */}
          <div className="image-section" >
          
          <img data-aos="fade-left" src="https://media.istockphoto.com/id/1287624948/photo/container-ship-sailing-in-sea.jpg?s=612x612&w=0&k=20&c=jmv0k_rko5R4R8wOVEnxUjt4CQkEDn-tLz5_-__SgLM="  alt="image" className="about-image"  />

        
        
       
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
        
        
      </div>
    </div>
  );
};

export default AboutHeader;