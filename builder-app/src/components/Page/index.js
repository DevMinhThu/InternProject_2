import React from "react";
import Component from "../../Handler/components";
import SideBar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function Page(props) {
  return (
    <div className="main_container">
      <Router>
        <SideBar
          content={props.content}
          selectedComp={props.selectedComp}
          update={props.update}
          forceUpdate={props.forceUpdate}
        />
      </Router>

      <div className="editor_container">
        <div className="editor">
          <div
            style={{
              width: "300px",
              backgroundColor: "#fff",
              height: "540px",
            }}
          >
            <div
              className="notification"
              style={{
                display: "flex",
                height: "5%",
                justifyContent: "space-around",
                fontSize: "13px",
              }}
            >
              <div style={container}>
                <i style={icon} className="bi bi-three-dots" />
                Vina
                <i style={icon} className="bi bi-wifi-2" />
              </div>
              <div style={container}>9:41 AM</div>
              <div style={container}>
                100% <i style={icon} className="bi bi-battery-full" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "95%",
              }}
            >
              {props.content.body.map((block) => {
                return <Component key={block._uid} block={block} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="tool_config"></div>
    </div>
  );
}

const icon = {
  fontSize: "18px",
  margin: "3px",
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
};

export default Page;
