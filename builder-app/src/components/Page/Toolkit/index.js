import React from "react";
import TabOptions from "./TabOptions";

function Toolkit({ content, selectedComp, update, forceUpdate }) {
  // console.log("toolkit", props);
  return (
    <div className="tool_config">
      <TabOptions
        content={content}
        selectedComp={selectedComp}
        update={update}
        forceUpdate={forceUpdate}
      />
    </div>
  );
}

export default Toolkit;
