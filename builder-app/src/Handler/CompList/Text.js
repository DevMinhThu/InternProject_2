import React from "react";

function Text(props) {
  return (
    <p
      onClick={props.onClick}
      style={{
        color: props.color,
        fontSize: `${props.fontSize}px`,
        fontWeight: "bold",
      }}
    >
      {props.title}
    </p>
  );
}

export default Text;
