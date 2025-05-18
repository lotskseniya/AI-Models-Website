"use client";
import React, { useRef }  from "react";
import { useLeaderboardContext } from "../context/LeaderboardContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  

  for (let i = 1; i <= 5; i++) {
    imageSection.push(
      <div
        ref={(ref) => (imageRef.current[i - 1] = ref)}
        key={i}
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


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const pin = gsap.fromTo(
      imageContainerRef.current,
      {
        translateX: "0vw",
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "50% 20%",
          end: "+=400",
          scrub: 2,
          pin: true,
          invalidateOnRefresh: true,
          smooth: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  });

  return (
    <div
      className="projectsSliderContainer"
    >
      <div ref={triggerRef}

      >
        <section className="projectsTitleSection"
          style={
            isPageTwoVisible
              ? (windowWidth >= 1080 && windowHeight >= 2640
                  ? { top: "55rem" }
                  : { top: "25rem" })
              : { top: "-5dvw" }
          }
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
        style={ isPageTwoVisible 
          ? (windowWidth >= 1080 && windowHeight >= 2640
                  ? { top: "55rem" }
                  : { top: "25rem" })
        : { marginTop: "8dvw" } }
      
        >
          {imageSection}
        </section>
      </div>
    </div>
  );
};

export default ParallaxProjects;
