import React from "react";

function Button(props) {
  return (
    <div onClick={props.onClick}>
      <p style={{ color: "#fff" }}>{props.block.title}</p>
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
  marginLeft: "10px",
  justifyContent: "center",
  alignItems: "center",
};

export default Button;
