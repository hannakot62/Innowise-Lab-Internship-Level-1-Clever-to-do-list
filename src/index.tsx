import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EntryPage from "./pages/EntryPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Lottie from "lottie-web";
// @ts-ignore
import icon from "./assets/todo.png";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import "./firebase";
// @ts-ignore
todoIcon.href = icon;

export const myRoutes = [
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
  { path: "/todos", component: Main },
  { path: "/newtask", component: NewTask },
  { path: "/edittask", component: EditTask },

  // {path:'/posts/:id', component: PostIdPage},
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

let theme = localStorage.getItem("todoTheme")
  ? localStorage.getItem("todoTheme")
  : "light";
let main = document.getElementsByTagName("html")[0];
// @ts-ignore
main.classList.toggle(theme);
