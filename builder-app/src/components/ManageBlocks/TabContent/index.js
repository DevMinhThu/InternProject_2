import { Collapse } from "antd";
import "antd/dist/antd.css";
import React, { useContext } from "react";
import Components from "../../../Handler/components";
import "../../../styles/main.scss";
import "./style.css";
// import { ComponentContext } from "../../../contexts/ComponentContext";

const { Panel } = Collapse;

function Text(props) {
  return <p style={styleText}>{props.title}</p>;
}

function TabContent(props) {
  // const { getData } = useContext(ComponentContext);

  return (
    <div className="tab-content">
      <Collapse className="styleCollapse">
        <Panel header={<Text title="Button" />} key="1" className="demo">
          {props.content.body.map((block) => {
            return <Components block={block} />;
          })}
          {/* {getData()} */}
        </Panel>
        <Panel header={<Text title="Footer" />} key="2"></Panel>
        <Panel header={<Text title="Header" />} key="3"></Panel>
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
