// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./index.css";
// import shipImage1 from "../../assets/img/elements/serviceimg1.jpg";
// import shipImage2 from "../../assets/img/elements/serviceimg2.jpg";
// import shipImage3 from "../../assets/img/elements/serviceimg3.jpg";
// import shipImage4 from "../../assets/img/elements/serviceimg4.jpg";
// import shipImage5 from "../../assets/img/elements/service5.jpg";
// import shipImage6 from "../../assets/img/elements/service5.jpg";

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
//     shipImage6,
//   ];
//   const textItems = [
//     "Retrofit Led Power <br/> Saving Solutions",
//     "Marine Electrical <br/> & Automation",
//     "Scrubber & Ccs Commisioning ",
//     "Alternate Marine Power <br/> AMP Solutions",
//     "Project Supervision Shipbuilding & <br/> Repairs",
//     "Vessel 3D scanning <br/> & Production design",
//   ];

//   useEffect(() => {
//     const texts = textRef.current.querySelectorAll("p");

//     gsap.to(texts, {
//       backgroundPositionY: "0%",
//       opacity: 1,

//       y: -1600,

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
//       x: "-350vw",
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
import shipImage6 from "../../assets/img/elements/service5.jpg";

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
    shipImage6,
  ];
  const textItems = [
    "Retrofit Led Power <br/> Saving Solutions",
    "Marine Electrical <br/> & Automation",
    "Scrubber & Ccs Commisioning ",
    "Alternate Marine Power <br/> AMP Solutions",
    "Project Supervision Shipbuilding & <br/> Repairs",
    "Vessel 3D scanning <br/> & Production design",
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop Animations
    mm.add("(min-width: 769px)", () => {
      const texts = textRef.current.querySelectorAll("p");

      gsap.to(texts, {
        backgroundPositionY: "0%",
        opacity: 1,
        y: -1600,
        stagger: 0.03,
        scrollTrigger: {
          trigger: containerParentRef.current,
          scrub: 18,
          start: "top center",
          end: "bottom top",
        },
      });

      gsap.to(imgContainerRef.current, {
        x: "-350vw",
        scrollTrigger: {
          trigger: containerParentRef.current,
          pin: true,
          scrub: 2,
          start: "top top",
          end: "+=1000",
        },
      });
    });

    mm.add("(max-width: 768px)", () => {
      const imagesCount = images.length; // Total number of images
      const containerWidth = 100 * imagesCount; // Total scrollable width

      // Lock scrolling until all images scroll
      gsap.to(imgContainerRef.current, {
        x: `-${containerWidth}vw`, // Move all images out of view
        scrollTrigger: {
          trigger: containerParentRef.current,
          pin: true, // Lock the scroll
          scrub: 2,
          start: "top top",
          end: `+=${containerWidth * 15}`, // Extended scroll range
        },
      });

      const texts = textRef.current.querySelectorAll("p");

      gsap.to(texts, {
        backgroundPositionY: "0%",
        opacity: 1,
        y: -800, // Adjusted for mobile
        stagger: 0.05, // Slower stagger for mobile
        scrollTrigger: {
          trigger: containerParentRef.current,
          scrub: 10,
          start: "top center",
          end: `+=${containerWidth * 15}`, // Match the extended scroll range
        },
      });
    });

    return () => {
      mm.revert(); // Clean up
    };
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
