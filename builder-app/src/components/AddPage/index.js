import React from "react";
import "../../styles/main.scss";

function index() {
  return (
    <div className="my-2 d-flex flex-column">
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm mx-2 mt-2"
      >
        <i className="bi bi-file-earmark-plus"></i> Add Page
      </button>
      <ul className="list-group pages">
        <li className="list-group-item d-flex justify-content-between">
          Home
          <div className="m-2">
            <i className="bi bi-pencil-fill"></i>
            <i className="bi bi-trash"></i>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          About Us
          <div className="m-2">
            <i className="bi bi-pencil-fill"></i>
            <i className="bi bi-trash"></i>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          Contact Us
          <div className="m-2">
            <i className="bi bi-pencil-fill"></i>
            <i className="bi bi-trash"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default index;
