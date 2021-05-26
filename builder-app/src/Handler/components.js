import React, { useContext } from "react";

import { AppContext } from "../contexts/app-context";

import Button from "./CompList/Button";
import Footer from "./CompList/Footer";
import Form from "./CompList/Form";
import Header from "./CompList/Header";

const CompList = {
  button: Button,
  form: Form,
  header: Header,
  footer: Footer,
};

function Components({ block }) {
  const ctx = useContext(AppContext);

  /* create block */
  if (typeof CompList[block.component] !== "undefined") {
    return React.createElement(
      CompList[block.component],
      {
        key: block._uid,
        block: block,
        onClick: (event) => {
          ctx.setSelectedComp(block);
          console.log(block.headline);
          event.stopPropagation();
          event.preventDefault();
        },
      },
      block.children &&
        (typeof block.children === "string"
          ? block.children
          : block.children.map((c) => Components({ block: c })))
    );
  }

  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}

export default Components;
