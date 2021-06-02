import { Drawer, Popover, Tree } from "antd";
import React, { useState } from "react";

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: <span style={{ color: "#1890ff" }}>sss</span>,
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

function SideBar() {
  const [state, setState] = useState({ visible: false });

  const showDrawer = () => {
    setState({
      visible: !state.visible,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  return (
    <div className="component_library">
      <Popover placement="right" content={"Layers"}>
        <i className="bi styleIcon bi-layers-half" />
      </Popover>

      <i className="bi styleIcon bi-grid" onClick={showDrawer}>
        <Drawer
          title="Library"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={state.visible}
          key={state.placement}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <Tree treeData={treeData} />
        </Drawer>
      </i>
    </div>
  );
}

export default SideBar;
