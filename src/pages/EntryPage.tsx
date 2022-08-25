import React, { useLayoutEffect } from "react";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-web";
import { useSelector } from "react-redux";
import { getUserFromLS } from "../store/slices/userSlice";

const EntryPage = () => {
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
        <ChangeThemeButton>Change Theme</ChangeThemeButton>
      </div>
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default EntryPage;
