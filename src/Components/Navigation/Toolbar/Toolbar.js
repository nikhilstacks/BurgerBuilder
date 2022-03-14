import React from "react";
import ToolbarCss from "./Toolbar.module.css";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={ToolbarCss.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={ToolbarCss.Logo}>
      <Logo />
    </div>
    <nav className={ToolbarCss.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
