import React, { useState } from "react";
import { Modal } from "antd";
import Draggable from "react-draggable";
import { FaTrash } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { BuyForm, SellForm } from "./BuySellForms";

export default function Actions() {
  const draggleRef = React.createRef();
  const [buyVisible, setBuyVisible] = useState(false);
  const [buyDisabled, setBuyDisabled] = useState(true);
  const [sellVisible, setSellVisible] = useState(false);
  const [sellDisabled, setSellDisabled] = useState(true);
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
          <Modal
            title={
              <div
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
                Buy Order
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
            <BuyForm typeVal="Buy" />
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
                Sell Order
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
            <SellForm typeVal="sell" />
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
        <span data-balloon="Delete" data-balloon-pos="up">
          <button type="button" className="button-outline">
            <span className="icon icon-trash">
              <FaTrash />
            </span>{" "}
          </button>
        </span>
        <span data-balloon="Add" data-balloon-pos="up">
          <button type="button" className="button-outline">
            <span className="icon icon-add">
              <IoIosAdd />
            </span>{" "}
          </button>
        </span>
      </span>
    </>
  );
}
