import React from "react";
import PropEditor from "../../PropEditor";

function Toolkit({ selectedComp, update, forceUpdate }) {
  if (selectedComp && selectedComp.properties) {
    return (
      <div className="tool_config">
        {Object.keys(selectedComp.properties).map(function (key, index) {
          const property = selectedComp.properties[key];
          return (
            <PropEditor
              key={index}
              property={property}
              forceUpdate={forceUpdate}
              update={update}
              selectedComp={selectedComp.properties}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Toolkit;
