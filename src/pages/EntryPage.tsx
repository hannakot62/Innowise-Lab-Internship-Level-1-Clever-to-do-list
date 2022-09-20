import React, { useContext } from "react";
import { EntryButton, ChangeThemeButton } from "@/components/UI";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/theme-context/context";

const EntryPage = () => {
  const { themeToggler } = useContext(ThemeContext);

  function handleChangeTheme() {
    themeToggler();
  }

  return (
    <div>
      <div className={"entry-container"}>
        <div className={"buttons-input-container"}>
          <EntryButton>
            <Link className={"link"} to="/signin">
              Sign In
            </Link>
          </EntryButton>
          <EntryButton>
            <Link className={"link"} to="/signup">
              Sign Up
            </Link>
          </EntryButton>
        </div>
        <ChangeThemeButton onClick={handleChangeTheme}>
          Change Theme
        </ChangeThemeButton>
      </div>
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default EntryPage;
