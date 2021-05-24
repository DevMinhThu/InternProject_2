import { Tabs } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "../../../styles/main.scss";
import TabContent from "../TabContent/index";
// import { AppContext } from "../../../contexts/app-context";

const { TabPane } = Tabs;

function TabOptions(props) {
  const [size] = useState("large");

  return (
    <Tabs type="card" size={size} centered>
      <TabPane tab={<i className="bi bi-grid-fill" />} key="1">
        <TabContent content={props.content} />
      </TabPane>
      <TabPane tab={<i className="bi bi-layers-fill" />} key="2">
        <input
          placeholder="headline"
          value={props.selectedComp.headline}
          onChange={(event) => {
            props.selectedComp.headline = event.target.value;
            props.forceUpdate(!props.update);
          }}
        />
      </TabPane>
      <TabPane tab={<i className="bi bi-palette-fill" />} key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

export default TabOptions;
