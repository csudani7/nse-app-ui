import React from "react";
import { Menu, Dropdown, Button, InputNumber } from "antd";
import { FiSettings } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

import ShareListItem from "./ShareListItem";
import { useAddFunds } from "../../hooks";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Settings.css";

function SearchComponent() {
  const [funds, setFunds] = React.useState(undefined);
  const [flag, setFlag] = React.useState(false);
  useAddFunds(funds);
  console.log(funds, "funds");
  const onChange = (value) => {
    if (flag) {
      const params = {
        Credit: value,
      };
      setFunds(params);
    }
  };
  const handleAddFunds = () => {
    setFlag(true);
  };
  const menuItems = (
    <Menu style={{ width: 120 }}>
      <Menu.Item>
        <span class="dim">Change</span>{" "}
        <span
          class="help"
          data-balloon="Price change can be either calculated based on previous close price or day open price."
          data-balloon-pos="up"
          data-balloon-length="large"
        >
          <span class="icon icon-info"></span>
        </span>
      </Menu.Item>
      <Menu.Item>
        {/* Radio Button */}
        <label for="radio-240" class="su-radio-label">
          Open price
        </label>
      </Menu.Item>
      <Menu.Item>
        {/* Radio Button */}
        <label for="radio-240" class="su-radio-label">
          Close price
        </label>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <span class="dim">Change Format</span>
      </Menu.Item>
      <Menu.Item>
        <label for="radio-243" class="su-radio-label">
          Percentage
        </label>
      </Menu.Item>
      <Menu.Item>
        <label for="radio-243" class="su-radio-label">
          absolute
        </label>
      </Menu.Item>
      <Menu.Item>
        <InputNumber min={1} defaultValue={0} onChange={onChange} />
      </Menu.Item>
      <Menu.Item>
        <Button type="primary" size={"default"} onClick={handleAddFunds}>
          Add Funds
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="marketwatch-sidebar marketwatch-wrap">
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
          <Dropdown overlay={menuItems} placement="topRight">
            <FiSettings color="grey" />
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default SearchComponent;
