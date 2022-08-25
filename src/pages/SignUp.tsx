import React, { useState } from "react";
import EntryInput from "../components/UI/inputs/EntryInput/EntryInput";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import SignUpInButton from "../components/UI/buttons/SignUpInButton/SignUpInButton";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import Notification from "../components/UI/notification/Notification";
import { removeError, setError } from "../store/slices/errorSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector((state: any) => state.error.error);

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();

    if (password != repeatPassword) {
      dispatch(setError("Пароли не совпадают!"));
      console.log(err);
      setTimeout(() => {
        dispatch(removeError());
      }, 2000);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
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
            required
            type={"text"}
            placeholder={"Login"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          ></EntryInput>
          <EntryInput
            required
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          ></EntryInput>
          <EntryInput
            required
            type={"password"}
            placeholder={"Repeat password"}
            value={repeatPassword}
            onChange={(e: any) => setRepeatPassword(e.target.value)}
          ></EntryInput>
          <EntryButton>Continue with Google</EntryButton>
          <SignUpInButton onClick={() => handleSignUp(email, password)}>
            Sign Up!
          </SignUpInButton>
        </div>
        <ChangeThemeButton>Change Theme</ChangeThemeButton>
      </div>
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default SignUp;
