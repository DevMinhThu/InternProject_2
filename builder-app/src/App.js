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
        _uid: "BUY6Drn9e4",
        component: "button",
        properties: {
          type: {
            value: "primary",
            type: "selection",
            values: ["primary", "warning"],
            max: 1,
            min: 0,
          },
          title: {
            value: "Button",
            type: "string",
            des: "Caption",
          },
          background: {
            value: "#E91E63",
            type: "color",
            des: "BG",
          },
          width: {
            value: "100",
            type: "string",
            des: "W",
          },
          height: {
            value: "30",
            type: "string",
            des: "H",
          },
        },
      },
      {
        _uid: "BUY6Drn9e1",
        component: "header",
        properties: {
          title: {
            value: "Header",
            type: "string",
            des: "caption",
          },
          background: {
            value: "#3F51B5",
            type: "color",
            des: "BG",
          },
        },

        // children: [
        //   {
        //     _uid: "BUY6Drn9e2",
        //     component: "form",
        //     headline: "form",
        //   },
        // ],
      },
      {
        _uid: "BUY6Drn9e5",
        component: "footer",
        headline: "footer",
        properties: {
          title: {
            value: "Footer",
            type: "string",
            des: "caption",
          },
          background: {
            value: "#A62DBE",
            type: "color",
            des: "BG",
          },
        },
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
