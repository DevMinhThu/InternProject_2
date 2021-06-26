import React from "react";

function Header(props) {
  return (
    <div style={container}>
      <div
        style={{
          backgroundColor: props.background,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "30px",
          padding: "5px",
          margin: "5px 0px",
          color: "#fff",
        }}
        onClick={props.onClick}
      >
        <div>
          <i className="bi bi-chevron-left" />
          Back
        </div>
        <div>{props.title}</div>
        <div>Action</div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export default Header;
