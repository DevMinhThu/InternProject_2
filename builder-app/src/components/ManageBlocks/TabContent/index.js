import { Collapse } from "antd";
import "antd/dist/antd.css";
import React, { useContext } from "react";
import { ComponentContext } from "../../../contexts/ComponentContext";
import "../../../styles/main.scss";
import "./style.css";

const { Panel } = Collapse;

function Text(props) {
  return <p style={styleText}>{props.title}</p>;
}

function TabContent() {
  // load context
  const { getData } = useContext(ComponentContext);

  return (
    <div className="tab-content">
      {/* {console.log(props.data[0].props.block.component)} */}
      <Collapse className="styleCollapse">
        <Panel header={<Text title="Button" />} key="1" className="demo">
          {getData()}
        </Panel>
        <Panel header={<Text title="Footer" />} key="2"></Panel>
        <Panel header={<Text title="Header" />} key="3"></Panel>
        <Panel header={<Text title="Radio" />} key="4"></Panel>
        <Panel header={<Text title="SearchBar" />} key="5"></Panel>
        <Panel header={<Text title="CheckBox" />} key="6"></Panel>
        <Panel header={<Text title="FormInputs" />} key="7"></Panel>
        <Panel header={<Text title="Spinner" />} key="8"></Panel>
        <Panel header={<Text title="Switch" />} key="9"></Panel>
        <Panel header={<Text title="ToolBar" />} key="10"></Panel>
      </Collapse>
      ,
    </div>
  );
}

const styleText = {
  margin: 0,
  padding: 0,
  color: "#fff",
};

export default TabContent;
