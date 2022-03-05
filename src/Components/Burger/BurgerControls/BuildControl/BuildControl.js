import React from "react";
import BuildControlCss from "./BuildControl.module.css";

const BuilControl = (props) => (
  <div className={BuildControlCss.BuildControl}>
    <div className={BuildControlCss.Label}>{props.label}</div>
    <button className={BuildControlCss.Less}>Less</button>
    <button className={BuildControlCss.More}>More</button>
  </div>
);

export default BuilControl;
