import React, { useState, createContext } from "react";
// import { useParams } from "react-router-dom";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [activePage, setactivePage] = useState(0);

  return (
    <NavContext.Provider
      value={{ activePage: activePage, setactivePage: setactivePage }}
    >
      {children}
    </NavContext.Provider>
  );
};
