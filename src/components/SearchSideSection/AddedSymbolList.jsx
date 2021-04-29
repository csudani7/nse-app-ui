import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Actions from "./Actions";

import "bootstrap/dist/css/bootstrap.min.css";

export default function AddedSymbolList(props) {
  const { getAllUserAddedSymbols } = props;
  return (
    <>
      {getAllUserAddedSymbols?.map((symbols, index) => {
        return (
          <div
            key={index}
            className="vddl-draggable instrument down index0"
            draggable="true"
          >
            <div>
              <div className="info">
                <span className="symbol">
                  <span>
                    <span className="nice-name">{symbols.Name}</span>
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
        );
      })}
    </>
  );
}
