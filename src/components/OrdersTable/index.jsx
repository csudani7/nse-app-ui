import React from "react";
import OrderNavBar from "./OrderNavBar";
import Content from "./Content";

export default function MainContent() {
  return (
    <div className="backgrnd">
      <OrderNavBar />
      <Content />
    </div>
  );
}
