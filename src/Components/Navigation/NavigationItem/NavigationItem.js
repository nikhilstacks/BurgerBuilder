import React from "react";
import itemCss from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={itemCss.NavigationItem}>
    <a href={props.link} className={props.active ? itemCss.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
