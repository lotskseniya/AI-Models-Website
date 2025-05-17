"use client";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../page.module.css";
import CallToActionButton from "../ui/Button";
import cometImage from "../../public/images/about-parallax.png";
import useWindowDimensions from "../hooks/useWindowDimentions";

const About = () => {
  const triggerAboutRef = useRef(null);
  const imageAboutRef = useRef(null);
  const buttonCallFontSize = useWindowDimensions({ proportion: 1590 });
  const titleTextFontSize = useWindowDimensions({ proportion: 485 });
  const textFontSize = useWindowDimensions({ proportion: 1290 });
  const imageWidth = useWindowDimensions({ proportion: 5 });
  const imageHeight = useWindowDimensions({ proportion: 5 });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const pin = gsap.fromTo(
      imageAboutRef.current,
      {
        translateX: "0vw",
        translateY: "0vh",
      },
      {
        translateX: "300vw",
        translateY: "300vh",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerAboutRef.current,
          start: "top top",
          end: "+=100",
          scrub: 0.6,
          pin: ".aboutTextContainer",
          invalidateOnRefresh: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      className={styles.about}
      id="about"
    >
      <div ref={triggerAboutRef}>
        <section
        >
          <Image
            src={cometImage.src}
            alt="Comet-Image"
            width={imageWidth}
            height={imageHeight}
            style={{
              objectFit: "contain",
              objectPosition: "center",
              zIndex: "1",
              marginTop: "-5dvh",
              marginLeft: "5dvw",
            }}
            ref={imageAboutRef}
          />
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "rgba(255, 255, 255, 1)",
            alignItems: "start",
            padding: "3rem 5rem 0 5rem",
            width: "48.25vw",
          }}
          className="aboutTextContainer"
        >
          <h2
            style={{
              fontSize: `${titleTextFontSize}rem`,
              fontWeight: "500",
              lineHeight: "4.5dvw",
              marginBlockStart: "0%",
              marginBlockEnd: "0%",
            }}
          >
            Crowdsourcing our collective intelligence to build the best AI
          </h2>

          <p
            style={{
              fontSize: `${textFontSize}rem`,
            }}
            className={styles.aboutSectionText}
          >
            Open source AIs have been lagging in development behind OpenAI with
            billions of dollars. <br />
            We run competitions between AI models to find and pay for the best
            AI model. <br />
            Users will be able to access the best AI models.
          </p>

          <CallToActionButton
            styles={{
              width: "16dvw",
              height: "4dvw",
              padding: "1dvh",
              fontSize: `${buttonCallFontSize}rem`,
              fontWeight: "500",
              textDecoration: "none",
              marginTop: "1.75rem",
              fontFamily: "Inter, sans-serif",
            }}
            className={`${styles.callToActionButton}`}
            link="/toBuySaltAI"
            text="Use the cutting edge AI"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
