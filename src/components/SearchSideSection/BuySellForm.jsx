import React from "react";
import "./Form.css";

export default function BuyForm(props) {
  return (
    <span>
      <form data-drag-boundary="true" class="order-window layer-2 place buy">
        <div class="drag-handle"></div>
        <header>
          <div class="row">
            <div class="eight columns">
              <div class="instrument">
                <span class="transaction-type"></span>{" "}
                <span class="tradingsymbol">
                  <span class="name">ACC</span>{" "}
                  <span class="exchange">NSE</span>
                </span>
                ×<span class="qty">1 Qty</span>
              </div>
            </div>
            <div class="four columns text-right">
              <div class="wrap-right">
                <div class="nudge"></div>
                <div>
                  <span data-balloon="Toggle Buy / Sell" data-balloon-pos="up">
                    <div class="su-switch-group tx-toggle">
                      <input
                        id="switch-143"
                        type="checkbox"
                        stateon="SELL"
                        stateoff="BUY"
                        label=""
                        class="su-switch"
                        value="BUY"
                      />{" "}
                      <label for="switch-143" class="su-switch-control"></label>
                    </div>
                  </span>{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://kite.trade/docs/kite/orders/#orders"
                    class="info"
                    data-balloon="Help"
                    data-balloon-pos="up"
                  >
                    <span class="icon icon-info"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="exchange-selector">
            <div class="su-radio-group">
              <div class="exchange su-radio-wrap">
                <input
                  id="radio-145"
                  type="radio"
                  name="exchange"
                  label="BSE: <span class='last-price'>₹1,859.05</span>"
                  class="su-radio"
                  value="BSE"
                />{" "}
                <label for="radio-145" class="su-radio-label">
                  BSE: <span class="last-price">₹1,859.05</span>
                </label>
              </div>
              <div class="exchange su-radio-wrap checked">
                <input
                  id="radio-146"
                  type="radio"
                  name="exchange"
                  label="NSE: <span class='last-price'>₹1,861.95</span>"
                  class="su-radio"
                  value="NSE"
                />{" "}
                <label for="radio-146" class="su-radio-label">
                  NSE: <span class="last-price">₹1,861.95</span>
                </label>
              </div>
            </div>
          </div>
        </header>
        <section class="wrap">
          <div class="variety">
            <div class="su-radio-group">
              <div
                class="type su-radio-wrap checked"
                data-balloon="Regular order"
                data-balloon-pos="up"
              >
                <input
                  id="radio-148"
                  type="radio"
                  name="variety"
                  title="Regular order"
                  label="Regular"
                  class="su-radio"
                  value="regular"
                />{" "}
                <label for="radio-148" class="su-radio-label">
                  Regular
                </label>
              </div>
              <div
                class="type su-radio-wrap"
                data-balloon="Cover order"
                data-balloon-pos="up"
              >
                <input
                  id="radio-149"
                  type="radio"
                  name="variety"
                  title="Cover order"
                  label="Cover"
                  class="su-radio"
                  value="co"
                />{" "}
                <label for="radio-149" class="su-radio-label">
                  Cover
                </label>
              </div>
              <div
                class="type su-radio-wrap"
                data-balloon="After Market Order (for the next day)"
                data-balloon-pos="up"
              >
                <input
                  id="radio-150"
                  type="radio"
                  name="variety"
                  title="After Market Order (for the next day)"
                  label="AMO"
                  class="su-radio"
                  value="amo"
                />{" "}
                <label for="radio-150" class="su-radio-label">
                  AMO
                </label>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="product row">
              <div class="su-radio-group">
                <div
                  class="type four columns su-radio-wrap"
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
                    class="su-radio"
                    value="MIS"
                  />{" "}
                  <label for="radio-152" class="su-radio-label">
                    Intraday <span>MIS</span>
                  </label>
                </div>
                <div
                  class="type four columns su-radio-wrap checked"
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
                    class="su-radio"
                    value="CNC"
                  />{" "}
                  <label for="radio-153" class="su-radio-label">
                    Longterm <span>CNC</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="fields">
              <div class="row">
                <div class="four columns quantity">
                  <div class="no su-input-group su-static-label">
                    <label class="su-input-label su-visible">Qty.</label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      min="1"
                      step="1"
                      autofocus="autofocus"
                      nativeerror="true"
                      staticlabel="true"
                      animate="true"
                      label="Qty."
                      rules="[object Object],[object Object],[object Object]"
                      dynamicwidthsize="8"
                    />
                  </div>
                </div>
                <div class="four columns price">
                  <div class="no su-input-group su-static-label">
                    <label class="su-input-label su-visible">Price</label>{" "}
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
                      rules="[object Object]"
                      dynamicwidthsize="8"
                    />
                  </div>
                </div>
                <div class="four columns trigger">
                  <div class="no su-input-group su-static-label disabled">
                    <label class="su-input-label">Trigger price</label>{" "}
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
                      rules="[object Object],[object Object]"
                      dynamicwidthsize="8"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="four columns price">
                  <div class="su-radio-group order-type">
                    <div
                      class="su-radio-wrap"
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
                        class="su-radio"
                        value="MARKET"
                      />{" "}
                      <label for="radio-158" class="su-radio-label">
                        Market
                      </label>
                    </div>
                    <div
                      class="su-radio-wrap checked"
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
                        class="su-radio"
                        value="LIMIT"
                      />{" "}
                      <label for="radio-159" class="su-radio-label">
                        Limit
                      </label>
                    </div>
                  </div>
                </div>
                <div class="four columns trigger">
                  <div class="su-radio-group text-right order-type">
                    <div
                      class="su-radio-wrap"
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
                        class="su-radio"
                        value="SL"
                      />{" "}
                      <label for="radio-161" class="su-radio-label">
                        SL
                      </label>
                    </div>
                    <div
                      class="su-radio-wrap"
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
                        class="su-radio"
                        value="SL-M"
                      />{" "}
                      <label for="radio-162" class="su-radio-label">
                        SL-M
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="gtt">
            <div class="row">
              <div class="one column">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://zrd.sh/gtt"
                  class="gtt-logo text-xxsmall dim"
                  data-balloon="Automatically create a GTT for the position on order completion"
                  data-balloon-pos="up"
                >
                  <img
                    alt="GTT logo"
                    src="https://kite.zerodha.com/static/images/gtt-logo.svg"
                  />
                </a>
              </div>
              <div class="four columns group">
                <div class="su-checkbox-group">
                  <input
                    id="checkbox-171"
                    type="checkbox"
                    label="Stoploss"
                    class="su-checkbox"
                    value="false"
                  />{" "}
                  <label for="checkbox-171" class="su-checkbox-label">
                    <span class="su-checkbox-box">
                      <span class="su-checkbox-tick"></span>
                    </span>{" "}
                    <span class="su-checkbox-value">Stoploss</span>
                  </label>
                </div>
                <div class="input">
                  <div class="su-input-group disabled">
                    <label class="su-input-label su-visible su-dynamic-label"></label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      step="0.05"
                      disabled="disabled"
                      nativeerror="true"
                      animate="true"
                      label=""
                      rules="[object Object]"
                      dynamicwidthsize="8"
                    />
                  </div>
                  <span>%</span>
                </div>
              </div>
              <div class="four columns group">
                <div class="su-checkbox-group">
                  <input
                    id="checkbox-173"
                    type="checkbox"
                    label="Target"
                    class="su-checkbox"
                    value="false"
                  />{" "}
                  <label for="checkbox-173" class="su-checkbox-label">
                    <span class="su-checkbox-box">
                      <span class="su-checkbox-tick"></span>
                    </span>{" "}
                    <span class="su-checkbox-value">Target</span>
                  </label>
                </div>
                <div class="input">
                  <div class="su-input-group disabled">
                    <label class="su-input-label su-visible su-dynamic-label"></label>{" "}
                    <input
                      type="number"
                      placeholder=""
                      autoCorrect="off"
                      step="0.05"
                      disabled="disabled"
                      nativeerror="true"
                      animate="true"
                      label=""
                      rules="[object Object]"
                      dynamicwidthsize="8"
                    />
                  </div>
                  <span>%</span>
                </div>
              </div>
              <div class="two columns">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://zrd.sh/gtt"
                  class="text-xxsmall dim"
                  data-balloon="Automatically create a GTT for the position on order completion"
                  data-balloon-pos="up"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="row">
              <div class="six columns">
                <div class="row margins">
                  <span class="label">
                    Margin required
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/margins-on-kite-order-window"
                      class="info"
                      data-balloon="Margin calculation explained"
                      data-balloon-pos="up"
                    >
                      <span class="icon icon-info"></span>
                    </a>
                  </span>{" "}
                  <span class="margin-value">₹1,861.95</span>
                  <a href="/" data-balloon="Refresh" data-balloon-pos="up">
                    <span class="reload-margin icon icon-reload"></span>
                  </a>
                </div>
              </div>
              <div class="six columns text-right actions">
                <button type="submit" class="submit">
                  <span>Buy</span>
                </button>{" "}
                <button type="button" class="button-outline cancel">
                  Cancel
                </button>
              </div>
            </div>
          </footer>
        </section>
      </form>
    </span>
  );
}
