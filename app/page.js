"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import "./globals.css";
import { LeaderboardContextProvider } from "./context/LeaderboardContext";
import Leaderboard from "./components/Leaderboard";
import Contact from "./components/Contact";
import Main from "./components/Main";
import About from "./components/About";
import ParallaxProjects from "./components/ParallaxProjects";
import Footer from "./components/Footer";

export default function Home(
  
) {
  // State to manage the mounting of the page
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <div className={styles.pageContainer}>
        <LeaderboardContextProvider>
          <Main />
          <About />
          <Leaderboard />
          <ParallaxProjects />
          <Contact />
          <Footer />
        </LeaderboardContextProvider>
      </div>
    )
  );
}
