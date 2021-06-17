import React from "react";
import { Input, Space } from "antd";

function Form(props) {
  return (
    <div>
      <Space
        style={{ margin: "5px" }}
        direction="vertical"
        onClick={props.onClick}
      >
        <Input.Password style={{ width: "200px" }} placeholder={props.title} />
      </Space>
    </div>
  );
}

export default Form;
