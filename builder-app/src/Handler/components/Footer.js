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
          width: "250px",
          height: "30px",
          padding: "5px",
          margin: "10px",
        }}
        onClick={props.onClick}
      >
        <div>
          <i class="bi bi-chat-dots" />
        </div>
        <div>
          <i class="bi bi-heart-fill" />
        </div>
        <div>
          <i class="bi bi-bell" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
