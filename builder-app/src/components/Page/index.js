import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Editor from "./Editor";
import SideBar from "./Sidebar";
import Toolkit from "./Toolkit";
// import { SidebarData } from "./Sidebar/SidebarData";

function Page({ content, content2, selectedComp, update, forceUpdate }) {
  return (
    <div className="main_container">
      <Router>
        <SideBar
          content={content}
          selectedComp={selectedComp}
          update={update}
          forceUpdate={forceUpdate}
        />
      </Router>

      <Editor
        content={content}
        content2={content2}
        selectedComp={selectedComp}
        update={update}
        forceUpdate={forceUpdate}
      />

      <Toolkit
        content={content}
        selectedComp={selectedComp}
        update={update}
        forceUpdate={forceUpdate}
      />
    </div>
  );
}

export default Page;
