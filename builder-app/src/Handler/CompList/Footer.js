import React from "react";
import reactCSS from "reactcss";

function Footer(props) {
  const styles = reactCSS({
    default: {
      styleFooter: {
        backgroundColor: props.background,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: `${props.height}px`,
      },
      icon: {
        color: "#fff",
        fontSize: "20px",
      },
    },
  });

  return (
    <div style={styles.styleFooter} onClick={props.onClick}>
      <div>
        <i style={styles.icon} className={props.leftIcon} />
      </div>
      <div>
        <i style={styles.icon} className={props.centerIcon} />
      </div>
      <div>
        <i style={styles.icon} className={props.rightIcon} />
      </div>
    </div>
  );
}

export default Footer;
