import React from "react";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerCss from "./SideDrawer.module.css";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = (props) => {
  let attachedClasses = [SideDrawerCss.SideDrawer, SideDrawerCss.Close];
  if (props.open) {
    attachedClasses = [SideDrawerCss.SideDrawer, SideDrawerCss.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} hidden={props.closed} />
      <div className={attachedClasses.join(" ")}>
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
