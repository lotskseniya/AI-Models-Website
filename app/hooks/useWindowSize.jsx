"use client";
import React from "react";
import { useState, useEffect } from "react";

// Custom hook to get window size and to know width and height

const useWindowSize = () => {

  const innerWidth = window.innerWidth || 0;
  const [marginToInnerWidth, setMarginToInnerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (innerWidth < 640) {
        setMarginToInnerWidth(80);
      } else if (innerWidth > 640 && innerWidth < 768) {
        setMarginToInnerWidth(70);
      } else if (innerWidth > 768 && innerWidth < 1024) {
        setMarginToInnerWidth(60);
      } else if (innerWidth > 1024 && innerWidth < 1352) {
        setMarginToInnerWidth(55);
      }

      return marginToInnerWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      marginToInnerWidth, innerWidth;  
      window.removeEventListener("resize", handleResize);
    };
  });

    return {
      marginToInnerWidth,
      innerWidth
    };
};

export default useWindowSize;
