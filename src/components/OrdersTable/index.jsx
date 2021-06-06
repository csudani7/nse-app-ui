import React from "react";
import OrderNavBar from "./OrderNavBar";
import OpenOrdersTable from "./OpenOrdersTable";
import ExecutedOrdersTable from "./ExecutedOrdersTable";
import TradesOrdersTable from "./TradesOrdersTable";

export default function OrdersWrapper(props) {
  const { allOpenOrders, allExecutedOrders, allCompletedTrades } = props;

  return (
    <div className="backgrnd" style={{ height: "100%" }}>
      <OrderNavBar />
      <div className="page-content">
        <div className="orderbook">
          <OpenOrdersTable allOpenOrders={allOpenOrders} />
          {allExecutedOrders && allExecutedOrders.length > 0 && (
            <ExecutedOrdersTable allExecutedOrders={allExecutedOrders} />
          )}
          {allCompletedTrades && allCompletedTrades.length > 0 && (
            <TradesOrdersTable allCompletedTrades={allCompletedTrades} />
          )}
        </div>
      </div>
    </div>
  );
}
