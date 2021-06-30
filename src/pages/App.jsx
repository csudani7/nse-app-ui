import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

import { routes } from "../routes";
import isNull from "lodash";

import SocketHandler from "../components/SocketHandler";

import "./app.css";

export default function App() {
  const isAuthenticated = localStorage.getItem("isUserLogged");
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
      {isAuthenticated === "true" && !isNull(isAuthenticated) && (
        <SocketHandler />
      )}
    </BrowserRouter>
  );
}
