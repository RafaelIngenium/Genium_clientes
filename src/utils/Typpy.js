import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

export const PopOver = ({ children, ...otherProps }) => (
  <Tippy {...otherProps}>{children}</Tippy>
);

PopOver.defaultProps = {
  arrow: true,
  allowHTML: true,
  duration: 250,
  theme: "ingweb",
  trigger: "click",
  interactive: true
  // placement: "right"
};
