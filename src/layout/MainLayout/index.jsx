import React from "react";
import { renderRoutes } from "react-router-config";
import NavBar from "../../components/Header/Navbar";
import SearchSideSection from "../../components/SearchSideSection";

import "./index.css";

function MainLayout(props) {
  const { route } = props;
  return (
    <>
      <div className="app header">
        <NavBar />
        <div className="row pt-3 justify-content-center">
          <div className="col-4 mt-5">
            <SearchSideSection />
          </div>
          <div className="col-8 mt-5">{renderRoutes(route.routes)}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
