import React from "react";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerCss from "./SideDrawer.module.css";

const sideDrawer = () => {
  // ...
  return (
    <div className={SideDrawerCss.SideDrawer}>
      <div className={SideDrawerCss.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
