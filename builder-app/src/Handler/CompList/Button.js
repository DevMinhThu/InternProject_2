import React from "react";

function Button(props) {
  // console.log("button file", props);
  return (
    <div onClick={props.onClick}>
      <button
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          borderRadius: "5px",
          border: 0,
          color: "#fff",
          backgroundColor: props.background,
          margin: "5px",
        }}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
