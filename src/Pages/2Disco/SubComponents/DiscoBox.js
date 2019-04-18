// ./Pages/SubComponents/DiscoBox.js
// This is a Stateless Functional Component
import React from "react";

const DiscoBox = props => (
  <div
    style={{
      backgroundColor: props.color,
      height: props.height,
      width: props.width,
      margin: props.margin,
      display: props.display,
      paddingBottom: props.paddingBottom,
    }}
  />
);

export default DiscoBox;
