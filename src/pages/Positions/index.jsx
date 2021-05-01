import React from "react";
import PositionTable from "./PositionTable";
import DayHistoryTable from "./DayHistoryTable";

import "./index.css";

export default function Positions() {
  return (
    <div>
      <PositionTable />
      <DayHistoryTable />
    </div>
  );
}
