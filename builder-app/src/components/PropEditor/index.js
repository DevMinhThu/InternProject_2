import React from "react";

function PropEditor({ key, property, forceUpdate, update }) {
  return (
    <div>
      <input
        key={key}
        placeholder={key}
        value={property.value}
        onChange={(event) => {
          property.value = event.target.value;
          forceUpdate(!update);
        }}
      />
    </div>
  );
}

export default PropEditor;
