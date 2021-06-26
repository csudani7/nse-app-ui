import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import isNull from "lodash";

import { callMasterAPI } from "./services/XTSConnection";
import App from "./pages/App";

import "antd/dist/antd.css";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

const queryClient = new QueryClient();

function BaseApp() {
  const isAuthenticated = localStorage.getItem("isUserLogged");
  React.useEffect(() => {
    if (isAuthenticated === "true" && !isNull(isAuthenticated)) callMasterAPI();
  }, [isAuthenticated]);
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

ReactDOM.render(<BaseApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
