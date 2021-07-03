import React from "react";

function Container(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        justifyContent: props.justifyContent,
        flexDirection: props.flexDirection,
        alignItems: props.alignItems,
        backgroundColor: props.background,
        height: `${props.height}%`,
      }}
    >
      {props.children}
    </div>
  );
}

export default Container;
