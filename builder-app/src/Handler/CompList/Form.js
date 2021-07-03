import React from "react";
import { Input, Space } from "antd";

function Form(props) {
  return (
    <div>
      <Space direction="vertical" onClick={props.onClick}>
        <Input
          placeholder={props.user}
          style={{ borderRadius: `${props.borderRadius}px` }}
        />
        <Input.Password
          placeholder={props.password}
          style={{ borderRadius: `${props.borderRadius}px` }}
        />
      </Space>
    </div>
  );
}

export default Form;
