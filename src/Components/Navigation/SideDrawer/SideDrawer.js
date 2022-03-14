import React from "react";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerCss from "./SideDrawer.module.css";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = () => {
  // ...
  return (
    <Aux>
      <Backdrop show />
      <div className={SideDrawerCss.SideDrawer}>
        <div className={SideDrawerCss.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
