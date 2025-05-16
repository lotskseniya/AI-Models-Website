"use client";
import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimentions";
import footerImage from "../../public/images/footer-section-image.png";
import eclipseImage from "../../public/images/ellipse.png";
import Link from "next/link";

const Footer = () => {
  const imageWidth = useWindowDimensions({ proportion: 1 });
  const imageHeight = useWindowDimensions({ proportion: 6 });
  const navImageWidth = useWindowDimensions({ proportion: 30 });
  const navImageHeight = useWindowDimensions({ proportion: 30 });

  return (
    <div className={styles.footer}>
      <Image
        src={footerImage}
        alt="Footer Image"
        className={styles.footerImage}
        width={imageWidth}
        height={imageHeight}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      <div className={styles.footerNavBar}>
        <div
          style={{
            fontSize: ".9rem",
          }}
          className={styles.navlinks}
        >
          <Link href="/" className={styles.footerNavBarLink}>
            Home
          </Link>
          <Link href="/leaderboard" className={styles.footerNavBarLink}>
            Leaderboard
          </Link>
          <Link href="/services" className={styles.footerNavBarLink}>
            About
          </Link>
        </div>

        <hr
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(142, 142, 142, 1)",
            border: "none",
            marginTop: "20px",
            zIndex: 2,
          }}
        />

        <div className={styles.footerNavBarBottom}>
          <div
            style={{
              width: "7.125rem",
              position: "absolute",
              bottom: "5rem",
              left: "3rem",
              zIndex: 1,
            }}
          >
            {Array.from({ length: 3 }, (_, index) => (
              <Image
                key={index}
                src={eclipseImage}
                alt="CircleImage"
                width={navImageWidth}
                height={navImageHeight}
                style={{
                  width: "20%",
                  height: "30%",
                  marginRight: ".4rem",
                }}
              />
            ))}
          </div>
         
          <div
          style={{
             fontSize: ".75rem",
            position: "absolute",
            bottom: "5rem",
            right: "3rem",
          }}
          className={styles.navBottomlinks}
        >
          <Link href="/terms" className={styles.footerNavBarBottomLink}>
            Terms of Use
          </Link>
          <Link href="/privacyPolicy" className={styles.footerNavBarBottomLink}>
            Privacy Policy
          </Link>
          <Link href="/cookiePolicy" className={styles.footerNavBarBottomLink}>
            Cookie Policy
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
