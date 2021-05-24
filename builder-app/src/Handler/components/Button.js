import React from "react";

function Button(props) {
  return (
    <>
      <p style={{ color: "coral", fontSize: "20px" }}>
        This is: {props.block.headline}
      </p>
      <button style={style}>Button</button>
    </>
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

/* 
E91E63
2196F3
3F51B5
F44336
212121
009688
 */
