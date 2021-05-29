import React, { useState } from "react";
import AddPage from "./components/AddPage";

// import components
import Logo from "./components/Logo";
import Page from "./components/Page";
import TabOptions from "./components/TabOptions";
import LeftNav from "./components/LeftNav";
// import Component from "./handler/components";

// context
import { AppContext } from "./contexts/app-context";

// main style
import "./styles/main.scss";

function App() {
  const [content] = useState({
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "header",
        headline: "header",
        children: [
          {
            _uid: "BUY6Drn9e2",
            component: "form",
            headline: "form",
          },
        ],
      },
      {
        _uid: "BUY6Drn9e4",
        component: "button",
        headline: "Button",
      },
      {
        _uid: "BUY6Drn9e5",
        component: "footer",
        headline: "footer",
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
