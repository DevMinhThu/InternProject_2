import React from "react";
import "../../styles/main.scss";
import Components from "../../Handler/components";

function Page(props) {
  return (
    <div className="main-content">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div className="panel__basic-actions"></div>
          <div className="name_project"> Project Name </div>
          <div className="panel__devices">
            <i className="bi styleIcon bi-phone" />
          </div>
        </div>
      </nav>
      <div id="editor">
        <div
          style={{
            width: "320px",
            backgroundColor: "#fff",
            height: "640px",
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
              return <Components key={block._uid} block={block} />;
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

export default Page;
