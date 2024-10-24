// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./index.css"; 
// import shipImage1 from "../../assets/img/elements/serviceimg1.jpg";
// import shipImage2 from "../../assets/img/elements/serviceimg2.jpg";
// import shipImage3 from "../../assets/img/elements/serviceimg3.jpg";
// import shipImage4 from "../../assets/img/elements/serviceimg4.jpg";
// import shipImage5 from "../../assets/img/elements/service5.jpg";

// gsap.registerPlugin(ScrollTrigger);

// const Servicesscroll = () => {
//   const textRef = useRef(null);
//   const imgContainerRef = useRef(null);
//   const containerParentRef = useRef(null); 


//   const images = [shipImage1, shipImage2, shipImage3, shipImage4, shipImage5];

//   const textItems = [
//     "Engine overhauling",
//     "Marine electrical & <br />automation",
//     "Cranes service",
//     "Piping & mechanical<br />work",
//     "Hydraulic systems<br />& control repair",
//   ];

//   useEffect(() => {
//     const texts = textRef.current.querySelectorAll("p");

//     // Animate text
//     gsap.to(texts, {
//       backgroundPositionX: "0%",
//       stagger: 1,
//       scrollTrigger: {
//         trigger: textRef.current,
//         scrub: 1,
//         start: "top center",
//         end: "bottom center",
//       },
//     });


//     gsap.to(imgContainerRef.current, {
//       x: "-100vw",
//       scrollTrigger: {
//         trigger: textRef.current,
//         scrub: 1,
//         start: "top center",
//         end: "bottom center",
//       },
//     });

//     gsap.to(".your-target-class", {
  
//       scrollTrigger: {
//         trigger: textRef.current, 
//         scrub: 1,
//         start: "top center",
//         end: "bottom center",
//       },
//     });
//   }, []);

//   return (
//     <div className="containerparent your-target-class" ref={containerParentRef}>
//       <div className="img-container " ref={imgContainerRef}>
//         {images.map((src, index) => (
//           <div className="row">
//             <div className="col-sm-4 ">
//               <div className="image-wrapper">
//                 {" "}
           
//                 <img
//                   key={index}
//                   src={src}
//                   alt={`Service ${index + 1}`}
//                   className="scroll-img"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text container" ref={textRef}>
//         {textItems.map((text, index) => (
//           <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Servicesscroll;

// duplicate
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css"; 
import shipImage1 from "../../assets/img/elements/serviceimg1.jpg";
import shipImage2 from "../../assets/img/elements/serviceimg2.jpg";
import shipImage3 from "../../assets/img/elements/serviceimg3.jpg";
import shipImage4 from "../../assets/img/elements/serviceimg4.jpg";
import shipImage5 from "../../assets/img/elements/service5.jpg";

gsap.registerPlugin(ScrollTrigger);

const Servicesscroll = () => {
  const textRef = useRef(null);
  const imgContainerRef = useRef(null);
  const containerParentRef = useRef(null); 


  const images = [shipImage1, shipImage2, shipImage3, shipImage4, shipImage5];

  const textItems = [
    "Engine <br/> overhauling",
    "Marine electrical <br />& automation",
    "Cranes service",
    "Piping & mechanical<br />work",
    "Hydraulic systems<br />& control repair",
  ];

  useEffect(() => {
    const texts = textRef.current.querySelectorAll("p");


    gsap.to(texts, {
  
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: textRef.current,
        scrub: 1,
        start: "top center",
        end: "bottom center",
      },
    });


    gsap.to(imgContainerRef.current, {
      x: "-100vw",
      scrollTrigger: {
        trigger: textRef.current,
        trigger: containerParentRef.current,
        scrub: 1,
        start: "top center ",
        end: "bottom center",
      },
    });


  }, []);

  return (
    <div className="containerparent your-target-class" ref={containerParentRef}>
      <div className="img-container " ref={imgContainerRef}>
        {images.map((src, index) => (
          <div className="row">
            <div className="col-sm-4 ">
              <div className="image-wrapper">
                {" "}
           
                <img
                  key={index}
                  src={src}
                  alt={`Service ${index + 1}`}
                  className="scroll-img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text container" ref={textRef}>
        {textItems.map((text, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>
    </div>
  );
};

export default Servicesscroll;

