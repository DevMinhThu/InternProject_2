import React, { createContext, useState } from "react";
import Components from "../Handler/index";

// === create context ====
export const ComponentContext = createContext();

// fake data
const data = {
  body: [
    {
      _uid: "BUY6Drn9e1",
      component: "button_key",
      headline: "Ios Btn",
    },
  ],
};

const ComponentContextProvider = ({ children }) => {
  // === state component ===
  const [dataComponents, setDataComponents] = useState(data);

  // get component data
  const getData = () => {
    return dataComponents.body.map((block) => {
      return Components(block);
    });
  };

  // === context data ===
  const componentContextData = {
    dataComponents,
    getData,
  };

  // === return provider ===
  return (
    <ComponentContext.Provider value={componentContextData}>
      {/* children: la cac component ben trong ComponentContextProvider */}
      {children}
    </ComponentContext.Provider>
  );
};

export default ComponentContextProvider;
