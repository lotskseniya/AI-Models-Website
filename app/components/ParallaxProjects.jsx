"use client";
import React, { useRef }  from "react";
import { useLeaderboardContext } from "../context/LeaderboardContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
<<<<<<< HEAD
import { ScrollSmoother } from "gsap/ScrollSmoother";
=======
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
import "../globals.css";
import project1 from "../../public/images/projects-1.png";
import project2 from "../../public/images/projects-2.png";
import project3 from "../../public/images/projects-3.png";
import project4 from "../../public/images/projects-4.png";
import project5 from "../../public/images/projects-5.png";
import useWindowDimensions from "../hooks/useWindowDimentions";

const ParallaxProjects = () => {
  const { isPageTwoVisible, togglePageTwoVisibility } = useLeaderboardContext();
  const images = [project1, project2, project3, project4, project5];
  const imageWidth = useWindowDimensions({ proportion: 32 });
  const projectsTitle = useWindowDimensions({ proportion: 580 });
  const imageRef = useRef([]);
  const imageContainerRef = useRef();
  const triggerRef = useRef();
  let imageSection = [];
  

  for (let i = 1; i <= 5; i++) {
    imageSection.push(
      <div
        ref={(ref) => (imageRef.current[i - 1] = ref)}
        key={i}
<<<<<<< HEAD
=======
        style={{}}
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
        id={`image-${i}`}
        className="scrollSectionTest"
      >
        <img
          src={`${images[i - 1].src}`}
          style={{
            width: "auto",
            height: imageWidth,
          }}
        />
      </div>
    );
  }

<<<<<<< HEAD

  gsap.registerPlugin(ScrollTrigger);


=======
  gsap.registerPlugin(ScrollTrigger);

>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
  useGSAP(() => {
    const pin = gsap.fromTo(
      imageContainerRef.current,
      {
        translateX: "0vw",
      },
      {
<<<<<<< HEAD
        translateX: "-400vw",
=======
        translateX: "-300vw",
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
        ease: "none",
        duration: 1.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "50% 20%",
          end: "+=400",
<<<<<<< HEAD
          scrub: 2,
=======
          scrub: 1,
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
          pin: true,
          invalidateOnRefresh: true,
          smooth: 1,
        },
      }
    );
    return () => {
      pin.kill();
<<<<<<< HEAD

=======
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
    };
  });

  return (
    <div
      className="projectsSliderContainer"
    >
      <div ref={triggerRef}
<<<<<<< HEAD

      >
        <section className="projectsTitleSection"
         style={ isPageTwoVisible ? { top: "25rem" } : { top: "-5dvw" } }
=======
      >
        <section className="projectsTitleSection"
        style={ isPageTwoVisible ? { top: "15dvw" } : { top: "-5dvw" } }
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
        >
          <p
            className="projectsTitleTest"
            style={{
              fontSize: `${projectsTitle}rem`,
            }}
          >
            Projects integrated into the Arrakis AI Ecosystem
          </p>
        </section>

        <section className="projectsSection" ref={imageContainerRef}
<<<<<<< HEAD
        style={ isPageTwoVisible ? { marginTop: "25rem" } : { marginTop: "8dvw" } }
      
=======
        style={ isPageTwoVisible ? { marginTop: "20dvw" } : { marginTop: "8dvw" } }
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
        >
          {imageSection}
        </section>
      </div>
    </div>
  );
};

export default ParallaxProjects;
