import React from "react";
import Tippy from "@tippy.js/react";

export const PopOver = ({ children, ...otherProps }) => (
  <Tippy {...otherProps}>{children}</Tippy>
);

PopOver.defaultProps = {
  arrow: true,
  allowHTML: true,
  arrowType: "round",
  duration: 250,
  theme: "ingweb",
  trigger: "click",
  interactive: true,
  placement: "right"
};
