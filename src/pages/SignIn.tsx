import React, { useState } from "react";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import EntryInput from "../components/UI/inputs/EntryInput/EntryInput";
import SignUpInButton from "../components/UI/buttons/SignUpInButton/SignUpInButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Notification from "../components/UI/notification/Notification";
import { removeError, setError } from "../store/slices/errorSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector((state: any) => state.error.error);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate("/todos");
      })
      .catch((error) => {
        dispatch(setError(error.message));
        setTimeout(() => {
          dispatch(removeError());
        }, 2000);
      });
  };

  return (
    <div className={"main"}>
      <Notification e={err} hidden={err === ""} />
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
            Sign In!
          </SignUpInButton>
        </div>
        <ChangeThemeButton>Change Theme</ChangeThemeButton>
      </div>
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default SignIn;
