import { Tabs } from "antd";
import "antd/dist/antd.css";
import React, { useContext, useState } from "react";
import { ComponentContext } from "../../../contexts/ComponentContext";
import "../../../styles/main.scss";
import TabContent from "../TabContent/index";

const { TabPane } = Tabs;

function TabOptions() {
  // load context
  const { getDataInTab } = useContext(ComponentContext);

  const [size] = useState("large");
  const [inputValues, setInputValues] = useState({
    headline: "",
  });

  const onHandleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setInputValues({ ...inputValues, [name]: target.value });

    // send state to context
    getDataInTab(inputValues);
  };

  return (
    <Tabs type="card" size={size} centered>
      <TabPane tab={<i className="bi bi-grid-fill" />} key="1">
        <TabContent />
      </TabPane>
      <TabPane tab={<i className="bi bi-layers-fill" />} key="2">
        <form>
          <label style={{ justifyContent: "center", display: "flex" }}>
            <input
              type="text"
              name="headline"
              onChange={onHandleChange}
              value={inputValues.headline}
              placeholder="Enter headline..."
              style={{ marginLeft: "5px" }}
            />
          </label>
        </form>
      </TabPane>
      <TabPane tab={<i className="bi bi-palette-fill" />} key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

export default TabOptions;
