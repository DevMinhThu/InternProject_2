import React, { useState } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

function PropEditor({ key, property, forceUpdate, update, selectedComp }) {
  console.log(property);

  const [color, setColor] = useState(selectedComp.background.value);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleChange = (color) => {
    setColor(color.hex);
    property.value = color.hex;
    forceUpdate(!update);
  };

  const styles = reactCSS({
    default: {
      container: {
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
      },
      color: {
        width: "40px",
        height: "25px",
        borderRadius: "5px",
        background: `${color}`,
      },
      input: {
        background: "#343a40",
        border: 0,
        padding: "5px",
        color: "#fff",
      },
      span: {
        color: "#fff",
        marginRight: "10px",
        marginBottom: "3px",
      },
    },
  });

  switch (property.type) {
    case "string":
      return (
        <div style={styles.container}>
          <span style={styles.span}>{property.des}: </span>
          <input
            style={styles.input}
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
    case "color":
      return (
        <div style={styles.container}>
          <span style={styles.span}>{property.des}: </span>
          <div>
            <div style={styles.color} onClick={handleClick} />
            {displayColorPicker ? (
              <SketchPicker color={color} onChange={handleChange} />
            ) : null}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default PropEditor;
