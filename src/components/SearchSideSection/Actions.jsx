import React, { useState } from "react";
import BuySellForm from "./BuySellForm";
import { BuySellToggler } from "./Context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { FaTrash } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Actions() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const toggleOpen = () => {
    setOpen(!open);
    localStorage.setItem("isOpen", open);
  };
  return (
    <>
      <div>
        <span className="actions" id="hovar">
          <span data-balloon="Buy (B)" data-balloon-pos="up">
            <button
              type="button"
              className="button-blue buy"
              onClick={toggleOpen}
            >
              B{" "}
            </button>
            <Modal
              open={open}
              center
              onClose={onCloseModal}
              showCloseIcon={false}
              animationDuration={0}
            >
              <BuySellForm typeVal="Sell" />
            </Modal>
          </span>
          <span data-balloon="Sell (S)" data-balloon-pos="up">
            <button
              type="button"
              className="button-orange sell"
              onClick={onOpenModal}
            >
              S
            </button>
          </span>
          <span data-balloon="Market Depth (D)" data-balloon-pos="up">
            <button type="button" className="button-outline">
              <span className="icon icon-align-center">
                <FiAlignCenter />
              </span>
            </button>
          </span>
          <span data-balloon="Chart (C)" data-balloon-pos="up">
            <button type="button" className="button-outline">
              <span className="icon icon-trending-up">
                <GrLineChart />
              </span>
            </button>
          </span>
          <span data-balloon="Delete (del)" data-balloon-pos="up">
            <button type="button" className="button-outline">
              <span className="icon icon-trash">
                <FaTrash />
              </span>{" "}
            </button>
          </span>
          <div id="context-menu-1247" className="context-menu">
            <div className="context-menu-button-wrap">
              <button
                type="button"
                className="context-menu-button button-outline"
                data-balloon="More"
                data-balloon-pos="up"
              >
                <span className="icon icon-ellipsis">
                  <HiDotsHorizontal />
                </span>
              </button>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export { BuySellToggler };
