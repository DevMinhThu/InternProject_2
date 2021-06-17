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
          properties: {
            title: {
              value: "hello",
              type: "String",
            },
            background: {
              value: "#E91E63",
              type: "color",
            },
            width: {
              value: "100px",
            },
            height: {
              value: "30px",
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
          properties: {
            title: {
              value: "Header",
              type: "String",
            },
            background: {
              value: "#3498db",
              type: "color",
            },
          },
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
          properties: {
            title: {
              value: "Form",
              type: "String",
            },
            background: {
              value: "#fff",
              type: "color",
            },
          },
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
          properties: {
            title: {
              value: "Footer",
              type: "String",
            },
            background: {
              value: "orange",
              type: "color",
            },
          },
        },
      ],
    },
  ];
};
