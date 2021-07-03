import React from "react";

function Avatar(props) {
  return (
    <img
      src={props.src}
      alt={""}
      width={props.width}
      height={props.height}
      onClick={props.onClick}
    />
  );
}

export default Avatar;
