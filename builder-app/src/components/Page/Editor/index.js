import React from "react";
import Component from "../../../Handler/components";
import { SidebarData } from "../Sidebar/SidebarData";

function Editor(props) {
  return (
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
            {SidebarData().map((block) => {
              const item = block;
              return item.comps.map((block, index) => {
                return <Component key={index} block={block} />;
              });
            })}
          </div>
        </div>
      </div>
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

export default Editor;
