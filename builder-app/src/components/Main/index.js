import React, { useState, useContext } from "react";
import { ComponentContext } from "../../contexts/ComponentContext";
import "../../styles/main.scss";

function Main(props) {
  // load context
  const { getData } = useContext(ComponentContext);

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
              <i style={icon} class="bi bi-three-dots" />
              Vina
              <i style={icon} class="bi bi-wifi-2" />
            </div>
            <div style={container}>9:41 AM</div>
            <div style={container}>
              100% <i style={icon} class="bi bi-battery-full" />
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
            {getData()}
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

export default Main;
