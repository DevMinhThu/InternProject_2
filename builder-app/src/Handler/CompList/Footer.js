import React from "react";

function Footer(props) {
  return (
    <div style={container}>
      <div style={styleFooter} onClick={props.onClick}>
        <div>
          <i className="bi bi-chat-dots" />
        </div>
        <div>
          <i className="bi bi-heart-fill" />
        </div>
        <div>
          <i className="bi bi-bell" />
        </div>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const styleFooter = {
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "200px",
  height: "30px",
  margin: "5px",
  border: "0.5px solid #ddd",
};

export default Footer;
