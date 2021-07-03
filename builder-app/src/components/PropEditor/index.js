import React, { useState } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
import { icons } from "../../constants/icon";

function PropEditor({ key, property, forceUpdate, update, selectedComp }) {
  const [color, setColor] = useState(selectedComp.background.value);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [openSelectIcon, setOpenSelectIcon] = useState(false);

  // handling color picker
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleChange = (color) => {
    setColor(color.hex);
    property.value = color.hex;
    forceUpdate(!update);
  };

  // handling icons picker
  const handleChangeIcon = (icon) => {
    property.value = icon;
    forceUpdate(!update);
    setOpenSelectIcon(false);
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
        background: "#fff",
        backgroundImage: "linear-gradient(to right, #2E3B50 , #C8D0DD)",
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
      icon: {
        fontSize: "15px",
      },
    },
  });

  switch (property.type) {
    case "string":
      return (
        <div style={styles.container}>
          <span style={styles.span}>{property.des}: </span>
          <input
            key={key}
            placeholder={key}
            style={styles.input}
            value={property.value}
            onChange={(event) => {
              property.value = event.target.value;
              forceUpdate(!update);
            }}
          />
        </div>
      );
    case "icon":
      return (
        <div style={styles.container}>
          <span style={styles.span}>
            {property.des}:{" "}
            <i
              onClick={() => setOpenSelectIcon(!openSelectIcon)}
              style={styles.icon}
              className={property.value}
            />
          </span>
          <div>
            <ul className={openSelectIcon ? "showIcon" : "hideIcon"}>
              {icons.map((icon) => (
                <li onClick={() => handleChangeIcon(icon)}>
                  {/* icon-bootstrap */}
                  <i style={styles.icon} className={icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "color":
      return (
        <div style={styles.container}>
          <span style={styles.span}>{property.des}: </span>
          <div>
            <div style={styles.color} onClick={handleClick} />
            {displayColorPicker ? (
              <SketchPicker
                width={210}
                color={color}
                disableAlpha={true}
                onChange={handleChange}
              />
            ) : null}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default PropEditor;
