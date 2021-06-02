import "antd/dist/antd.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar";
import Page from "./components/Page";
import { AppContext } from "./contexts/app-context";
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
        {/* navbar */}
        <NavBar />

        {/* main_content */}
        <Page
          content={content}
          selectedComp={selectedComp}
          update={update}
          forceUpdate={forceUpdate}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
