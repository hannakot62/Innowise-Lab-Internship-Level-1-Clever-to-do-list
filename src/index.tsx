import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EntryPage from "./pages/EntryPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import NewTask from "./pages/NewTask";

export const myRoutes = [
  { path: "/hello", component: EntryPage },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
  { path: "/todos", component: Main },
  { path: "/newtask", component: NewTask },

  // {path:'/posts/:id', component: PostIdPage},
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
