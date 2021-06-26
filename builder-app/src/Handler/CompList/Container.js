import React from "react";

function Container(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        justifyContent: props.justifyContent,
        backgroundColor: props.background,
        height: "50px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Container;
