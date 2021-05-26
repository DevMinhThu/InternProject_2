import React, { useState } from "react";
import AddPage from "./components/AddPage";

// import components
import Logo from "./components/Logo";
import Page from "./components/Page";
import TabOptions from "./components/TabOptions";
import LeftNav from "./components/LeftNav";

// context
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
        children: [
          {
            _uid: "BUY6Drn9e2",
            title: "Component input",
            component: "form",
            headline: "Input",
          },
        ],
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
      <AppContext.Provider value={{ forceUpdate, setSelectedComp }}>
        <LeftNav />
        <Page
          content={content}
          selectedComp={selectedComp}
          update={update}
          forceUpdate={forceUpdate}
        />

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
    </div>
  );
}

export default App;
