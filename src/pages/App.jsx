import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { routes } from "../routes";
import "./app.css";

function App() {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
}

export default App;
