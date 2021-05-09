import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import Actions from "../ActionBar/Actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { callMasterAPI } from "../../../services/xts-connection";
// import { useGetSymbolFromXTS } from "../../../hooks";

export default function AddedSymbolList(props) {
  const {
    getAllUserAddedSymbols,
    isUserAddedSymbolList,
    isUserSymbolList,
  } = props;

  console.log('getAllUserAddedSymbols', process.env.REACT_APP_XTSSecretKey);

  useEffect(() => {
    let data = null
    async function fetchData(symbols) {
      data = await callMasterAPI(symbols)
      console.log('initial data', data);
    }
     fetchData(getAllUserAddedSymbols);
  } );
  // const {data: getSymbolFromXTS} = useGetSymbolFromXTS()

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
                  -58.49
                  <span className="text-xxsmall">%</span>
                </span>
                <span className="change-indicator icon icon-chevron-down">
                  <FaAngleDown />
                </span>
                <span className="last-price">
                  23.601</span>
              </span>
            </div>
            <Actions
              isUserAddedSymbolList={isUserAddedSymbolList}
              isUserSymbolList={isUserSymbolList}
            />
          </div>
        );
      })}
    </>
  );
}
