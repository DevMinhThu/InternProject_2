import { Dropdown } from "antd";
import React from "react";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";
import menu from "../../constants/menu";
import userSetting from "../../constants/userSetting";

const NavIcon = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #939499;
  cursor: pointer;
`;

function NavBar() {
  return (
    <nav className="navbar">
      <div className="basic-actions">
        <Dropdown overlay={menu} trigger={["click"]}>
          <NavIcon>
            <FaIcons.FaBars />
          </NavIcon>
        </Dropdown>
      </div>
      <div className="name_project"> Project Name </div>
      <div className="user">
        <Dropdown overlay={userSetting}>
          <NavIcon>
            <FaIcons.FaUser />
          </NavIcon>
        </Dropdown>
      </div>
    </nav>
  );
}

export default NavBar;
