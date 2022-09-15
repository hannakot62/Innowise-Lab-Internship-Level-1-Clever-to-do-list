import React, { useContext, useState } from "react";
import EntryButton from "@/components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "@/components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import EntryInput from "@/components/UI/inputs/EntryInput/EntryInput";
import SignUpInButton from "@/components/UI/buttons/SignUpInButton/SignUpInButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { removeError, setError } from "@/store/slices/errorSlice";
import { Alert } from "@mui/material";
import { ThemeContext } from "@/theme-context/context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector((state: any) => state.error.error);
  const [firstError, setFirstError] = useState("");
  const [secondError, setSecondError] = useState("");
  const { themeToggler } = useContext(ThemeContext);

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  function isEmailValid(email: string) {
    return EMAIL_REGEXP.test(email);
  }

  function isPasswordValid(password: string) {
    return password.length >= 6;
  }

  const handleLogin = (email: string, password: string) => {
    if (email === "") {
      setFirstError("Enter email");
    } else if (!isEmailValid(email)) {
      setFirstError("Invalid email");
    }

    if (password === "") {
      setSecondError("Enter password");
    } else if (!isPasswordValid(password)) {
      setSecondError("Too short password");
    }
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
            //dispatch(setError("Некорректный адрес электронной почты"));
            break;
          }
          case "Firebase: Error (auth/internal-error).": {
            //dispatch(setError("Не оставляйте пустые поля"));
            break;
          }
          case "Firebase: Error (auth/wrong-password).": {
            //dispatch(setError("Неправильный пароль"));
            setSecondError("Invalid password");
            break;
          }
          case "Firebase: Error (auth/user-not-found).": {
            // dispatch(
            //   setError(
            //     "Пользователь с такой электронной почтой не зарегистрирован"
            //   )
            // );
            setFirstError("This user doesn't have an account");
            break;
          }
          case "Firebase: Error (auth/email-already-in-use).": {
            dispatch(setError("This user already has an account"));
            break;
          }
          case "Firebase: Password should be at least 6 characters (auth/weak-password).": {
            // dispatch(setError("Пароль должен содержать хотя бы 6 символов"));
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
    themeToggler();
  }

  return (
    <div className={"main"}>
      {/*<Notification e={err} hidden={err === ""} />*/}
      <div className={"entry-container"}>
        <div className={"buttons-input-container"}>
          <EntryInput
            type={"email"}
            placeholder={"Login"}
            value={email}
            error={firstError}
            onChange={(e: any) => {
              setEmail(e.target.value);
              setFirstError("");
            }}
          ></EntryInput>
          <div className={"input-error"}>{firstError}</div>
          <EntryInput
            type={"password"}
            placeholder={"Password"}
            value={password}
            error={secondError}
            onChange={(e: any) => {
              setPassword(e.target.value);
              setSecondError("");
            }}
          ></EntryInput>
          <div className={"input-error"}>{secondError}</div>
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
      {err && (
        <Alert className={"my-alert"} variant="filled" severity="error">
          Oops, something went wrong :(
        </Alert>
      )}
      <footer className={"author"}>made by @hannakot62</footer>
    </div>
  );
};

export default SignIn;
