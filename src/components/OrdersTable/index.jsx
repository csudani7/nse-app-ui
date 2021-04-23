import React from "react";
import OrderNavBar from "./OrderNavBar";
import OrdersTable from "./OrdersTable";

export default function OrdersWrapper() {
  return (
    <div className="backgrnd">
      <OrderNavBar />
      <OrdersTable />
    </div>
  );
}
