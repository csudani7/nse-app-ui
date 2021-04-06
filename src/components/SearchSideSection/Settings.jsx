import React from "react";

export default function Settings() {
  return (
    <div className="dropdown-nav layer-2">
      <ul className="list-flat dropdown-nav-list">
        <li className="block">
          <div className="head">
            <span className="dim">Sort by</span>
            <div
              className="save"
              data-balloon="Save sorted marketwatch"
              data-balloon-pos="up"
            >
              <span className="icon icon-upload"></span>
            </div>
          </div>
          <div className="actions">
            <button
              type="button"
              className="button-small button-outline"
              data-balloon="Sort alphabetically"
              data-balloon-pos="up"
            >
              A-Z
            </button>{" "}
            <button
              type="button"
              className="button-small button-outline"
              data-balloon="Sort by change"
              data-balloon-pos="up"
            >
              %
            </button>{" "}
            <button
              type="button"
              className="button-small button-outline"
              data-balloon="Sort by LTP"
              data-balloon-pos="up"
            >
              LTP
            </button>{" "}
            <button
              type="button"
              className="button-small button-outline"
              data-balloon="Sort by exchange"
              data-balloon-pos="up"
            >
              EXH
            </button>
          </div>
        </li>
        <li className="change block">
          <div className="head">
            <span className="dim">Change</span>{" "}
            <span
              className="help"
              data-balloon="Price change can be either calculated based on previous close price or day open price."
              data-balloon-pos="up"
              data-balloon-length="large"
            >
              <span className="icon icon-info"></span>
            </span>
          </div>
          <div className="su-radio-group change-type">
            <div className="su-radio-wrap checked">
              <input
                id="radio-240"
                type="radio"
                label="Close price"
                className="su-radio"
                value="close"
              />{" "}
              <label for="radio-240" className="su-radio-label">
                Close price
              </label>
            </div>
            <div className="su-radio-wrap">
              <input
                id="radio-241"
                type="radio"
                label="Open price"
                className="su-radio"
                value="open"
              />{" "}
              <label for="radio-241" className="su-radio-label">
                Open price
              </label>
            </div>
          </div>
        </li>
        <li className="change block">
          <div className="head">
            <span className="dim">Change Format</span>
          </div>
          <div className="su-radio-group change-type-format">
            <div className="su-radio-wrap checked">
              <input
                id="radio-243"
                type="radio"
                label="Percentage"
                className="su-radio"
                value="percentage"
              />{" "}
              <label for="radio-243" className="su-radio-label">
                Percentage
              </label>
            </div>
            <div className="su-radio-wrap">
              <input
                id="radio-244"
                type="radio"
                label="Absolute"
                className="su-radio"
                value="absolute"
              />{" "}
              <label for="radio-244" className="su-radio-label">
                Absolute
              </label>
            </div>
          </div>
        </li>
        <li className="option">
          <div className="su-checkbox-group">
            <input
              id="checkbox-245"
              type="checkbox"
              label="Show direction"
              className="su-checkbox"
              value="true"
            />{" "}
            <label for="checkbox-245" className="su-checkbox-label">
              <span className="su-checkbox-box">
                <span className="su-checkbox-tick"></span>
              </span>{" "}
              <span className="su-checkbox-value">Show direction</span>
            </label>
          </div>
        </li>
        <li className="option">
          <div className="su-checkbox-group">
            <input
              id="checkbox-246"
              type="checkbox"
              label="Show change"
              className="su-checkbox"
              value="true"
            />{" "}
            <label for="checkbox-246" className="su-checkbox-label">
              <span className="su-checkbox-box">
                <span className="su-checkbox-tick"></span>
              </span>{" "}
              <span className="su-checkbox-value">Show change</span>
            </label>
          </div>
        </li>
        <li className="option">
          <div className="su-checkbox-group">
            <input
              id="checkbox-247"
              type="checkbox"
              label="Show holdings"
              className="su-checkbox"
              value="true"
            />{" "}
            <label for="checkbox-247" className="su-checkbox-label">
              <span className="su-checkbox-box">
                <span className="su-checkbox-tick"></span>
              </span>{" "}
              <span className="su-checkbox-value">Show holdings</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
