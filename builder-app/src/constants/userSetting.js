import { Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";

function UserSetting() {
  return (
    <Menu style={styleMenu}>
      <Menu.Item>
        <a href="http://localhost:3000" style={menuItem}>
          Account
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="http://localhost:3000" style={menuItem}>
          Team
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="http://localhost:3000" style={menuItem}>
          Projects
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="http://localhost:3000" style={menuItem}>
          Logout
        </a>
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

export default UserSetting;
