import React, { useState } from "react";
import { message, Modal } from "antd";
import Draggable from "react-draggable";
import { FaTrash } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { BuyForm, SellForm } from "../BuySellForms";
import { useAddSymbol, useDeleteSymbol } from "../../../hooks";

export default function Actions(props) {
  const { currentSymbol, isUserAddedSymbolList, isUserSymbolList } = props;
  const draggleRef = React.createRef();
  const [buyVisible, setBuyVisible] = useState(false);
  const [buyDisabled, setBuyDisabled] = useState(true);
  const [sellVisible, setSellVisible] = useState(false);
  const [sellDisabled, setSellDisabled] = useState(true);

  const [addSymbol, setAddSymbol] = useState({});
  const { data, isSuccess } = useAddSymbol(addSymbol);

  const [symbolDeleteId, setSymbolDeleteId] = useState(null)
  const { deleteSymbolData, isSuccessDeleteSymbol } = useDeleteSymbol(symbolDeleteId)


  React.useEffect(() => {
    if (isSuccess && data.status_code === 201) {
      message.success(data.message);
    } else if (isSuccess === false && data?.status_code === 500) {
      message.error(data.message);
    }  
  }, [data, isSuccess]);

  React.useEffect(() => {
    if (isSuccessDeleteSymbol && deleteSymbolData.status_code === 201) {
      message.success(deleteSymbolData.message);
    } else if (isSuccessDeleteSymbol === false && deleteSymbolData?.status_code === 500) {
      message.error(deleteSymbolData.message);
    }
  }, [deleteSymbolData, isSuccessDeleteSymbol])

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const handleOk = (_e) => {
    setBuyVisible(false);
    setSellVisible(false);
  };

  const handleCancel = (_e) => {
    setBuyVisible(false);
    setSellVisible(false);
  };

  const showBuyModal = () => {
    setBuyVisible(true);
  };

  const showSellModal = () => {
    setSellVisible(true);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = draggleRef?.current?.getBoundingClientRect();
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    });
  };

  const handleAddSymbolToList = async (e) => {
    let request = {
      "exchangeSegment": currentSymbol.ExchangeSegment,
      "exchangeInstrumentID": currentSymbol.ExchangeInstrumentID,
      "description": currentSymbol.Description,
      "symbolName": currentSymbol.Name,
      "seriesName": currentSymbol.Series
    }
    setAddSymbol(request)
  };

  const handleDeleteSymbolFromList = (e) => {
    const _ID = currentSymbol._id
    setSymbolDeleteId(_ID)
  };
  return (
    <>
      <span className="actions" id="hovar">
        <span data-balloon="Buy (B)" data-balloon-pos="up">
          <button
            type="button"
            className="button-blue buy"
            onClick={showBuyModal}
          >
            B{" "}
          </button>
          {console.log('currentSymbol', currentSymbol)}
          <Modal
            title={
              <div
                className="order-window layer-2 place buy"
                style={{
                  width: "100%",
                  cursor: "move",
                }}
                onMouseOver={() => {
                  if (buyDisabled) {
                    setBuyDisabled(false);
                  }
                }}
                onMouseOut={() => {
                  setBuyDisabled(true);
                }}
              >
                <header>
                  <div className="row">
                    <div className="eight columns">
                      <div className="instrument">
                        <span className="transaction-type"></span>{" "}
                        <span className="tradingsymbol">
                          <span className="name">ACC- {currentSymbol}</span>{" "} 
                          <span className="exchange">NSE</span>
                        </span>
                        ×<span className="qty">1 Qty</span>
                      </div>
                    </div>
                  </div>
                  <div className="exchange-selector">
                    <div className="su-radio-group">
                      <div className="exchange su-radio-wrap checked">
                        <label className="su-radio-label">
                          NSE: <span className="last-price">₹1,861.95</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            }
            visible={buyVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
            modalRender={(modal) => (
              <Draggable
                disabled={buyDisabled}
                bounds={bounds}
                onStart={(event, uiData) => onStart(event, uiData)}
              >
                <div ref={draggleRef}>{modal}</div>
              </Draggable>
            )}
          >
            <BuyForm typeVal="Buy" handleCancel={handleCancel} />
          </Modal>
        </span>
        <span data-balloon="Sell (S)" data-balloon-pos="up">
          <button
            type="button"
            className="button-orange sell"
            onClick={showSellModal}
          >
            S
          </button>
          <Modal
            title={
              <div
                className="order-window layer-2 place sell"
                style={{
                  width: "100%",
                  cursor: "move",
                }}
                onMouseOver={() => {
                  if (sellDisabled) {
                    setSellDisabled(false);
                  }
                }}
                onMouseOut={() => {
                  setSellDisabled(true);
                }}
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
                  </div>
                  <div className="exchange-selector">
                    <div className="su-radio-group">
                      <div className="exchange su-radio-wrap checked">
                        <label className="su-radio-label">
                          NSE: <span className="last-price">₹1,861.95</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            }
            visible={sellVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
            modalRender={(modal) => (
              <Draggable
                disabled={sellDisabled}
                bounds={bounds}
                onStart={(event, uiData) => onStart(event, uiData)}
              >
                <div ref={draggleRef}>{modal}</div>
              </Draggable>
            )}
          >
            <SellForm typeVal="Sell" handleCancel={handleCancel} />
          </Modal>
        </span>
        <span data-balloon="Market Depth" data-balloon-pos="up">
          <button type="button" className="button-outline">
            <span className="icon icon-align-center">
              <FiAlignCenter />
            </span>
          </button>
        </span>
        <span data-balloon="Chart" data-balloon-pos="up">
          <button type="button" className="button-outline">
            <span className="icon icon-trending-up">
              <GrLineChart />
            </span>
          </button>
        </span>
        {isUserSymbolList && (
          <span data-balloon="Delete" data-balloon-pos="up">
            <button
              type="button"
              className="button-outline"
              onClick={(e) => handleDeleteSymbolFromList(e)}
            >
              <span className="icon icon-trash">
                <FaTrash />
              </span>{" "}
            </button>
          </span>
        )}
        {!isUserAddedSymbolList && (
          <span data-balloon="Add" data-balloon-pos="up">
            <button
              type="button"
              className="button-outline"
              onClick={(e) => handleAddSymbolToList(e)}
            >
              <span className="icon icon-add">
                <IoIosAdd />
              </span>{" "}
            </button>
          </span>
        )}
      </span>
    </>
  );
}
