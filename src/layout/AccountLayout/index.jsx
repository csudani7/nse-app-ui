import React from "react";
import { renderRoutes } from "react-router-config";

function AccountLayout(props) {
  const { route } = props;
  return <>{renderRoutes(route.routes)}</>;
}

export default AccountLayout;
