import React, { useContext } from "react";
import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/routes/AppRouter";
import { ThemeContext } from "@/theme-context/context";
import { useTheme } from "@/hooks/useTheme";

function App() {
  const themeObject = useTheme();
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themeObject}>
      <div id="App" className={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
