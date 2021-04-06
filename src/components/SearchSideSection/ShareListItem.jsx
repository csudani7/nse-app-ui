import React from "react";
import { FaAngleDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Actions from "./Actions";

export default function ShareListItem() {
  return (
    <div>
      <div className="vddl-draggable instrument down index0" draggable="true">
        <div>
          <div className="info">
            <span className="symbol">
              <span>
                <span className="nice-name">
                  NIFTY 1
                  <sup>
                    st <span className="weekly">w</span>
                  </sup>{" "}
                  APR 15200 CE
                </span>
              </span>
            </span>{" "}
            <span className="price">
              <span>
                <span className="dim">
                  -58.49 <span className="text-xxsmall">%</span>
                </span>
              </span>
              <span className="change-indicator icon icon-chevron-down">
                <FaAngleDown />
              </span>
              <span className="last-price">23.60</span>
            </span>
          </div>
          <Actions />
        </div>
      </div>
    </div>
  );
}
