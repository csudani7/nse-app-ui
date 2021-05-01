import React from "react";

export default function SellForm(props) {
  return (
    <>
      <form
        data-drag-boundary="true"
        className="order-window layer-2 place sell"
      >
        <header>
          <div className="row">
            <div className="eight columns">
              <div className="instrument">
                <span className="transaction-type"></span>{" "}
                <span className="tradingsymbol">
                  <span className="name">HDFC</span>{" "}
                  <span className="exchange">NSE</span>
                </span>
                ×<span className="qty">1 Qty</span>
              </div>
            </div>
            <div className="four columns text-right">
              <div className="wrap-right">
                <div className="nudge"></div>
                <div>
                  <span data-balloon="Toggle Buy / Sell" data-balloon-pos="up">
                    <div className="su-switch-group tx-toggle">
                      <input
                        id="switch-143"
                        type="checkbox"
                        stateon="SELL"
                        stateoff="BUY"
                        label=""
                        className="su-switch"
                        value="BUY"
                      />{" "}
                      <label className="su-switch-control"></label>
                    </div>
                  </span>{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://kite.trade/docs/kite/orders/#orders"
                    className="info"
                    data-balloon="Help"
                    data-balloon-pos="up"
                  >
                    <span className="icon icon-info"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="exchange-selector">
            <div className="su-radio-group">
              <div className="exchange su-radio-wrap">
                <input
                  id="radio-145"
                  type="radio"
                  name="exchange"
                  label="BSE: <span className='last-price'>₹1,859.05</span>"
                  className="su-radio"
                  value="BSE"
                />{" "}
                <label className="su-radio-label">
                  BSE: <span className="last-price">₹1,859.05</span>
                </label>
              </div>
              <div className="exchange su-radio-wrap checked">
                <input
                  id="radio-146"
                  type="radio"
                  name="exchange"
                  label="NSE: <span className='last-price'>₹1,861.95</span>"
                  className="su-radio"
                  value="NSE"
                />{" "}
                <label className="su-radio-label">
                  NSE: <span className="last-price">₹1,861.95</span>
                </label>
              </div>
            </div>
          </div>
        </header>
        <section className="wrap">
          <div className="variety">
            <div className="su-radio-group">
              <div
                className="type su-radio-wrap checked"
                data-balloon="Regular order"
                data-balloon-pos="up"
              >
                <input
                  id="radio-148"
                  type="radio"
                  name="variety"
                  title="Regular order"
                  label="Regular"
                  className="su-radio"
                  value="regular"
                />{" "}
                <label className="su-radio-label">Regular</label>
              </div>
              <div
                className="type su-radio-wrap"
                data-balloon="Cover order"
                data-balloon-pos="up"
              >
                <input
                  id="radio-149"
                  type="radio"
                  name="variety"
                  title="Cover order"
                  label="Cover"
                  className="su-radio"
                  value="co"
                />{" "}
                <label className="su-radio-label">Cover</label>
              </div>
              <div
                className="type su-radio-wrap"
                data-balloon="After Market Order (for the next day)"
                data-balloon-pos="up"
              >
                <input
                  id="radio-150"
                  type="radio"
                  name="variety"
                  title="After Market Order (for the next day)"
                  label="AMO"
                  className="su-radio"
                  value="amo"
                />{" "}
                <label className="su-radio-label">AMO</label>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="product row">
              <div className="su-radio-group">
                <div
                  className="type four columns su-radio-wrap"
                  data-balloon="Margin Intraday Squareoff: Requires lower margin. Has to be exited before market close."
                  data-balloon-pos="up"
                  data-balloon-length="large"
                >
                  <input
                    id="radio-152"
                    type="radio"
                    name="product"
                    title="Margin Intraday Squareoff: Requires lower margin. Has to be exited before market close."
                    label="Intraday <span>MIS</span>"
                    className="su-radio"
                    value="MIS"
                  />{" "}
                  <label className="su-radio-label">
                    Intraday <span>MIS</span>
                  </label>
                </div>
                <div
                  className="type four columns su-radio-wrap checked"
                  data-balloon="CashNCarry: Longterm investment. Requires full upfront margin."
                  data-balloon-pos="up"
                  data-balloon-length="large"
                >
                  <input
                    id="radio-153"
                    type="radio"
                    name="product"
                    title="CashNCarry: Longterm investment. Requires full upfront margin."
                    label="Longterm <span>CNC</span>"
                    className="su-radio"
                    value="CNC"
                  />{" "}
                  <label className="su-radio-label">
                    Longterm <span>CNC</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="fields">
              <div className="row">
                <div className="four columns quantity">
                  <div className="no su-input-group su-static-label">
                    <label className="su-input-label su-visible">Qty.</label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      min="1"
                      step="1"
                      autoFocus="autofocus"
                      nativeerror="true"
                      staticlabel="true"
                      animate="true"
                      label="Qty."
                      dynamicwidthsize="8"
                    />
                  </div>
                </div>
                <div className="four columns price">
                  <div className="no su-input-group su-static-label">
                    <label className="su-input-label su-visible">Price</label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      min="0.05"
                      step="0.05"
                      nativeerror="true"
                      staticlabel="true"
                      animate="true"
                      label="Price"
                      dynamicwidthsize="8"
                    />
                  </div>
                </div>
                <div className="four columns trigger">
                  <div className="no su-input-group su-static-label disabled">
                    <label className="su-input-label">Trigger price</label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      min="0"
                      step="0.05"
                      disabled="disabled"
                      nativeerror="true"
                      staticlabel="true"
                      animate="true"
                      label="Trigger price"
                      dynamicwidthsize="8"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="four columns price">
                  <div className="su-radio-group order-type">
                    <div
                      className="su-radio-wrap"
                      tooltip-pos="down"
                      data-balloon="Buy at market price"
                      data-balloon-pos="down"
                    >
                      <input
                        id="radio-158"
                        type="radio"
                        name="orderType"
                        title="Buy at market price"
                        label="Market"
                        className="su-radio"
                        value="MARKET"
                      />{" "}
                      <label className="su-radio-label">Market</label>
                    </div>
                    <div
                      className="su-radio-wrap checked"
                      tooltip-pos="down"
                      data-balloon="Buy at a preferred price"
                      data-balloon-pos="down"
                    >
                      <input
                        id="radio-159"
                        type="radio"
                        name="orderType"
                        title="Buy at a preferred price"
                        label="Limit"
                        className="su-radio"
                        value="LIMIT"
                      />{" "}
                      <label className="su-radio-label">Limit</label>
                    </div>
                  </div>
                </div>
                <div className="four columns trigger">
                  <div className="su-radio-group text-right order-type">
                    <div
                      className="su-radio-wrap"
                      tooltip-pos="down"
                      data-balloon="Buy at a preferred price with a stoploss"
                      data-balloon-pos="down"
                    >
                      <input
                        id="radio-161"
                        type="radio"
                        name="orderType"
                        title="Buy at a preferred price with a stoploss"
                        label="SL"
                        className="su-radio"
                        value="SL"
                      />{" "}
                      <label className="su-radio-label">SL</label>
                    </div>
                    <div
                      className="su-radio-wrap"
                      tooltip-pos="down"
                      data-balloon="Buy at market price with stoploss"
                      data-balloon-pos="down"
                    >
                      <input
                        id="radio-162"
                        type="radio"
                        name="orderType"
                        title="Buy at market price with stoploss"
                        label="SL-M"
                        className="su-radio"
                        value="SL-M"
                      />{" "}
                      <label className="su-radio-label">SL-M</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gtt">
            <div className="row">
              <div className="one column">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://zrd.sh/gtt"
                  className="gtt-logo text-xxsmall dim"
                  data-balloon="Automatically create a GTT for the position on order completion"
                  data-balloon-pos="up"
                >
                  <img
                    alt="GTT logo"
                    src="https://kite.zerodha.com/static/images/gtt-logo.svg"
                  />
                </a>
              </div>
              <div className="four columns group">
                <div className="su-checkbox-group">
                  <input
                    id="checkbox-171"
                    type="checkbox"
                    label="Stoploss"
                    className="su-checkbox"
                    value="false"
                  />{" "}
                  <label className="su-checkbox-label">
                    <span className="su-checkbox-box">
                      <span className="su-checkbox-tick"></span>
                    </span>{" "}
                    <span className="su-checkbox-value">Stoploss</span>
                  </label>
                </div>
                <div className="input">
                  <div className="su-input-group disabled">
                    <label className="su-input-label su-visible su-dynamic-label"></label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      step="0.05"
                      disabled="disabled"
                      nativeerror="true"
                      animate="true"
                      label=""
                      dynamicwidthsize="8"
                    />
                  </div>
                  <span>%</span>
                </div>
              </div>
              <div className="four columns group">
                <div className="su-checkbox-group">
                  <input
                    id="checkbox-173"
                    type="checkbox"
                    label="Target"
                    className="su-checkbox"
                    value="false"
                  />{" "}
                  <label className="su-checkbox-label">
                    <span className="su-checkbox-box">
                      <span className="su-checkbox-tick"></span>
                    </span>{" "}
                    <span className="su-checkbox-value">Target</span>
                  </label>
                </div>
                <div className="input">
                  <div className="su-input-group disabled">
                    <label className="su-input-label su-visible su-dynamic-label"></label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      step="0.05"
                      disabled="disabled"
                      nativeerror="true"
                      animate="true"
                      label=""
                      dynamicwidthsize="8"
                    />
                  </div>
                  <span>%</span>
                </div>
              </div>
              <div className="two columns">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://zrd.sh/gtt"
                  className="text-xxsmall dim"
                  data-balloon="Automatically create a GTT for the position on order completion"
                  data-balloon-pos="up"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="row">
              <div className="six columns">
                <div className="row margins">
                  <span className="label">
                    Margin required
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/margins-on-kite-order-window"
                      className="info"
                      data-balloon="Margin calculation explained"
                      data-balloon-pos="up"
                    >
                      <span className="icon icon-info"></span>
                    </a>
                  </span>{" "}
                  <span className="margin-value">₹1,861.95</span>
                  <a href="/" data-balloon="Refresh" data-balloon-pos="up">
                    <span className="reload-margin icon icon-reload"></span>
                  </a>
                </div>
              </div>
              <div className="six columns text-right actions">
                <button type="submit" className="submit">
                  <span>Sell</span>
                </button>{" "}
                <button type="button" className="button-outline cancel">
                  Cancel
                </button>
              </div>
            </div>
          </footer>
        </section>
      </form>
    </>
  );
}
