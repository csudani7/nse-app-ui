import React from "react";
import PositionTable from "./PositionTable";
import DayHistoryTable from "./DayHistoryTable";
import {
  useGetAllOpenOrders,
  useGetExecutedOrders,
  useGetAllCompletedTradesData,
} from "../../hooks";

import "./index.css";

export default function Positions() {
  const { data: allOpenOrders } = useGetAllOpenOrders();
  const { data: allExecutedOrders } = useGetExecutedOrders();
  const { data: allCompletedTrades } = useGetAllCompletedTradesData();

  return (
    <div style={{ height: "100%" }} className="backgrnd">
      <PositionTable
        allOpenOrders={allOpenOrders}
        allExecutedOrders={allExecutedOrders}
        allCompletedTrades={allCompletedTrades}
      />
      <DayHistoryTable />
    </div>
  );
}
