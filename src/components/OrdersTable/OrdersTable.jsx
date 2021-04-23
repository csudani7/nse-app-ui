import React from "react";
import "./index.css";
import { FaSearch } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { BiDoughnutChart } from "react-icons/bi";

export default function OrdersTable() {
  return (
    <div className="page-content">
      <div className="orderbook">
        <section className="completed-orders-wrap table-wrapper">
          <header className="row data-table-header">
            <h3 className="page-title small">
              Executed orders
              <span>(4)</span>
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
                  <tr data-uid="0">
                    <td className="order-timestamp">15:20:49</td>
                    <td className="transaction-type">
                      <span className="text-label blue small">BUY</span>
                    </td>
                    <td className="instrument">
                      <span className="tradingsymbol">
                        <span>IDFCFIRSTB</span>
                      </span>{" "}
                      <span className="exchange text-xxsmall dim">NSE</span>
                    </td>
                    <td className="product">MIS</td>
                    <td className="quantity right">0 / 1</td>
                    <td className="average-price right">
                      <span>58.00</span>
                    </td>
                    <td className="order-status">
                      <span className="text-label small order-status-label">
                        <span>CANCELLED</span>
                      </span>
                    </td>
                  </tr>
                  <tr data-uid="1">
                    <td className="order-timestamp">14:46:01</td>
                    <td className="transaction-type">
                      <span className="text-label red small">SELL</span>
                    </td>
                    <td className="instrument">
                      <span className="tradingsymbol">
                        <span>IDFCFIRSTB</span>
                      </span>{" "}
                      <span className="exchange text-xxsmall dim">NSE</span>
                    </td>
                    <td className="product">MIS</td>
                    <td className="quantity right">1 / 1</td>
                    <td className="average-price right">
                      <span>59.50</span>
                    </td>
                    <td className="order-status">
                      <span className="text-label small order-status-label green">
                        <span>COMPLETE</span>
                      </span>
                    </td>
                  </tr>
                  <tr data-uid="2">
                    <td className="order-timestamp">14:44:29</td>
                    <td className="transaction-type">
                      <span className="text-label blue small">BUY</span>
                    </td>
                    <td className="instrument">
                      <span className="tradingsymbol">
                        <span>IDFCFIRSTB</span>
                      </span>{" "}
                      <span className="exchange text-xxsmall dim">NSE</span>
                    </td>
                    <td className="product">MIS</td>
                    <td className="quantity right">0 / 10000</td>
                    <td className="average-price right">
                      <span>59.00</span>
                    </td>
                    <td className="order-status">
                      <span className="text-label small order-status-label red">
                        <span
                          data-balloon="Insufficient funds. Required margin is 118023.50 but available margin is 32.91. Check the orderbook for open orders."
                          data-balloon-pos="up"
                          data-balloon-length="large"
                        >
                          REJECTED
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr data-uid="3">
                    <td className="order-timestamp">14:42:58</td>
                    <td className="transaction-type">
                      <span className="text-label blue small">BUY</span>
                    </td>
                    <td className="instrument">
                      <span className="tradingsymbol">
                        <span>IDFCFIRSTB</span>
                      </span>{" "}
                      <span className="exchange text-xxsmall dim">NSE</span>
                    </td>
                    <td className="product">MIS</td>
                    <td className="quantity right">1 / 1</td>
                    <td className="average-price right">
                      <span>59.50</span>
                    </td>
                    <td className="order-status">
                      <span className="text-label small order-status-label green">
                        <span>COMPLETE</span>
                      </span>
                    </td>
                  </tr>
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
              <span>(2)</span>
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
                  <tr data-uid="28809736">
                    <td className="trade-id">28809736</td>
                    <td className="fill-timestamp">14:46:01</td>
                    <td className="transaction-type">
                      <span className="text-label red small">SELL</span>
                    </td>
                    <td className="instrument">
                      <span className="tradingsymbol">
                        <span>IDFCFIRSTB</span>
                      </span>{" "}
                      <span className="exchange text-xxsmall dim">NSE</span>
                    </td>
                    <td className="product">MIS</td>
                    <td className="quantity right">1</td>
                    <td className="average-price right">59.5</td>
                  </tr>
                  <tr data-uid="28775972">
                    <td className="trade-id">28775972</td>
                    <td className="fill-timestamp">14:42:58</td>
                    <td className="transaction-type">
                      <span className="text-label blue small">BUY</span>
                    </td>
                    <td className="instrument">
                      <span className="tradingsymbol">
                        <span>IDFCFIRSTB</span>
                      </span>{" "}
                      <span className="exchange text-xxsmall dim">NSE</span>
                    </td>
                    <td className="product">MIS</td>
                    <td className="quantity right">1</td>
                    <td className="average-price right">59.5</td>
                  </tr>
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
