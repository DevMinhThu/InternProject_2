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
    // {
    //   _uid: "BUY6Drn9e2",
    //   component: "form_key",
    //   headline: "Form",
    // },
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

  // get data in TabOptions
  const getDataInTab = (data) => {
    setDataComponents({
      ...dataComponents,
      headline: data.headline,
    });
  };

  // === context data ===
  const componentContextData = {
    dataComponents,
    getData,
    getDataInTab,
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
