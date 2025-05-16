
import React, { useState, createContext, useContext, use } from "react";

const LeaderboardContext = createContext();

export const LeaderboardContextProvider = ({ children }) => {

   const [isPageTwoVisible, setIsPageTwoVisible] = useState(false);

   const togglePageTwoVisibility = () => {
     setIsPageTwoVisible((prev) => !prev);
   };

  return (
    <LeaderboardContext.Provider value={{ isPageTwoVisible, togglePageTwoVisibility }}>
      {children}
    </LeaderboardContext.Provider>
  );
};

export const useLeaderboardContext = () => useContext(LeaderboardContext);