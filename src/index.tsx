import React from "react";
import { HashRouter} from "react-router-dom";
import App from "./App";
import state, {addPost, changeNewText, subscribe} from "./Redux/State";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

let rerenderEntireTree = () => {
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
// //
rerenderEntireTree()
subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
