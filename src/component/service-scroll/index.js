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

//   const images = [
//     shipImage1,
//     shipImage2,
//     shipImage3,
//     shipImage4,
//     shipImage5,
//     // shipImage6,
//   ];
//   const textItems = [
//     "Engine <br/> Overhauling",
//     "Marine Electrical <br />& Automation",
//     "Cranes Service ",
//     "Marine and Offshore",
//     "Hydraulic & <br/> Power",
//   ];

//   useEffect(() => {
//     const texts = textRef.current.querySelectorAll("p");

//     gsap.to(texts, {
//       backgroundPositionY: "0%",
//       opacity: 1,

//       y: -1400,
     
//       stagger: 0.03, 

//       scrollTrigger: {
//         trigger: containerParentRef.current,
//         scrub: 18,
//         start: "top center",
//         end: "bottom top",
//       },
//     });

//     texts.forEach((text, index) => {
//       gsap.fromTo(
//         text,
//         { backgroundPositionY: "100%", opacity: 1 }, 
//         {
//           backgroundPositionY: "0%", 
//           opacity: 1,
//           duration: 1.5, 
//           delay: index * 1.2, 
//           scrollTrigger: {
//             trigger: containerParentRef.current,
//             scrub: 18,
//             start: "top center",
//             end: "bottom top",
//           },
//         }
//       );
//     });
//     gsap.to(imgContainerRef.current, {
//       x: "-300vw",
//       scrollTrigger: {
//         stagger: {
//           amount: 0.005,
//           from: "start",
//         },
//         trigger: containerParentRef.current,
//         pin: true,
//         scrub: 2,
//         start: "top top",
//         end: "+=1000",
//       },
//     });

//     ScrollTrigger.create({
//       trigger: containerParentRef.current,

//       start: "top top",
//       end: "bottom+=100% top",
//       scrub: 2,
//     });
//   }, []);

//   return (
//     <div className="containerparent allpadding" ref={containerParentRef}>
//       <div className="img-container" ref={imgContainerRef}>
//         {images.map((src, index) => (
//           <div className="row" key={index}>
//             <div className="col-sm-4">
//               <div className="image-wrapper">
//                 <img
//                   src={src}
//                   alt={`Service ${index + 1}`}
//                   className="scroll-img"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text container " ref={textRef}>
//         {textItems.map((text, index) => (
//           <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Servicesscroll;
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

  const images = [
    shipImage1,
    shipImage2,
    shipImage3,
    shipImage4,
    shipImage5,
    // shipImage6,
  ];
  const textItems = [
    "Engine <br/> Overhauling",
    "Marine Electrical <br />& Automation",
    "Cranes Service ",
    "Marine and Offshore",
    "Hydraulic & <br/> Power",
  ];

  useEffect(() => {
    const texts = textRef.current.querySelectorAll("p");

    gsap.to(texts, {
      backgroundPositionY: "0%",
      opacity: 1,

      y: -1400,
     
      stagger: 0.03, 

      scrollTrigger: {
        trigger: containerParentRef.current,
        scrub: 18,
        start: "top center",
        end: "bottom top",
      },
    });

    texts.forEach((text, index) => {
      gsap.fromTo(
        text,
        { backgroundPositionY: "100%", opacity: 1 }, 
        {
          backgroundPositionY: "0%", 
          opacity: 1,
          duration: 1.5, 
          delay: index * 1.2, 
          scrollTrigger: {
            trigger: containerParentRef.current,
            scrub: 18,
            start: "top center",
            end: "bottom top",
          },
        }
      );
    });
    gsap.to(imgContainerRef.current, {
      x: "-300vw",
      scrollTrigger: {
        stagger: {
          amount: 0.005,
          from: "start",
        },
        trigger: containerParentRef.current,
        pin: true,
        scrub: 2,
        start: "top top",
        end: "+=1000",
      },
    });

    ScrollTrigger.create({
      trigger: containerParentRef.current,

      start: "top top",
      end: "bottom+=100% top",
      scrub: 2,
    });
  }, []);

  return (
    <div className="containerparent allpadding" ref={containerParentRef}>
      <div className="img-container" ref={imgContainerRef}>
        {images.map((src, index) => (
          <div className="row" key={index}>
            <div className="col-sm-4">
              <div className="image-wrapper">
                <img
                  src={src}
                  alt={`Service ${index + 1}`}
                  className="scroll-img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text container " ref={textRef}>
        {textItems.map((text, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>
    </div>
  );
};

export default Servicesscroll;

