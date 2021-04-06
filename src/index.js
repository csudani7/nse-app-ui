import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import "./index.css";

import * as serviceWorker from './serviceWorker';

function BaseApp() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<BaseApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();