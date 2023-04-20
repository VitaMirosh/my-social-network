import React from "react";
import { HashRouter} from "react-router-dom";
import App from "./App";
import {addPost, changeNewText, StateType} from "./Redux/State";
import ReactDOM from "react-dom/client";

export let rerenderEntireTree = (state:StateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        // <React.StrictMode>
        <HashRouter>
            <App state={state} addPost={addPost} changeNewText={changeNewText}/>
        </HashRouter>
        // </React.StrictMode>
    )
}