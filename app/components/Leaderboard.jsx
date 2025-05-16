"use client";
import React from "react";
import { useRef, useState, useContext } from "react";
import styles from "../page.module.css";
import "../globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { useLeaderboardContext } from "../context/LeaderboardContext";
import CallToActionButton from "../ui/Button";
import { leaderboardData } from "../constants/index.js";
import neutralRank from "../../public/images/neutral-icon.png";
import riseRank from "../../public/images/rise-icon.png";
import declineRank from "../../public/images/decline-icon.png";
import rocketLeaderboardImage from "../../public/images/rocket-leaderboard-image.png";
import buttonUp from "../../public/images/button-up.png";
import Image from "next/image";

const Leaderboard = () => {
  const rocketImageRef = useRef(null);
  const { isPageTwoVisible, togglePageTwoVisibility } = useLeaderboardContext();
  const titleTextFontSize = useWindowDimensions({ proportion: 635 });
  const buttonSubmitFontSize = useWindowDimensions({ proportion: 1485 });
  const buttonViewMoreFontSize = useWindowDimensions({ proportion: 1685 });
  const descriptionFontSize = useWindowDimensions({ proportion: 1590 });
  const rankIcons = [
    neutralRank,
    riseRank,
    declineRank,
    neutralRank,
    riseRank,
    riseRank,
    declineRank,
    neutralRank,
    declineRank,
    neutralRank,
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rocketImageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
    });

    tl.to(rocketImageRef.current, {
      y: "-100vh",
      duration: 1,
      ease: "power1.inOut",
    });
  }, [isPageTwoVisible])
  

  return (
    <div
      className={styles.leaderboardContainer}
      style={isPageTwoVisible ? { height: "240dvh" } : { height: "140dvh" }}
    >
      <div className={styles.leaderboardTitleContainer}>
        <h3 style={{ fontWeight: 500, fontSize: `${titleTextFontSize}rem` }}>
          LLM Leaderboard
        </h3>

        <CallToActionButton
          styles={{
            width: "15dvw",
            height: "3.6dvw",
            padding: "1dvh",
            fontSize: `${buttonSubmitFontSize}rem`,
            fontWeight: "500",
            textDecoration: "none",
            fontFamily: "Inter, sans-serif",
          }}
          className={`${styles.callToActionButton}`}
          link="/submitModel"
          text="Submit your model"
        />
      </div>

      <p
        className={styles.leaderboardDescription}
        style={{ fontSize: `${descriptionFontSize}rem` }}
      >
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>

      <table className={styles.leaderboardTable}>
        <thead className={styles.leaderboardTableHeader}>
          <tr>
            <th className={styles.leaderboardRankIcon}></th>
            <th className={styles.leaderboardRank}>#</th>
            <th className={styles.leaderboardTableModelName}>Model Name</th>
            <th className={styles.leaderboardData}>Average</th>
            <th className={styles.leaderboardData}>ARC</th>
            <th className={styles.leaderboardData}>HellaSwag</th>
            <th className={styles.leaderboardData}>MMLU</th>
            <th className={styles.leaderboardData}>TruthfulQA</th>
            <th className={styles.leaderboardData}>Winogrande</th>
            <th className={styles.leaderboardData}>GSM8K</th>
            <th className={styles.leaderboardData}>Earnings</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => (
            <tr
              key={index + leaderboardData.length}
              className={styles.leaderboardTableRow}
            >
              <td className={styles.leaderboardRankIcon}>
                <Image
                  src={rankIcons[index]}
                  alt="Rank Icon"
                  width={20}
                  height={20}
                  style={{ padding: "1.5rem" }}
                />
              </td>
              <td className={styles.leaderboardRank}>
                {index + leaderboardData.length}
              </td>
              <td className={styles.leaderboardTableModelName}>
                Model_Name123
              </td>
              <td className={styles.leaderboardData}>81.22</td>
              <td className={styles.leaderboardData}>81.22</td>
              <td className={styles.leaderboardData}>81.22</td>
              <td className={styles.leaderboardData}>81.22</td>
              <td className={styles.leaderboardData}>81.22</td>
              <td className={styles.leaderboardData}>81.22</td>
              <td className={styles.leaderboardData}>81.22</td>
              <td
                className={styles.leaderboardData}
                style={{ paddingRight: "1.5rem" }}
              >
                2,854,004
              </td>
            </tr>
          ))}

          {isPageTwoVisible ? (
            <>
              {Array.from({ length: 10 }, (_, index) => (
                <tr
                  key={index + leaderboardData.length}
                  className={styles.leaderboardTableRow}
                >
                  <td className={styles.leaderboardRankIcon}>
                    <Image
                      src={rankIcons[index]}
                      alt="Rank Icon"
                      width={20}
                      height={20}
                      style={{ padding: "1.5rem" }}
                    />
                  </td>
                  <td className={styles.leaderboardRank}>
                    {index + 11}
                  </td>
                  <td className={styles.leaderboardTableModelName}>
                    Model_Name123
                  </td>
                  <td className={styles.leaderboardData}>81.22</td>
                  <td className={styles.leaderboardData}>81.22</td>
                  <td className={styles.leaderboardData}>81.22</td>
                  <td className={styles.leaderboardData}>81.22</td>
                  <td className={styles.leaderboardData}>81.22</td>
                  <td className={styles.leaderboardData}>81.22</td>
                  <td className={styles.leaderboardData}>81.22</td>
                  <td
                    className={styles.leaderboardData}
                    style={{ paddingRight: "1.5rem" }}
                  >
                    2,854,004
                  </td>
                </tr>
              ))}
            </>
          ) : null}
        </tbody>
      </table>

      <button
        style={{
          fontSize: `${buttonViewMoreFontSize}rem`,
          cursor: "pointer",
          marginInlineStart: isPageTwoVisible ? "90%" : "0rem",
        }}
        className={styles.viewMoreButton}
        onClick={() => {
         togglePageTwoVisibility();
        }}
      >
        {isPageTwoVisible ? (
          <Image
            src={buttonUp}
            alt="Button Up"
            width={40}
            height={40}
            style={{ padding: "1.5rem" }}
          />
        ) : "View More"}
      </button>

      {isPageTwoVisible ? ( 
        <div>
          <Image
            src={rocketLeaderboardImage}
            alt="Rocket Leaderboard"
            width={200}
            height={600}
            style={{ 
              position: "absolute",
              left: "19dvw",
              top: "79dvw",
              zIndex: 4,
            }}
            ref={rocketImageRef}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Leaderboard;
