import React from "react";
import ToolbarCss from "./Toolbar.module.css";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => (
  <header className={ToolbarCss.Toolbar}>
    <div>MENU</div>
    <div className={ToolbarCss.Logo}>
      <Logo />
    </div>
    <nav className={ToolbarCss.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
