import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        borderRadius: "5px",
        border: 0,
        color: "#fff",
        backgroundColor: props.background,
        margin: `${props.margin}px`,
      }}
    >
      {props.title}
    </button>
  );
}

export default Button;
