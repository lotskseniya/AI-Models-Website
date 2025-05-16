"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "../page.module.css";
import CallToActionButton from "../ui/Button";
import StatisticsContainer from "../ui/StatisticsContainer";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimentions";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  // responsive fontSizes for different elements, using my custom useWindowDimensions hook
  const headerFontSize = useWindowDimensions({ proportion: 240 });
  const textFontSize = useWindowDimensions({ proportion: 1390 });
  const buttonCallFontSize1 = useWindowDimensions({ proportion: 1290 });
  const buttonCallFontSize2 = useWindowDimensions({ proportion: 1790 });
  
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

    const showStatisticsData = () => {
    if (window.scrollY > 60) {
      if (window.scrollY > lastScrollY) {
        // if scroll down show the statistics data
        setShow(true);
      } else {
        // if scroll up show the statistics data
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };
    }

  useEffect(() => {
    window.addEventListener("scroll", showStatisticsData);

    return () => {
      window.removeEventListener("scroll", showStatisticsData);
    };
  }, [lastScrollY]);
 
  return (
    <div className={styles.hero} 
    style={{ 
      position: "absolute", 
      marginTop: "15dwh",
      height: "100dvh",
      }}>

      <div className={styles.heroLinks}>
        <Link
          href="/leaderboard"
          style={{
            textDecoration: "none",
            fontWeight: "400",
            fontSize: `${buttonCallFontSize2}rem`,
            height: "3rem",
          }}
          className={`${inter.className}`}
        >
          LLM Leaderboard
        </Link>

        <CallToActionButton
          styles={{
            width: "8dvw",
            height: "3dvw",
            padding: "1dvh",
            fontSize: `${buttonCallFontSize2}rem`,
            fontWeight: "400",
            textDecoration: "none",
            marginTop: "2rem",
            marginLeft: "3dvw",
          }}
          className={`${styles.callToActionButton} ${inter.className}`}
          link="/toBuySaltAI"
          text="Buy Salt AI"
        />
      </div>

      <div className={styles.heroTextContainer}>
        <h3
          className={styles.heroHeader}
          style={{ fontSize: `${headerFontSize}rem` }}
        >
          A new economic primitive <br /> for funding decentralized AI
        </h3>
        <p
          className={`${styles.heroText} ${inter.className}`}
          style={{ fontSize: `${textFontSize}rem`}}
        >
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>

        <div style={{ marginTop: "2.5dvh" }}>
          <CallToActionButton
            styles={{
              width: "12dvw",
              height: "4.2dvw",
              padding: "1dvh",
              fontSize: `${buttonCallFontSize1}rem`,
              fontWeight: "500",
              textDecoration: "none",
            }}
            className={`${styles.callToActionButton} ${inter.className}`}
            link="/toBuySaltAI"
            text="Buy Salt AI"
          />
        </div>
      </div>

      <div>
     { show ? (
         <StatisticsContainer />
     ) : null }
      </div>

    </div>
  );
};

export default Hero;
