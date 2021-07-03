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
          color: "#fff",
        }}
        onClick={props.onClick}
      >
        <div>
          <i className={props.leftIcon} style={{ fontSize: "20px" }} />
        </div>
        <div>{props.title}</div>
        <div>
          <i className={props.rightIcon} style={{ fontSize: "20px" }} />
        </div>
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
