import React, { useContext } from "react";
import { Window } from "@progress/kendo-react-dialogs";
import BuySellForm from "../../components/SearchSideSection/BuySellForm";
import { BuySellToggler } from "../../components/SearchSideSection/Context";
import OrdersTable from "../../components/OrdersTable";
import { useGetAllOpenOrders, useGetExecutedOrders } from "../../hooks";

import "../../index.css";

export default function Orders() {
  const user = useContext(BuySellToggler);
  const { data: allOpenOrders } = useGetAllOpenOrders();
  const { data: allExecutedOrders } = useGetExecutedOrders();
  return (
    <>
      <OrdersTable
        allOpenOrders={allOpenOrders}
        allExecutedOrders={allExecutedOrders}
      />
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
    </>
  );
}
