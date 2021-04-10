import React, { Suspense } from "react";
import { Spin } from "antd";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { routes } from "../routes";
import "./app.css";

const Loader = () => (
  <div className="spinner">
    <Spin />
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Suspense>
  );
}

export default App;
