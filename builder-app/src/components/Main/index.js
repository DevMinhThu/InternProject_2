import React, { useState, useContext } from "react";
import { ComponentContext } from "../../contexts/ComponentContext";
import "../../styles/main.scss";

function Main(props) {
  // load context
  const { getData, dataComponents } = useContext(ComponentContext);
  console.log(dataComponents);

  const [inputValues, setInputValues] = useState({
    headline: "",
  });

  const onHandleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setInputValues({ ...inputValues, [name]: target.value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log("state: ", inputValues);
    
  };

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
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            name="headline"
            onChange={onHandleChange}
            value={inputValues.headline}
            placeholder="Enter headline..."
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        {getData()}
      </div>
    </div>
  );
}

export default Main;
