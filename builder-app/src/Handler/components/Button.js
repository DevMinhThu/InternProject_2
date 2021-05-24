import React from "react";

function Button(props) {
  return (
    <div onClick={props.onClick}>
      <button style={style}>{props.block.headline}</button>
    </div>
  );
}

const style = {
  width: "100px",
  height: "36px",
  borderRadius: "5px",
  border: 0,
  color: "#fff",
  backgroundColor: "#E91E63",
  margin: "5px",
  justifyContent: "center",
  alignItems: "center",
};

export default Button;
