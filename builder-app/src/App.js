import "antd/dist/antd.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar";
import Page from "./components/Page";
import { comps, comps2 } from "./constants/data";
import { AppContext } from "./contexts/app-context";
import "./styles/main.scss";

function App() {
  const [content] = useState(comps);
  const [content2] = useState(comps2);

  const [update, forceUpdate] = useState(false);
  const [selectedComp, setSelectedComp] = useState({});

  return (
    <div className="App">
      <AppContext.Provider value={{ forceUpdate, setSelectedComp }}>
        <NavBar />

        <Page
          content={content}
          content2={content2}
          selectedComp={selectedComp}
          update={update}
          forceUpdate={forceUpdate}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
