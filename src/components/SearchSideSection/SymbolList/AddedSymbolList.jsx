import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Actions from "../ActionBar/Actions";

import "bootstrap/dist/css/bootstrap.min.css";

export default function AddedSymbolList(props) {
  const { getAllUserAddedSymbols, isUserAddedSymbolList } = props;
  return (
    <>
      {getAllUserAddedSymbols?.map((symbols, index) => {
        return (
          <div key={index} className="vddl-draggable instrument down">
            <div className="info">
              <span className="symbol">
                <span className="nice-name">{symbols.Name}</span>
              </span>{" "}
              <span className="price">
                <span className="dim">
                  -58.49 <span className="text-xxsmall">%</span>
                </span>
                <span className="change-indicator icon icon-chevron-down">
                  <FaAngleDown />
                </span>
                <span className="last-price">23.60</span>
              </span>
            </div>
            <Actions isUserAddedSymbolList={isUserAddedSymbolList} />
          </div>
        );
      })}
    </>
  );
}
