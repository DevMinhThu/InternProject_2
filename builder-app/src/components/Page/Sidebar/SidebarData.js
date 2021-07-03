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
              value: "Button",
              type: "String",
            },
            background: {
              value: "#E91E63",
              type: "color",
            },
            width: {
              value: "100",
            },
            height: {
              value: "30",
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
            leftIcon: {
              value: "bi bi-list",
              type: "icon",
            },
            rightIcon: {
              value: "bi bi-gear",
              type: "icon",
            },
          },
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
            password: {
              value: "Password",
              type: "string",
            },
            user: {
              value: "User@gmail.com",
              type: "string",
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
              value: "#3F51B5",
              type: "color",
            },
            height: {
              value: "30",
            },
            leftIcon: {
              value: "bi bi-chat-dots",
              type: "icon",
            },
            centerIcon: {
              value: "bi bi-house",
              type: "icon",
            },
            rightIcon: {
              value: "bi bi-bell",
              type: "icon",
            },
          },
        },
      ],
    },
  ];
};
