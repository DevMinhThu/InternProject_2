import React, { useContext } from "react";

import { AppContext } from "../contexts/app-context";

import Button from "./CompList/Button";
import Footer from "./CompList/Footer";
import Form from "./CompList/Form";
import Header from "./CompList/Header";
import Container from "./CompList/Container";
import Text from "./CompList/Text";

const CompList = {
  button: Button,
  form: Form,
  header: Header,
  footer: Footer,
  container: Container,
  text: Text,
};

function Component({ block }) {
  // console.log("Components: ", block);

  const ctx = useContext(AppContext);

  if (typeof CompList[block.component] !== "undefined") {
    // handling properties for each component
    const props = (properties) => {
      const res = {
        key: block._uid,
        onClick: (event) => {
          ctx.setSelectedComp(block);
          // console.log(block.headline);
          event.stopPropagation();
          event.preventDefault();
        },
      };
      // * get value in object properties
      for (let key in properties) {
        if (properties.hasOwnProperty(key)) {
          res[key] = properties[key].value;
        }
      }
      return res;
    };

    return React.createElement(
      CompList[block.component],
      props(block.properties),
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
