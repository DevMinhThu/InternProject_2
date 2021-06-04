import React from "react";

function Footer(props) {
  return (
    <div>
      <p style={{ color: "#fff", margin: "0px" }}>{props.block.title}</p>
      <div
        className="Footer"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "200px",
          height: "30px",
          padding: "5px",
          margin: "10px",
          border: "0.5px solid #ddd",
        }}
        onClick={props.onClick}
      >
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

export default Footer;
