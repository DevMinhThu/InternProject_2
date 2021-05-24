import { Tabs } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "../../../styles/main.scss";
import TabContent from "../TabContent/index";

const { TabPane } = Tabs;

function TabOptions() {
  const [size] = useState("large");
  return (
    <Tabs type="card" size={size} centered>
      <TabPane tab={<i className="bi bi-grid-fill" />} key="1">
        <TabContent />
      </TabPane>
      <TabPane tab={<i className="bi bi-layers-fill" />} key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab={<i className="bi bi-palette-fill" />} key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

export default TabOptions;
