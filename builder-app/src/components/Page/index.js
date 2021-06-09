import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Editor from "./Editor";
import SideBar from "./Sidebar";
import Toolkit from "./Toolkit";

function Page({ content, selectedComp, update, forceUpdate }) {
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

      <Editor content={content} />

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
