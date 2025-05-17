"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalParallax = ({
  className,
  children,
  speed = 1,
  id = "parallaxContainer",
}) => {
  const triggerRef = useRef(null);
  const targetRef = useRef(null);
  const timeLine = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    timeLine.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: triggerRef.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={className} ref={triggerRef}>
      <div ref={targetRef}>{children}</div>
    </div>
  );
};

export default HorizontalParallax;
