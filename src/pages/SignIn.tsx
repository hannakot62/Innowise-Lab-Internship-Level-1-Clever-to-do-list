import React, { useState } from "react";
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import EntryInput from "../components/UI/inputs/EntryInput/EntryInput";
import SignUpInButton from "../components/UI/buttons/SignUpInButton/SignUpInButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Notification from "../components/UI/notification/Notification";
import { removeError, setError } from "../store/slices/errorSlice";
import { changeTheme } from "../store/slices/themeSlice";

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
        switch (error.message) {
          case "Firebase: Error (auth/invalid-email).": {
            dispatch(setError("Некорректный адрес электронной почты"));
            break;
          }
          case "Firebase: Error (auth/internal-error).": {
            dispatch(setError("Не оставляйте пустые поля"));
            break;
          }
          case "Firebase: Error (auth/wrong-password).": {
            dispatch(setError("Неправильный пароль"));
            break;
          }
          case "Firebase: Error (auth/user-not-found).": {
            dispatch(
              setError(
                "Пользователь с такой электронной почтой не зарегистрирован"
              )
            );
            break;
          }
          case "Firebase: Error (auth/email-already-in-use).": {
            dispatch(setError("Пользователь уже зарегистрирован"));
            break;
          }
          case "Firebase: Password should be at least 6 characters (auth/weak-password).": {
            dispatch(setError("Пароль должен содержать хотя бы 6 символов"));
            break;
          }
          default: {
            dispatch(setError(error.message));
            break;
          }
        }
        setTimeout(() => {
          dispatch(removeError());
        }, 2000);
      });
  };

  function handleContinueWithGoogle() {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate("/todos");
      })
      // Handle Errors here.
      .catch((error) => {
        dispatch(setError(error.message));
        setTimeout(() => {
          dispatch(removeError());
        }, 2000);
      });
  }

  function handleChangeTheme() {
    dispatch(changeTheme());
  }

  return (
    <div className={"main"}>
      <Notification e={err} hidden={err === ""} />
      <div className={"entry-container"}>
        <div className={"buttons-input-container"}>
          <EntryInput
            type={"email"}
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
          <EntryButton onClick={handleContinueWithGoogle}>
            Continue with Google
          </EntryButton>
          <SignUpInButton onClick={() => handleLogin(email, password)}>
            Sign In!
          </SignUpInButton>
        </div>
        <ChangeThemeButton onClick={handleChangeTheme}>
          Change Theme
        </ChangeThemeButton>
      </div>
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default SignIn;
