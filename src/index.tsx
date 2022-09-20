import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
// @ts-ignore
import icon from "@/assets/todo.png";
import { Provider } from "react-redux";
import { store } from "@/store";
import "@/firebase";
// @ts-ignore
todoIcon.href = icon;

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
