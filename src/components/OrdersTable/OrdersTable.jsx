import React from "react";
import moment from "moment";
import { FaSearch } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { BiDoughnutChart } from "react-icons/bi";

import "./index.css";

export default function OrdersTable(props) {
  const { allOpenOrders, allExecutedOrders } = props;
  return (
    <div className="page-content">
      <div className="orderbook">
        <section className="completed-orders-wrap table-wrapper">
          <header className="row data-table-header">
            <h3 className="page-title small">
              Executed orders
              <span>({allExecutedOrders?.numofdata})</span>
            </h3>
          </header>

          <div className="completed-orders">
            <div tabIndex="1" className="data-table fold-header">
              {/* ExecutedOrderTable:Toolbar */}
              <div className="toolbar">
                {" "}
                <span className="search">
                  <span className="icon icon-search">
                    <FaSearch />
                  </span>{" "}
                  <span
                    className="clear icon icon-times"
                    style={{ display: "none" }}
                  />
                  <div className="search-input su-input-group">
                    <input
                      type="search"
                      placeholder="Search"
                      autoCorrect="off"
                      maxLength="15"
                      label=""
                      rules=""
                      dynamicwidthsize="8"
                    />
                  </div>
                </span>{" "}
                <span className="toolbar-before">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://console.zerodha.com/reports/tradebook"
                  >
                    <span className="icon icon-console">
                      <BiDoughnutChart />
                    </span>
                    View reports
                  </a>
                </span>{" "}
                <span className="download">
                  <span className="download-csv link">
                    <span className="icon icon-download">
                      <FiDownloadCloud />
                    </span>
                    <a href="/" className="hide download-link">
                      Download
                    </a>
                  </span>
                </span>{" "}
              </div>

              {/* ExecutedTable */}
              <table>
                <thead>
                  <tr>
                    <th className="order-timestamp sortable">
                      <span>Time</span>
                    </th>
                    <th className="transaction-type sortable">
                      <span>Type</span>
                    </th>
                    <th className="instrument sortable">
                      <span>Instrument</span>
                      <span className="icon"> </span>
                    </th>
                    <th className="product sortable">
                      <span>Product</span>
                    </th>
                    <th className="quantity right sortable">
                      <span>Qty.</span>
                    </th>
                    <th className="average-price right sortable">
                      <span>Avg. price</span>
                    </th>
                    <th className="order-status sortable">
                      <span>Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allExecutedOrders &&
                    allExecutedOrders?.data?.map((orders, index) => {
                      return (
                        <tr data-uid={index}>
                          <td className="order-timestamp">
                            {moment
                              .utc(orders.createdAt)
                              .local()
                              .format("HH:mm:ss")}
                          </td>
                          <td className="transaction-type">
                            <span className="text-label blue small">
                              {orders.TransactionType}
                            </span>
                          </td>
                          <td className="instrument">
                            <span className="tradingsymbol">
                              <span>{orders.SymbolName}</span>
                            </span>{" "}
                            <span className="exchange text-xxsmall dim">
                              {orders.ExchangeSegment}
                            </span>
                          </td>
                          <td className="product">{orders.ProductType}</td>
                          <td className="quantity right">
                            {orders.OrderQuantity}
                          </td>
                          <td className="average-price right">
                            <span>{orders.OrderPrice}</span>
                          </td>
                          <td className="order-status">
                            <span className="text-label small order-status-label">
                              <span>{orders.Status}</span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot />
              </table>
            </div>
          </div>
        </section>

        <section className="trades-wrap table-wrapper">
          <header className="row data-table-header">
            <h3 className="page-title small">
              <span className="title">
                <span>Trades</span>{" "}
                <span className="icon icon-chevron-up"></span>
              </span>{" "}
              <span>({allOpenOrders?.numofdata})</span>
            </h3>
          </header>
          <div className="trades">
            <div tabIndex="1" className="data-table fold-header">
              {/* OpenOrderTable:Toolbar */}
              <div className="toolbar">
                {" "}
                <span className="search">
                  <span className="icon icon-search"></span>{" "}
                  <span
                    className="clear icon icon-times"
                    style={{ display: "none" }}
                  >
                    <BiDoughnutChart />
                  </span>
                  <div className="search-input su-input-group">
                    <input
                      type="search"
                      placeholder="Search"
                      autoCorrect="off"
                      maxLength="15"
                      label=""
                      rules=""
                      dynamicwidthsize="8"
                    />
                  </div>
                </span>{" "}
                <span className="toolbar-before">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://console.zerodha.com/reports/tradebook"
                  >
                    <span className="icon icon-console">
                      <BiDoughnutChart />
                    </span>
                    View reports
                  </a>
                </span>{" "}
                <span className="download">
                  <span className="download-csv link">
                    <span className="icon icon-download">
                      <FiDownloadCloud />
                    </span>
                    <a href="/" className="hide download-link">
                      Download
                    </a>
                  </span>
                </span>{" "}
              </div>

              {/* OpenOrderTable */}
              <table>
                <thead>
                  <tr>
                    <th className="trade-id sortable">
                      <span>Trade ID</span>
                    </th>
                    <th className="fill-timestamp sortable">
                      <span>Fill time</span>
                    </th>
                    <th className="transaction-type sortable">
                      <span>Type</span>
                    </th>
                    <th className="instrument sortable">
                      <span>Instrument</span>
                    </th>
                    <th className="product sortable">
                      <span>Product</span>
                    </th>
                    <th className="quantity right sortable">
                      <span>Qty.</span>
                    </th>
                    <th className="average-price right sortable">
                      <span>Avg. Price</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allOpenOrders &&
                    allOpenOrders?.data?.map((orders, index) => {
                      return (
                        <tr data-uid={index}>
                          <td className="trade-id">{orders.OrderUserid}</td>
                          <td className="fill-timestamp">
                            {moment
                              .utc(orders.createdAt)
                              .local()
                              .format("HH:mm:ss")}
                          </td>
                          <td className="transaction-type">
                            <span className="text-label red small">
                              {orders.TransactionType}
                            </span>
                          </td>
                          <td className="instrument">
                            <span className="tradingsymbol">
                              <span>{orders.SymbolName}</span>
                            </span>{" "}
                            <span className="exchange text-xxsmall dim">
                              {orders.ExchangeSegment}
                            </span>
                          </td>
                          <td className="product">{orders.ProductType}</td>
                          <td className="quantity right">
                            {orders.OrderQuantity}
                          </td>
                          <td className="average-price right">
                            {orders.OrderPrice}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot />
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
