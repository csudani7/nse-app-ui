import React from "react";
import OrderNavBar from "./OrderNavBar";
import OrdersTable from "./OrdersTable";

export default function OrdersWrapper(props) {
  const { allOpenOrders, allExecutedOrders, allCompletedTrades } = props;
  return (
    <div className="backgrnd">
      <OrderNavBar />
      <OrdersTable
        allOpenOrders={allOpenOrders}
        allExecutedOrders={allExecutedOrders}
        allCompletedTrades={allCompletedTrades}
      />
    </div>
  );
}
