import React from "react";
import ToolbarCss from "./Toolbar.module.css";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => (
  <header className={ToolbarCss.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
