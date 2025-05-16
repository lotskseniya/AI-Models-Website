"use client"
import React from 'react';
import styles from "../page.module.css";
import useWindowDimensions from "../hooks/useWindowDimentions";
import CallToActionButton from "../ui/Button";
import Image from 'next/image';
import contactImage from "../../public/images/contact-section-image.png";

const Contact = () => {

   const titleTextFontSize = useWindowDimensions({ proportion: 635 });
    const textTextFontSize = useWindowDimensions({ proportion: 1560 });
    const buttonCallFontSize = useWindowDimensions({ proportion: 1290 });
    const imageWidth = useWindowDimensions({ proportion: 4 });
    const imageHeight = useWindowDimensions({ proportion: 4 });

  return (
    <div className={styles.contactContainer}>
      <div
      className={styles.contactDescription}
      >
        <h3
        style={{
        fontWeight: "500",
        fontSize: `${titleTextFontSize}rem`,
      }}
        >Text here</h3>

        <p
        className={styles.contactDescriptionText}
        style={{
          fontSize: `${textTextFontSize}rem`,
        }}
        >Every month, we run a competition between all the AI models submitted on a leaderboard. The best model will be featured and will earn tokens.</p>
      
        <CallToActionButton
            styles={{
              width: "16.313dvw",
              height: "4.5dvw",
              padding: "1.5dvw",
              fontSize: `${buttonCallFontSize}rem`,
              fontWeight: "500",
              textDecoration: "none",
              marginTop: "2dvw",
            }}
            className={styles.callToActionButton}
            link="/leaderboardWhitepaper"
            text="Read Whitepaper"
          />
      
      </div>
      <div>
        <Image
          src={contactImage}
          alt="Contact Image"
          className={styles.contactImage}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  )
}

export default Contact