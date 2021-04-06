import React from "react";
import { renderRoutes } from "react-router-config";
import "./index.css";

function MainLayout(props) {
  const { route } = props;
  return <>{renderRoutes(route.routes)}</>;
}

export default MainLayout;
