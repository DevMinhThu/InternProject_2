import { Tabs } from "antd";
import React, { useState } from "react";

const { TabPane } = Tabs;

function TabOptions({ selectedComp, update, forceUpdate }) {
  const [size] = useState("large");

  //* handle change input
  const onChange = (event) => {
    selectedComp.headline = event.target.value;
    forceUpdate(!update);
  };

  return (
    <Tabs style={tabs} type="line" size={size} centered>
      <TabPane style={style} tab={<i className="bi bi-grid-fill" />} key="1">
        <p style={{ color: "#fff", fontSize: "18px", margin: "0px" }}>
          caption:{" "}
        </p>
        <input
          placeholder="value..."
          value={selectedComp.headline}
          onChange={onChange}
        />
      </TabPane>
      <TabPane
        style={style}
        tab={<i className="bi bi-layers-fill" />}
        key="2"
      ></TabPane>
      <TabPane style={style} tab={<i className="bi bi-palette-fill" />} key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

const style = {
  backgroundColor: "#1c1e26",
  padding: "10px",
};

const tabs = {
  backgroundColor: "#1c1e26",
};

export default TabOptions;
