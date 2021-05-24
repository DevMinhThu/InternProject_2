import React from "react";

function Header(props) {
  return (
    <div>
      <p style={{ color: "#fff", margin: "0px" }}>{props.block.title}</p>
      <div
        className="header"
        style={{
          backgroundColor: "#3F51B5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "250px",
          height: "30px",
          padding: "5px",
          margin: "10px",
          color: '#fff'
        }}
        onClick={props.onClick}
      >
        <div>
          <i class="bi bi-chevron-left" />
          Back
        </div>
        <div>{props.block.headline}</div>
        <div>Action</div>
      </div>
    </div>
  );
}

export default Header;
