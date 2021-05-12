import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Actions from "../ActionBar/Actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { callMasterAPI } from "../../../services/xts-connection";

export default function AddedSymbolList(props) {
  const {
    getAllUserAddedSymbols,
    isUserAddedSymbolList,
    isUserSymbolList,
  } = props;


  // const [isHoverAction, setIsHoverAction] = React.useState(false)

  // React.useEffect(() => {

  // async function socketConnection() {
  //   const logInXTS = await getXTSAPIToken();
  //   let XTSToken = logInXTS.result.token;
  //   let XTSuserID = logInXTS.result.userID;
  //   const socketIO = socketIOClient(ENDPOINT, {
  //     path: '/marketdata/socket.io',
  //     query: {
  //       token: XTSToken,
  //       userID: XTSuserID
  //     }
  //   });
  //   // setSocket(socketIO)

  //   socketIO.on('connect', function () {
  //     console.info("Socket Connection!");
  //     console.log("Socket Connection!");
  //   });

  //   socketIO.on("1502-JSON-Full",function(data){
  //     console.log("data is "+data);
  //    }); 

  //   socketIO.on('onJoined', function () {
  //     console.info("JOINED!");
  //   });
  //   socketIO.on('error', function (data) {
  //     console.info("interactive error:" + data);
  //   });
  //   socketIO.on('position', function (position) {
  //     console.info("position socketIO connected successfully!");
  //   });
  //   // socketIO.on('disconnect', function () {
  //   //   console.info("disconnect socketIO connected successfully!");
  //   // });
  //   socketIO.on('order', function (order) {
  //     console.info("order socketIO connected successfully!");
  //   });
  //   socketIO.on('trade', function (trade) {
  //     console.info("trade socketIO connected successfully!");
  //   });


  //   socketIO.on('logout', function () {
  //     console.info("logout socket logged out!");
  //   });
  // }
  // socketConnection();

  // }, [])

  // const getContinueDataBySymbol = React.useCallback(() => {
  //   getAllUserAddedSymbols?.map(async (symbolUpdate) => {
  //     try {
  //       let masterRes = await callMasterAPI([symbolUpdate])
  //       if (masterRes) {
  //         let LTP = masterRes?.Touchline?.LastTradedPrice

  //         /** CLOSE PRICE */
  //         let Close = masterRes?.Touchline?.Close
  //         let CloseChangeInPriceInPer = (((LTP - Close) / LTP) * 100).toFixed(2);
  //         let CloseChangeInPriceInAbs = (LTP - Close).toFixed(2);

  //         //open formula
  //         let Open = masterRes?.Touchline?.Open
  //         let OpenChangeInPriceInPer = (((LTP - Open) / LTP) * 100).toFixed(2);
  //         let OpenChangeInPriceInAbs = (LTP - Open).toFixed(2);

  //         // if changeInPrice is +ve then arrow up and green color
  //         // else arrow down and red color
  //         symbolUpdate.LTP = LTP
  //         symbolUpdate.OpenChangeInPriceInPer = OpenChangeInPriceInPer
  //         symbolUpdate.OpenChangeInPriceInAbs = OpenChangeInPriceInAbs

  //         symbolUpdate.CloseChangeInPriceInPer = CloseChangeInPriceInPer
  //         symbolUpdate.CloseChangeInPriceInAbs = CloseChangeInPriceInAbs
  //       }
  //     } catch (error) {
  //       console.error('Error', error)
  //     }
  //   })
  // }), [getContinueDataBySymbol];

  // React.useEffect(() => {
  //   if (isUserAddedSymbolList) {
  //     getContinueDataBySymbol();
  //   }
  // }), [getContinueDataBySymbol, isUserAddedSymbolList]);

  setInterval(() => {
    getAllUserAddedSymbols?.map(async (symbolUpdate) => {

      try {
        let masterRes = await callMasterAPI([symbolUpdate])
        if (masterRes) {
          let LTP = masterRes?.Touchline?.LastTradedPrice

          /** CLOSE PRICE */
          let Close = masterRes?.Touchline?.Close
          let CloseChangeInPriceInPer = (((LTP - Close) / LTP) * 100).toFixed(2);
          let CloseChangeInPriceInAbs = (LTP - Close).toFixed(2);

          //open formula
          let Open = masterRes?.Touchline?.Open
          let OpenChangeInPriceInPer = (((LTP - Open) / LTP) * 100).toFixed(2);
          let OpenChangeInPriceInAbs = (LTP - Open).toFixed(2);

          // if changeInPrice is +ve then arrow up and green color
          // else arrow down and red color
          symbolUpdate.LTP = LTP
          symbolUpdate.OpenChangeInPriceInPer = OpenChangeInPriceInPer
          symbolUpdate.OpenChangeInPriceInAbs = OpenChangeInPriceInAbs

          symbolUpdate.CloseChangeInPriceInPer = CloseChangeInPriceInPer
          symbolUpdate.CloseChangeInPriceInAbs = CloseChangeInPriceInAbs
        }
      } catch (error) {
        console.error('Error', error)
      }
    })
  }, 5000);

  const getFilteredCalculatedNumber = symbol => {
    if (symbol.OpenChangeInPriceInPer) return symbol.OpenChangeInPriceInPer
    else if (symbol.OpenChangeInPriceInAbs) return symbol.OpenChangeInPriceInAbs
    else if (symbol.CloseChangeInPriceInPer) return symbol.CloseChangeInPriceInPer
    else if (symbol.CloseChangeInPriceInAbs) return symbol.CloseChangeInPriceInAbs
    return symbol.OpenChangeInPriceInPer
  }

  return (
    <>
      {getAllUserAddedSymbols?.map((symbols, index) => {
  let customRef = React.createRef();

        let PER = getFilteredCalculatedNumber(symbols)
        const returnRedGreenClass = (PER > 0 ? "text-success " : 'text-danger')
        return (
          <div key={index} className="vddl-draggable instrument down"
            onMouseEnter={(e => {
              customRef.current.className = ''
            })}
            onMouseLeave={(e => {
              customRef.current.className = 'hide'
            })}
            >
            <div className={"info " + returnRedGreenClass}>
              <span className="symbol">
                <span className="nice-name">{symbols.Name} </span>
              </span>{" "}
              <span className="price">
                <span className="dim">
                  {PER}
                  <span className="text-xxsmall">%</span>
                </span>
                <span className={"change-indicator icon icon-chevron-down " + returnRedGreenClass}>
                  {PER > 0 ? <FaAngleUp /> : <FaAngleDown />}

                </span>
                <span className={"last-price " + returnRedGreenClass}>
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
