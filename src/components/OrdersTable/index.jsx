<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> b3640f35f51bdc3945c9dc87dee4b9fcd6ebb852
import OrderNavBar from "./OrderNavBar";
import OpenOrdersTable from "./OpenOrdersTable";
import ExecutedOrdersTable from "./ExecutedOrdersTable";
import TradesOrdersTable from "./TradesOrdersTable";

export default function OrdersWrapper(props) {
  const { allOpenOrders, allExecutedOrders, allCompletedTrades } = props;
  const [allOpen, setAllOpen] = useState([]);

  console.log("This is from the executed orders", allExecutedOrders);

  useEffect(() => {
    if (allOpenOrders) {
      setAllOpen(allOpenOrders);
    }
  }, [allOpenOrders]);

  return (
    <div className="backgrnd" style={{ height: "100%" }}>
      <OrderNavBar />
      <div className="page-content">
        <div className="orderbook">
          <OpenOrdersTable allOpenOrders={allOpen} />
          {/* {allExecutedOrders && allExecutedOrders.length > 0 && ( */}
            <ExecutedOrdersTable allExecutedOrders={allExecutedOrders} />
          {/* )} */}
          {/* {allCompletedTrades && allCompletedTrades.length > 0 && ( */}
            <TradesOrdersTable allCompletedTrades={allCompletedTrades} />
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
