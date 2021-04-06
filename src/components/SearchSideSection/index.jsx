import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import ShareListItem from "./ShareListItem";
import "./Settings.css";
import { FiSettings } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

function SearchComponent() {
  const DropdownPersist = (props) => {
    const [open, setOpen] = useState(false);
    const onToggle = (isOpen, ev, metadata) => {
      if (metadata.source === "select") {
        setOpen(true);
        return;
      }
      setOpen(isOpen);
    };
    return <Dropdown show={open} onToggle={onToggle} {...props}></Dropdown>;
  };
  return (
    <div className="marketwatch-sidebar marketwatch-wrap ">
      <div className="omnisearch-wrap">
        <span className="icon-search">
          <FaSearch />
        </span>
        <div className="omnisearch">
          <div className="search">
            <input
              type="text"
              id="search-input"
              placeholder="Search eg: infy bse, nifty fut weekly, gold mcx"
              autoComplete="off"
              className="search-input-field"
            />
            <span className="counts">2 / 50</span>
          </div>
        </div>
      </div>
      <div className="instruments">
        <div className="vddl-list list-flat">
          <ShareListItem />
          {/* <ShareListItem/>
            <ShareListItem/> */}
        </div>
      </div>
      <ul className="marketwatch-selector list-flat">
        <li className="item selected" data-balloon="1" data-balloon-pos="up">
          1
        </li>
        <li className="item" data-balloon="2" data-balloon-pos="up">
          2
        </li>
        <li className="item" data-balloon="3" data-balloon-pos="up">
          3
        </li>
        <li className="item" data-balloon="4" data-balloon-pos="up">
          4
        </li>
        <li className="item" data-balloon="5" data-balloon-pos="up">
          5
        </li>

        <li className="block" style={{ paddingLeft: "100px" }}>
          <DropdownPersist title="Dropdown">
            <Dropdown.Toggle
              style={{
                backgroundColor: "white",
                borderStyle: "white",
                borderWidth: "0",
              }}
            >
              <FiSettings color="grey" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div style={{ width: "80%" }}>
                <li eventKey="1" className="change block">
                  <div class="head">
                    <span class="dim">Change</span>{" "}
                    <span
                      class="help"
                      data-balloon="Price change can be either calculated based on previous close price or day open price."
                      data-balloon-pos="up"
                      data-balloon-length="large"
                    >
                      <span class="icon icon-info"></span>
                    </span>
                  </div>
                  <div class="su-radio-group change-type" id="blocklabel">
                    <div class="su-radio-wrap checked" id="radiogroup1">
                      <input
                        id="radio-240"
                        type="radio"
                        label="Close price"
                        class="su-radio"
                        value="close"
                      />{" "}
                      <label for="radio-240" class="su-radio-label">
                        Close price
                      </label>
                    </div>
                    <div class="su-radio-wrap" id="radiogroup2">
                      <input
                        id="radio-241"
                        type="radio"
                        label="Open price"
                        class="su-radio"
                        value="open"
                      />{" "}
                      <label for="radio-241" class="su-radio-label">
                        Open price
                      </label>
                    </div>
                  </div>
                </li>
                <li eventKey="2" className="change block">
                  <div class="head">
                    <span class="dim">Change Format</span>
                  </div>
                  <div
                    class="su-radio-group change-type-format"
                    id="blocklabel"
                  >
                    <div class="su-radio-wrap checked" id="radiogroup1">
                      <input
                        id="radio-243"
                        type="radio"
                        label="Percentage"
                        class="su-radio"
                        value="percentage"
                      />{" "}
                      <label for="radio-243" class="su-radio-label">
                        Percentage
                      </label>
                    </div>
                    <div class="su-radio-wrap" id="radiogroup2">
                      <input
                        id="radio-244"
                        type="radio"
                        label="Absolute"
                        class="su-radio"
                        value="absolute"
                      />{" "}
                      <label for="radio-244" class="su-radio-label">
                        Absolute
                      </label>
                    </div>
                  </div>
                </li>
                <li eventKey="3" className="change block">
                  <div class="head">
                    <span class="dim">Add Funds</span>
                  </div>
                  <div>
                    <input
                      id="text-001"
                      type="text"
                      label="Percentage"
                      style={{ width: "100%", marginTop: "5px" }}
                    ></input>
                    <button
                      type="button"
                      style={{
                        padding: "2px",
                        marginLeft: "5px",
                        marginTop: "20px",
                        width: "50%",
                      }}
                      class="button-small button-outline"
                      data-balloon="Add Funds"
                      data-balloon-pos="up"
                    >
                      Add
                    </button>
                  </div>
                </li>
                <Dropdown.Divider />
              </div>
            </Dropdown.Menu>
          </DropdownPersist>
        </li>
      </ul>
    </div>
  );
}

export default SearchComponent;
