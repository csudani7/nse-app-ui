import React from "react";
import OpenOrdersTable from "./OpenOrdersTable";
import ExecutedOrdersTable from "./ExecutedOrdersTable";
import TradesOrdersTable from "./TradesOrdersTable";

import "./index.css";

export default function OrdersTable(props) {
  const { allOpenOrders, allExecutedOrders, allCompletedTrades } = props;
  return (
    <div className="page-content">
      <div className="orderbook">
        <OpenOrdersTable allOpenOrders={allOpenOrders} />
        <ExecutedOrdersTable allExecutedOrders={allExecutedOrders} />
        <TradesOrdersTable allCompletedTrades={allCompletedTrades} />
      </div>
    </div>
  );
}
