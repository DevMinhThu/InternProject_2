import React, { createContext, useState } from "react";
import Components from "../Handler/components";

// === create context ====
export const ComponentContext = createContext();

const ComponentContextProvider = ({ props, children }) => {
  // === state component ===
  const [content] = useState({
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "button",
        headline: "Button",
      },
      {
        _uid: "BUY6Drn9e2",
        component: "form",
        headline: "Input",
      },
      {
        _uid: "BUY6Drn9e3",
        component: "header",
        headline: "Header",
      },
    ],
  });

  // get component data
  const getData = () => {
    return content.body.map((block) => {
      return <Components block={block} />;
    });
  };

  // === context data ===
  const componentContextData = {
    content,
    getData,
  };

  // === return provider ===
  return (
    <ComponentContext.Provider value={componentContextData}>
      {/* children: component in ComponentContextProvider */}
      {children}
    </ComponentContext.Provider>
  );
};

export default ComponentContextProvider;
