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
        width: "200px",
        height: "30px",
        margin: "5px",
        border: "0.5px solid #ddd",
      },
      icon: {
        color: "#fff",
      },
    },
  });

  return (
    <div style={styles.styleFooter} onClick={props.onClick}>
      <div>
        <i style={styles.icon} className="bi bi-chat-dots" />
      </div>
      <div>
        <i style={styles.icon} className="bi bi-heart-fill" />
      </div>
      <div>
        <i style={styles.icon} className="bi bi-bell" />
      </div>
    </div>
  );
}

export default Footer;
