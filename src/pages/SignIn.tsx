import React, { useState } from "react";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import EntryInput from "../components/UI/inputs/EntryInput/EntryInput";
import SignUpInButton from "../components/UI/buttons/SignUpInButton/SignUpInButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
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
          <EntryButton>Continue with Google</EntryButton>
          <SignUpInButton onClick={() => handleLogin(email, password)}>
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
