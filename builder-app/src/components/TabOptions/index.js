import { Tabs } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Component from "../../handler/components";
import "../../styles/main.scss";

const { TabPane } = Tabs;

function TabOptions(props) {
  const [size] = useState("large");

  //* handle change input
  const onChange = (event) => {
    props.selectedComp.headline = event.target.value;
    props.forceUpdate(!props.update);
  };

  return (
    <Tabs style={tabs} type="line" size={size} centered>
      <TabPane style={style} tab={<i className="bi bi-grid-fill" />} key="1">
        {props.content.body.map((block) => {
          return <Component key={block._uid} block={block} />;
        })}
      </TabPane>
      <TabPane style={style} tab={<i className="bi bi-layers-fill" />} key="2">
        <p style={{ color: "#fff", fontSize: "18px", margin: "0px" }}>
          caption:{" "}
        </p>
        <input
          placeholder="value..."
          value={props.selectedComp.headline}
          onChange={onChange}
        />
      </TabPane>
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
