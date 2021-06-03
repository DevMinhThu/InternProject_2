import { Tooltip } from "antd";
import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Component from "../../../Handler/components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background-color: #1c1e26;
  width: 3.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  height: 100vh;
  border-top: 1px solid black;
`;

const NavIcon = styled(Link)`
  font-size: 18px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #939499;
`;

const SidebarNav = styled.nav`
  background: #1c1e26;
  width: 230px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 15;
  left: ${({ sidebar, checkSidebar }) =>
    sidebar || checkSidebar ? "3.5%" : "-100%"};
  z-index: 10;
  border-top: 1px solid black;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function Sidebar(props) {
  console.log("Sidebar", props)
  const [sidebar, setSidebar] = useState(false);
  const [checkSidebar, setCheckSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const ShowTypeSidebar = () => setCheckSidebar(!checkSidebar);

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <Tooltip placement="right" title={"Layers"}>
            <BsIcons.BsLayersHalf onClick={ShowTypeSidebar} />
          </Tooltip>
        </NavIcon>
        <NavIcon to="#">
          <Tooltip placement="right" title={"Components Library"}>
            <BsIcons.BsColumnsGap onClick={showSidebar} />
          </Tooltip>
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} comp={item.component} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      <SidebarNav checkSidebar={checkSidebar}>
        <SidebarWrap>Layers</SidebarWrap>
      </SidebarNav>
    </>
  );
}

export default Sidebar;
