import React from "react";

function Form(props) {
  return (
    <form onClick={props.onClick}>
      <label>
        <input type="text" name="name" placeholder={props.block.headline} />
      </label>
    </form>
  );
}

export default Form;
