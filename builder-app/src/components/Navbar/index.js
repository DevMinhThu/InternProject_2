import { Dropdown } from "antd";
import "antd/dist/antd.css";
import React from "react";
import menu from "../../constants/menu";
import userSetting from "../../constants/userSetting";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="basic-actions">
        <Dropdown overlay={menu} trigger={["click"]}>
          <i className="bi styleIcon bi-list" />
        </Dropdown>
      </div>
      <div className="name_project"> Project Name </div>
      <div className="user">
        <Dropdown overlay={userSetting}>
          <i className="bi styleIcon bi-person" />
        </Dropdown>
      </div>
    </nav>
  );
}

export default NavBar;
