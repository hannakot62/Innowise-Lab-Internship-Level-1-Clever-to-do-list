import React, { createContext } from "react";

export const ThemeContext = React.createContext({
  theme: "",
  themeToggler: () => {},
});
