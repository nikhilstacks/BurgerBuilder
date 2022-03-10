import React from "react";
import burgerLogo from "../../assets/images/logo.png";
import LogoCss from "./Logo.module.css";

const logo = () => (
  <div className={LogoCss.Logo}>
    <img src={burgerLogo} alt="logo of my site" />
  </div>
);

export default logo;
