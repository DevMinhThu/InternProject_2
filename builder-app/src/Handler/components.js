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

function Component({ block }) {
  console.log("Components: ", block);

  const ctx = useContext(AppContext);

  if (typeof CompList[block.component] !== "undefined") {
    // handle properties
    const props = () => {
      const res = {
        key: block._uid,
        onClick: (event) => {
          ctx.setSelectedComp(block);
          console.log(block.headline);
          event.stopPropagation();
          event.preventDefault();
        },
      };
      const properties = block.properties;
      for (let key in properties) {
        if (properties.hasOwnProperty(key)) {
          res[key] = properties[key].value;
        }
      }
      return res;
    };
    console.log("POP", props());

    return React.createElement(
      CompList[block.component],
      props(),
      block.children &&
        (typeof block.children === "string"
          ? block.children
          : block.children.map((c) => Component({ block: c })))
    );
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}

export default Component;
