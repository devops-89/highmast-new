import React,{useEffect} from 'react'
import AOS from 'aos';
import "./GreenText.css";
import "aos/dist/aos.css";
const GreenText = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      mirror: true, 
      anchorPlacement: "top-bottom", 
    })
  })
  return (
    <>
   
    <h2 className="first " data-aos="flip-left"
    
     data-aos-duration="2000" >GREEN</h2>
    <h2 className="second" data-aos="flip-left"
   
     data-aos-duration="2000" >GREEN</h2>
 
   
    </>
  )
}

export default GreenText