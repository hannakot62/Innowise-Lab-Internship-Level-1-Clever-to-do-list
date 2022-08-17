import React from "react";
import "./App.css";

import EntryPage from "./pages/EntryPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <div id="animationContainer"></div>

      {/*<EntryPage/>*/}
      {/*<SignIn/>*/}
      {/*<SignUp/>*/}
      {/*<Main/>*/}

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
