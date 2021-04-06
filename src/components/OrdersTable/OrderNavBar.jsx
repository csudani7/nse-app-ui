import React from "react";

function OrderNavBar() {
  return (
    <div className="page-nav">
      <a
        href="/orders"
        aria-current="page"
        className="router-link-exact-active router-link-active"
      >
        <span>Orders</span>
      </a>
      <a href="/orders/gtt" className="">
        <span>GTT</span>
      </a>
      <a href="/orders/baskets" className="">
        <span>Baskets</span>
      </a>
      <a href="/orders/sip" className="">
        <span>SIP</span>
      </a>
    </div>
  );
}

export default OrderNavBar;
