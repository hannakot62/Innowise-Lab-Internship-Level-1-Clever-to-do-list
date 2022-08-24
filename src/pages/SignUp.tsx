import React, { useState } from "react";
import EntryInput from "../components/UI/inputs/EntryInput/EntryInput";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import SignUpInButton from "../components/UI/buttons/SignUpInButton/SignUpInButton";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.table)
      .catch(console.error);
  };

  return (
    <div>
      <div className={"entry-container"}>
        <div className={"buttons-input-container"}>
          <EntryInput
            type={"text"}
            placeholder={"Login"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          ></EntryInput>
          <EntryInput
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          ></EntryInput>
          <EntryInput
            type={"password"}
            placeholder={"Repeat password"}
          ></EntryInput>
          <EntryButton>Continue with Google</EntryButton>
          <SignUpInButton onClick={() => handleSignUp(email, password)}>
            {" "}
            <Link className={"link"} to="/todos">
              Sign Up!
            </Link>
          </SignUpInButton>
        </div>
        <ChangeThemeButton>Change Theme</ChangeThemeButton>
      </div>
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default SignUp;
