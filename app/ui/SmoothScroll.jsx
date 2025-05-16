"use client";
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";

function SmoothScroll({ children }) {
  const lenis = useLenis(({ scroll }) => {});

  return <ReactLenis root 
  options={{ lerp: 0.5, duration: 1.5, smoothTouch: true}}
  >
    {children}
    </ReactLenis>;
}

export default SmoothScroll;
