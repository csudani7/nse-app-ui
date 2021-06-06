import React from "react";
import OrdersTable from "../../components/OrdersTable";
import {
  useGetAllOpenOrders,
  useGetExecutedOrders,
  useGetAllCompletedTradesData,
} from "../../hooks";

import "./index.css";

export default function Orders() {
  const { data: allOpenOrders } = useGetAllOpenOrders();
  const { data: allExecutedOrders } = useGetExecutedOrders();
  const { data: allCompletedTrades } = useGetAllCompletedTradesData();

  return (
    <OrdersTable
      allOpenOrders={allOpenOrders}
      allExecutedOrders={allExecutedOrders}
      allCompletedTrades={allCompletedTrades}
    />
  );
}
