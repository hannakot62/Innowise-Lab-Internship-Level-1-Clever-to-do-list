import React, { useState } from "react";
import EntryInput from "@/components/UI/inputs/EntryInput/EntryInput";
import EntryButton from "@/components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "@/components/UI/buttons/ChangeThemeButton/ChangeThemeButton";
import SignUpInButton from "@/components/UI/buttons/SignUpInButton/SignUpInButton";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { removeError, setError } from "@/store/slices/errorSlice";
import { changeTheme } from "@/store/slices/themeSlice";
import { Alert } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector((state: any) => state.error.error);

  const [firstError, setFirstError] = useState("");
  const [secondError, setSecondError] = useState("");
  const [thirdError, setThirdError] = useState("");

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  function isEmailValid(email: string) {
    return EMAIL_REGEXP.test(email);
  }

  function isPasswordValid(password: string) {
    return password.length >= 6;
  }

  function arePasswordsTheSame(pass1: string, pass2: string) {
    return pass1 === pass2;
  }

  function handleChangeTheme() {
    dispatch(changeTheme());
  }

  const handleSignUp = (email: string, password: string) => {
    if (email === "") {
      setFirstError("Enter email");
    }
    if (password === "") {
      setSecondError("Enter password");
    }
    if (repeatPassword === "") {
      setThirdError("Repeat password");
    }
    if (!arePasswordsTheSame(password, repeatPassword)) {
      setThirdError("Passwords are different");
    }

    const auth = getAuth();

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
        switch (error.message) {
          case "Firebase: Error (auth/invalid-email).": {
            //  dispatch(setError("Некорректный адрес электронной почты"));
            setFirstError("Invalid email");
            break;
          }
          case "Firebase: Error (auth/internal-error).": {
            //  dispatch(setError("Не оставляйте пустые поля"));
            break;
          }
          case "Firebase: Error (auth/wrong-password).": {
            dispatch(setError("Invalid password"));
            break;
          }
          case "Firebase: Error (auth/user-not-found).": {
            dispatch(setError("This user doesn't have an account"));
            break;
          }
          case "Firebase: Error (auth/email-already-in-use).": {
            // dispatch(setError("Пользователь уже зарегистрирован"));
            setFirstError("This user already has an account");
            break;
          }
          case "Firebase: Password should be at least 6 characters (auth/weak-password).": {
            //dispatch(setError("Пароль должен содержать хотя бы 6 символов"));
            setSecondError("Слишком короткий пароль");
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
      .catch((error) => {
        dispatch(setError(error.message));
        setTimeout(() => {
          dispatch(removeError());
        }, 2000);
      });
  }

  return (
    <div className={"main"}>
      {/*<Notification e={err} hidden={err === ""} />*/}
      <div className={"entry-container"}>
        <div className={"buttons-input-container"}>
          <EntryInput
            required
            type={"email"}
            placeholder={"Login"}
            value={email}
            error={firstError}
            onChange={(e: any) => {
              setEmail(e.target.value);
              setFirstError("");
            }}
          ></EntryInput>
          <div className="input-error">{firstError}</div>
          <EntryInput
            required
            type={"password"}
            placeholder={"Password"}
            value={password}
            error={secondError}
            onChange={(e: any) => {
              setPassword(e.target.value);
              setSecondError("");
            }}
          ></EntryInput>
          <div className="input-error">{secondError}</div>

          <EntryInput
            required
            type={"password"}
            placeholder={"Repeat password"}
            value={repeatPassword}
            error={thirdError}
            onChange={(e: any) => {
              setRepeatPassword(e.target.value);
              setThirdError("");
            }}
          ></EntryInput>
          <div className="input-error">{thirdError}</div>

          <EntryButton onClick={handleContinueWithGoogle}>
            Continue with Google
          </EntryButton>
          <SignUpInButton onClick={() => handleSignUp(email, password)}>
            Sign Up!
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

export default SignUp;
