import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Button",
    path: "/button",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Button IOS",
        path: "/comp/button_ios",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Button Android",
        path: "/comp/button_android",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Header",
    path: "/headers",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Header",
        path: "/comp/header",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "FormInputs",
    path: "/form",
  },
  {
    title: "Footer",
    path: "/footer",
  },
];
