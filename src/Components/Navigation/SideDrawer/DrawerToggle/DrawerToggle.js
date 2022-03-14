import React from "react";
import DrawerToggleCss from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div onClick={props.clicked} className={DrawerToggleCss.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
