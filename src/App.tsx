import React from 'react';
import './App.css';
// import {BrowserRouter} from "react-router-dom";
// import EntryButton from "./components/UI/buttons/EntryButton/EntryButton";
import EntryPage from "./pages/EntryPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

function App() {
    return (
        <div className="App">
            {/*<EntryPage/>*/}
            {/*<SignIn/>*/}
            {/*<SignUp/>*/}
            <Main/>
            {/*<BrowserRouter>*/}

            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
