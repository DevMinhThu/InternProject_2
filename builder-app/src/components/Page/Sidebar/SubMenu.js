import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Component from "../../../Handler/components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 5px;
`;

const DropdownLink = styled.div`
  background: #414757;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
`;

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.comps && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.comps && subNav
            ? item.iconOpened
            : item.comps
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.comps.map((block, index) => {
          return (
            <DropdownLink key={index}>
              <Component block={block} />
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
