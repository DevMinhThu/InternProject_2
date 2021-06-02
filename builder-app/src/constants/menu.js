import { Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";

function MenuList() {
  return (
    <Menu style={styleMenu}>
      <Menu.Item key="0">
        <a href="http://localhost:3000" style={menuItem}>
          Main
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://localhost:3000" style={menuItem}>
          File
        </a>
      </Menu.Item>
      <Menu.Item key="3" style={menuItem}>
        Help
      </Menu.Item>
    </Menu>
  );
}

const styleMenu = {
  width: "120px",
  backgroundColor: "#c1c8d0",
};

const menuItem = {
  color: "black",
};

export default MenuList;
