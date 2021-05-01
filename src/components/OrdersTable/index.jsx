import React from "react";
import OrderNavBar from "./OrderNavBar";
import OpenOrdersTable from "./OpenOrdersTable";
import ExecutedOrdersTable from "./ExecutedOrdersTable";
import TradesOrdersTable from "./TradesOrdersTable";

export default function OrdersWrapper(props) {
  const { allOpenOrders, allExecutedOrders, allCompletedTrades } = props;
  return (
    <div className="backgrnd">
      <OrderNavBar />
      <div className="page-content">
        <div className="orderbook">
          <OpenOrdersTable allOpenOrders={allOpenOrders} />
          <ExecutedOrdersTable allExecutedOrders={allExecutedOrders} />
          <TradesOrdersTable allCompletedTrades={allCompletedTrades} />
        </div>
      </div>
    </div>
  );
}
