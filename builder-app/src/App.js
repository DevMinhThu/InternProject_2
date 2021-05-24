import React from "react";
import AddPage from "./components/AddPage";

// import components
import Logo from "./components/Logo";
import Main from "./components/Main";
// import TabContent from "./components/ManageBlocks/TabContent";
import TabOptions from "./components/ManageBlocks/TabOptions";
import LeftNav from "./components/LeftNav";

// context
import ComponentContextProvider from "./contexts/ComponentContext";

// main style
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <ComponentContextProvider>
        <LeftNav />
        <Main />

        {/* sidenav */}
        <div id="navbar" className="sidenav flex-column overflow-scroll">
          <Logo />
          <AddPage />
          <TabOptions />
        </div>
      </ComponentContextProvider>
    </div>
  );
}

export default App;
