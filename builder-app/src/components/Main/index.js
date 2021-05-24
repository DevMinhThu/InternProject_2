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
      <div id="editor">{getData()}</div>
    </div>
  );
}

export default Main;
