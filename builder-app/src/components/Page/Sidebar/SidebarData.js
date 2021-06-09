import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = () => {
  return [
    {
      title: "Button",
      path: "/button",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      comps: [
        {
          _uid: "BUY6Drn9e4",
          component: "button",
          headline: "Button",
          props: {
            title: {
              value: "header",
              type: "String",
            },
            background: {
              value: "blue",
              type: "color",
            },
          },
        },
      ],
    },
    {
      title: "Header",
      path: "/headers",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      comps: [
        {
          _uid: "BUY6Drn9e1",
          component: "header",
          headline: "header",
          // children: [
          //   {
          //     _uid: "BUY6Drn9e2",
          //     component: "form",
          //     headline: "form",
          //   },
          // ],
        },
      ],
    },
    {
      title: "FormInputs",
      path: "/form",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      comps: [
        {
          _uid: "BUY6Drn9e2",
          component: "form",
          headline: "form",
        },
      ],
    },
    {
      title: "Footer",
      path: "/footer",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      comps: [
        {
          _uid: "BUY6Drn9e5",
          component: "footer",
          headline: "footer",
        },
      ],
    },
  ];
};
