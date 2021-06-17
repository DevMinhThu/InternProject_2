import React from "react";
import PropEditor from "../../PropEditor";

function Toolkit({ selectedComp, update, forceUpdate }) {
  console.log("AAA", selectedComp);
  if (selectedComp && selectedComp.properties) {
    return (
      <div className="tool_config">
        {Object.keys(selectedComp.properties).map(function (key) {
          const property = selectedComp.properties[key];

          return (
            <PropEditor
              key={key}
              property={property}
              forceUpdate={forceUpdate}
              update={update}
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
