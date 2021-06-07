import React from "react";
import clsx from "clsx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import Actions from "../ActionBar/Actions";
import { callMasterAPI } from "../../../services/xts-connection";

import "bootstrap/dist/css/bootstrap.min.css";

export default function AddedSymbolList(props) {
  const { getAllUserAddedSymbols, isUserAddedSymbolList, isUserSymbolList } =
    props;

  const getContinueDataBySymbol = React.useCallback(async () => {
    return getAllUserAddedSymbols?.map(async (symbolUpdate) => {
      try {
        let masterRes = await callMasterAPI([symbolUpdate]);
        if (masterRes) {
          let LTP = masterRes?.Touchline?.LastTradedPrice;
          let Close = masterRes?.Touchline?.Close;
          let CloseChangeInPriceInPer = (((LTP - Close) / LTP) * 100).toFixed(
            2
          );
          let CloseChangeInPriceInAbs = (LTP - Close).toFixed(2);
          let Open = masterRes?.Touchline?.Open;
          let OpenChangeInPriceInPer = (((LTP - Open) / LTP) * 100).toFixed(2);
          let OpenChangeInPriceInAbs = (LTP - Open).toFixed(2);
          symbolUpdate.LTP = LTP;
          symbolUpdate.OpenChangeInPriceInPer = OpenChangeInPriceInPer;
          symbolUpdate.OpenChangeInPriceInAbs = OpenChangeInPriceInAbs;
          symbolUpdate.CloseChangeInPriceInPer = CloseChangeInPriceInPer;
          symbolUpdate.CloseChangeInPriceInAbs = CloseChangeInPriceInAbs;
        }
      } catch (error) {
        console.error("Error", error.response);
      }
    });
  }, [getAllUserAddedSymbols]);

  const getFilteredCalculatedNumber = (symbol) => {
    if (symbol.OpenChangeInPriceInPer) return symbol.OpenChangeInPriceInPer;
    else if (symbol.OpenChangeInPriceInAbs)
      return symbol.OpenChangeInPriceInAbs;
    else if (symbol.CloseChangeInPriceInPer)
      return symbol.CloseChangeInPriceInPer;
    else if (symbol.CloseChangeInPriceInAbs)
      return symbol.CloseChangeInPriceInAbs;
    return symbol.OpenChangeInPriceInPer;
  };

  React.useEffect(() => {
    async function fetchData() {
      if (isUserAddedSymbolList) {
        return await getContinueDataBySymbol();
      }
    }
    fetchData();
  }, [isUserAddedSymbolList, getContinueDataBySymbol]);

  return (
    <>
      {getAllUserAddedSymbols?.map((symbols, index) => {
        let customRef = React.createRef();
        let PER = getFilteredCalculatedNumber(symbols);
        const returnRedGreenClass = PER > 0 ? "text-success " : "text-danger";
        return (
          <div
            key={index}
            className="vddl-draggable instrument down"
            onMouseEnter={() => {
              customRef.current.className = "";
            }}
            onMouseLeave={() => {
              customRef.current.className = "hide";
            }}
          >
            <div className={clsx("info ", returnRedGreenClass)}>
              <span className="symbol">
                <span className="nice-name">{symbols.Description} </span>
              </span>{" "}
              <span className="price">
                <span className="dim">
                  {PER}
                  <span className="text-xxsmall">%</span>
                </span>
                <span
                  className={clsx(
                    "change-indicator icon icon-chevron-down ",
                    returnRedGreenClass
                  )}
                >
                  {PER > 0 ? <FaAngleUp /> : <FaAngleDown />}
                </span>
                <span className={clsx("last-price ", returnRedGreenClass)}>
                  {symbols.LTP}
                </span>
              </span>
            </div>
            <div ref={customRef} className="hide">
              <Actions
                currentSymbol={symbols}
                isUserAddedSymbolList={isUserAddedSymbolList}
                isUserSymbolList={isUserSymbolList}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
