import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import shipImage1 from "../../assets/img/elements/retrofitservice.jpg";
import shipImage2 from "../../assets/img/elements/serviceimg2.jpeg";
import shipImage3 from "../../assets/img/elements/ampservice.jpg";
import shipImage4 from "../../assets/img/elements/projectsupervisionservice.jpg";
import vesselsimg from "../../assets/img/elements/serviceimg5.jpg";

import shipImage6 from "../../assets/img/elements/marineautomationservice.jpg";

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
    vesselsimg,
    shipImage6,
  ];
  const textItems = [
    "Retrofit Led Power <br/> Saving Solutions",

    "Scrubber & Ccs Commisioning ",
    "Alternate Marine Power <br/> AMP Solutions",
    "Project Supervision Shipbuilding & <br/> Repairs",

    "Vessel 3D scanning <br/> & Production design",
    "Marine Electrical <br/> & Automation",
  ];
  // Define the corresponding URLs for redirection
  const redirectUrls = [
    "/retrofit-led-power-saving-solutions",
    "/scrubber-and-ccs-commisioning",
    "/amp-solutions-and-vdf-retrofit",
    "/project-supervision-shipbuilding-and-ship-repairs",
    "/vessel-3d-scanning-and-production-design",
    "/marine-electrical-&-automation",
  ];

  const handleRedirect = (url) => {
    window.location.href = url; // Redirect to the specified URL
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop Animations
    mm.add("(min-width: 769px)", () => {
      const texts = textRef.current.querySelectorAll("p");

      gsap.to(texts, {
        backgroundPositionY: "0%",
        opacity: 1,
        // y: -1600,
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
        // x: "-350vw",
        x: "-350vw",

        scrollTrigger: {
          trigger: containerParentRef.current,
          pin: true,
          scrub: 2,
          start: "center center",
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
          scrub: 8,
          start: "center center ",
          end: `+=${containerWidth * 3.2}`, // Extended scroll range
          kill: true,
        },
      });

      const texts = textRef.current.querySelectorAll("p");

      gsap.to(texts, {
        backgroundPositionY: "0%",
        opacity: 1,
        y: -1900, // Adjusted for mobile
        stagger: 0.05, // Slower stagger for mobile
        scrollTrigger: {
          trigger: containerParentRef.current,
          scrub: 20,
          start: "center center",
          end: `+=${containerWidth * 3.2}`, // Match the extended scroll range
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
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: text }}
            onClick={() => handleRedirect(redirectUrls[index])} // Add click handler
            style={{ cursor: "pointer" }} // Change cursor to pointer to indicate clickable
          />
          // <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>
    </div>
  );
};

export default Servicesscroll;
