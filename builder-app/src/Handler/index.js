import React from "react";
import Button from "./components/Button";
import Form from "./components/Form";

const Components = {
  button_key: Button,
  form_key: Form,
};

function index(block) {
  // console.log("Block in render", block);
  /* create block */
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block,
    });
  }

  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}

export default index;
