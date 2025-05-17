"use client";
import React from "react";
import { data } from "../constants/index.js";
import styles from "../page.module.css";
import useWindowDimensions from "../hooks/useWindowDimentions";

const StatisticsContainer = () => {
  const titleFontSize = useWindowDimensions({ proportion: 1290 });
 const statisticsFontSize = useWindowDimensions({ proportion: 450 });

  return (
    <div className={styles.statisticsSection}>
        {data.map((item, index) => (
          <div key={index} className={styles.statisticsItem}
            style={{
<<<<<<< HEAD
              width: "29dvw",
               height: "10dvw",
               gap: "1dvh",
               padding: "0.5dvw 0",
=======
              width: "29.5dvw",
               height: "10dvw",
               gap: "1dvh",
>>>>>>> a15dfb163178e1bb47e1274b294a3afbeb368e80
            }}
          >
            <h4
              style={{
                fontSize: `${statisticsFontSize}rem`,
                fontWeight: "600",
               marginBottom: "0rem",
                marginTop: "0rem",              
              }}
            >
              {item.statistics}
            </h4>
            <p
              style={{
                fontSize: `${titleFontSize}rem`,
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
    </div>
  );
};

export default StatisticsContainer;
