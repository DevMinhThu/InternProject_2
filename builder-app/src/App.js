import React, { useState } from "react";
import AddPage from "./components/AddPage";

// import components
import Logo from "./components/Logo";
import Main from "./components/Main";
// import TabContent from "./components/ManageBlocks/TabContent";
import TabOptions from "./components/ManageBlocks/TabOptions";
import LeftNav from "./components/LeftNav";

// context
import ComponentContextProvider from "./contexts/ComponentContext";
import { AppContext } from "./contexts/app-context";

// main style
import "./styles/main.scss";

function App() {
  const [content] = useState({
    body: [
      {
        _uid: "BUY6Drn9e1",
        title: "Component button",
        component: "button",
        headline: "Button",
      },
      {
        _uid: "BUY6Drn9e2",
        title: "Component input",
        component: "form",
        headline: "Input",
      },
      {
        _uid: "BUY6Drn9e3",
        title: "Component header",
        component: "header",
        headline: "Header",
      },
      {
        _uid: "BUY6Drn9e4",
        title: "Component footer",
        component: "footer",
        headline: "Footer",
      },
    ],
  });

  const [update, forceUpdate] = useState(false);
  const [selectedComp, setSelectedComp] = useState({});

  return (
    <div className="App">
      <ComponentContextProvider>
        <AppContext.Provider value={{ forceUpdate, setSelectedComp }}>
          <LeftNav />
          <Main />

          {/* sidenav */}
          <div id="navbar" className="sidenav flex-column overflow-scroll">
            <Logo />
            <AddPage />
            <TabOptions
              content={content}
              selectedComp={selectedComp}
              update={update}
              forceUpdate={forceUpdate}
            />
          </div>
        </AppContext.Provider>
      </ComponentContextProvider>
    </div>
  );
}

export default App;
