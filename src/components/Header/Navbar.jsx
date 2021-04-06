import React from "react";
import "./index.css";

function NavBar() {
  return (
    <div className="header">
      <div className="wrapper" style={{ marginLeft: "89px" }}>
        <div className="header-left">
          <div className="pinned-instruments">
            <div className="instrument-widget">
              <span
                tooltip-pos="down"
                className="tradingsymbol link-chart"
                data-balloon="Open chart"
                data-balloon-pos="down"
              >
                NIFTY 50
              </span>{" "}
              <span className="wrap">
                <span className="last-price down">14549.40</span>{" "}
                <span className="price-change dim">
                  <span className="change-percent dim">
                    -1.79 <span className="text-xxsmall">%</span>
                  </span>
                </span>
              </span>
            </div>
            <div className="instrument-widget">
              <span
                tooltip-pos="down"
                className="tradingsymbol link-chart"
                data-balloon="Open chart"
                data-balloon-pos="down"
              >
                SENSEX
              </span>{" "}
              <span className="wrap">
                <span className="last-price down">49180.31</span>{" "}
                <span className="price-change dim">
                  <span className="change-percent dim">
                    -1.74 <span className="text-xxsmall">%</span>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="header-right">
          <a href="/" className="logo">
            <img
              src="https://kite.zerodha.com/static/images/kite-logo.svg"
              alt="Kite logo"
            />
          </a>
          <div className="app-nav">
            <a href="/dashboard" className="">
              <span>Dashboard</span>
            </a>{" "}
            <a
              href="/orders"
              className="orders-nav-item router-link-exact-active router-link-active"
              aria-current="page"
            >
              <span>Orders</span>
            </a>{" "}
            <a href="/holdings" className="">
              <span>Holdings</span>
            </a>{" "}
            <a href="/positions" className="">
              <span>Positions</span>
            </a>{" "}
            <a href="/funds" className="">
              <span>Funds</span>
            </a>{" "}
            <a href="/apps" className="">
              <span>Apps</span>
            </a>
          </div>
          <div className="right-nav">
            <div className="user-nav perspective">
              <a href="/" className="dropdown-label">
                <div id="avatar-43">
                  <div
                    className="avatar"
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      textAlign: "center",
                      verticalAlign: "middle",
                      backgroundColor: "rgba(156, 39, 176, 0.1)",
                      fontSize: "9px",
                      fontWeight: "300px",
                      color: "rgb(156, 39, 176)",
                      lineHeight: "26px",
                    }}
                  >
                    <span>SP</span>
                  </div>
                </div>{" "}
                <span className="user-id">XT5454</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
