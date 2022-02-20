import React from "react";
import { createContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  return (
    <MenuContext.Provider value="Default">{children}</MenuContext.Provider>
  );
};
