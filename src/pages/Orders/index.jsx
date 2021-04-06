import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Window } from "@progress/kendo-react-dialogs";
import "../../index.css";
import NavBar from "../../components/Header/Navbar";
import BuySellForm from "../../components/SearchSideSection/BuySellForm";
import { BuySellToggler } from "../../components/SearchSideSection/Context";
import SearchSideSection from "../../components/SearchSideSection";
import MainContent from "../../components/OrdersTable";

export default function Orders() {
  const user = useContext(BuySellToggler);
  return (
    <>
      <div className="app header">
        <NavBar />
        <div className="row pt-3 justify-content-center">
          <div className="col-4 mt-5">
            <SearchSideSection />
          </div>
          <div className="col-8 mt-5">
            <MainContent />
            {user && (
              <Window
                minimizeButton={false}
                maximizeButton={false}
                onResize={false}
                initialWidth={540}
                initialHeight={550}
              >
                <BuySellForm />
              </Window>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
