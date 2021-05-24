import React from "react";
import { Input, Space } from "antd";

function Form(props) {
  return (
    <div>
      <p style={{ color: "#fff", margin: "0px" }}>{props.block.title}</p>
      <Space
        style={{ margin: "10px" }}
        direction="vertical"
        onClick={props.onClick}
      >
        <Input.Password placeholder={props.block.headline} />
      </Space>
    </div>
  );
}

export default Form;
