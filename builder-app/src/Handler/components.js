import React, { useContext } from "react";

import { AppContext } from "../contexts/app-context";

import Button from "./components/Button";
import Form from "./components/Form";

const CompList = {
  button: Button,
  form: Form,
};

function Components({block}) {
  const ctx = useContext(AppContext);

  /* create block */
  if (typeof CompList[block.component] !== "undefined") {
    return React.createElement(CompList[block.component], {
      key: block._uid,
      block: block,
      onClick: () => {
        ctx.setSelectedComp(block);
      },
    });
  }

  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}

export default Components;
