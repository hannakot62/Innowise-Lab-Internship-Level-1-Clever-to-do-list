import React from "react";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import { Link } from "react-router-dom";
import { changeTheme } from "../store/slices/themeSlice";
import { useDispatch } from "react-redux";

const EntryPage = () => {
  const dispatch = useDispatch();
  function handleChangeTheme() {
    dispatch(changeTheme());
  }

  return (
    <div>
      <div className={"entry-container"}>
        <div className={"buttons-input-container"}>
          <EntryButton>
            {" "}
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
