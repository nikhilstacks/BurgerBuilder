import React from "react";
import ToolbarCss from "./Toolbar.module.css";
import Logo from "../../logo/Logo";

const toolbar = () => (
  <header className={ToolbarCss.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
