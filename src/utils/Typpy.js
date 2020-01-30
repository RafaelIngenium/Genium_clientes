import React from "react";
import Tippy from "@tippy.js/react";

const { roundArrow } = Tippy;

export const PopOver = ({ children, ...otherProps }) => (
  <Tippy {...otherProps}>{children}</Tippy>
);

PopOver.defaultProps = {
  arrow: roundArrow,
  allowHTML: true,
  duration: 250,
  theme: "ingweb",
  trigger: "click",
  interactive: true,
  placement: "right"
};
