import React, { useState } from "react";
import {
  deleteThemeFromLS,
  getThemeFromLS,
  setThemeToLS,
} from "@/theme-context/helpers";

export function useTheme() {
  const startTheme = getThemeFromLS();
  const [theme, setTheme] = useState(startTheme ? startTheme : "light");

  const themeToggler = () => {
    let doc = document.getElementsByTagName("html")[0];
    doc.classList.replace(theme, theme === "light" ? "dark" : "light");
    let app = document.getElementById("App");
    app?.classList.replace(theme, theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
    deleteThemeFromLS();
    setThemeToLS(theme === "light" ? "dark" : "light");
  };

  return { theme: theme, themeToggler: themeToggler };
}
