import React from "react";
import { HashRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/State";

let rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        // <React.StrictMode>
        <HashRouter>
            <App store={store} />
        </HashRouter>
        // </React.StrictMode>
    )
}
// //

store.subscribe(rerenderEntireTree);
rerenderEntireTree();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
