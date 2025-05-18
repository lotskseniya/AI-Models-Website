"use client";
import React from "react";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import heroImage from "../../public/images/hero-section-image.png";
import Hero from "./Hero";


const Main = () => {

  return (
    <main className={styles.mainSection}>
      <div
        className={styles.heroTealGradient}
        style={{
          marginTop: "12dvw",
          marginLeft: "29dvw",
          height: "19vh",
          width: "19vw",
        }}
      />

      <Image
        src={heroImage}
        alt="hero-section-image"
        className="bgImage"
        priority
        style={{
          position: "absolute",
          top: "8dvh",
          left: "54dvw",
          width: "42%",
          height: "auto",
          zIndex: 0,
          objectFit: "cover",
        }}
      />
      <Hero />
      <div
        className={styles.heroBurgundyGradient}
        style={{
          marginTop: "92.531vh",
          marginLeft: "12.378vw",
          height: "7vh",
          width: "8.5vw",
        }}
      />
    </main>
  );
};

export default Main;
