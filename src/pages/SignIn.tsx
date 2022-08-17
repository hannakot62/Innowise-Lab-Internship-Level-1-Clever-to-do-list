import React from "react";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import EntryInput from "../components/UI/inputs/EntryInput/EntryInput";
import SignUpInButton from "../components/UI/buttons/SignUpInButton/SignUpInButton";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className={"entry-container"}>
        <div className={"buttons-input-container"}>
          <EntryInput type={"text"} placeholder={"Login"}></EntryInput>
          <EntryInput type={"password"} placeholder={"Password"}></EntryInput>
          <EntryButton>Continue with Google</EntryButton>
          <SignUpInButton>
            {" "}
            <Link className={"link"} to="/todos">
              Sign In!
            </Link>
          </SignUpInButton>
        </div>
        <ChangeThemeButton>Change Theme</ChangeThemeButton>
      </div>
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default SignIn;
