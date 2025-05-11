import React, { createContext, useContext } from "react";

const PortfolioContext = createContext();

const PortfolioContextProvider = ({children}) => {
  const value = {};
  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};

export default PortfolioContextProvider;
// export const usePortfolioContext = useContext(PortfolioContext);
// 