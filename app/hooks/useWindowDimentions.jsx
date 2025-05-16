"use client"
import React from "react";
import { useState, useEffect } from "react";

 // My custom hook to get window dimensions and set font size
const useWindowDimensions = ({ proportion }) => {
  const [fontSize, setFontSize] = useState(0);
   // Function to get window dimensions and set font size
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setFontSize((width - 2) / proportion );
  };

  // Event listener for window resize
  useEffect(() => {
    getWindowDimensions();
    window.addEventListener("resize", getWindowDimensions);
    return () => window.removeEventListener("resize", getWindowDimensions);
  });

  return fontSize;
}

export default useWindowDimensions;