import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Editor from "./Editor";
import SideBar from "./Sidebar";
import Toolkit from "./Toolkit";

function Page(props) {
  return (
    <div className="main_container">
      <Router>
        <SideBar
          content={props.content}
          selectedComp={props.selectedComp}
          update={props.update}
          forceUpdate={props.forceUpdate}
        />
      </Router>

      <Editor content={props.content} />

      <Toolkit content={props.content} />
    </div>
  );
}

export default Page;
