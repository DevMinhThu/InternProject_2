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
    // handle here
    // props: {
    //         title: {
    //           value: "button",
    //           type: "String",
    //         },
    //         background: {
    //           value: "red",
    //           type: "color",
    //         },
    //       }
    //   // target convert props tren sang dang props duoi
    //   props: {
    //     title: "button",
    //     background: "red",
    //     onClick: ()=>{}
    //   }

    return React.createElement(
      CompList[block.component],
      // truyền props đã convert bên trên xuống đây để thay tham số thứ 2 của hàm createElement
      // props,
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
          : block.children.map((c) => Component({ block: c })))
    );
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}

export default Component;
