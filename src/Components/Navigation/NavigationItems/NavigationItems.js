import React from "react";
import itemsCss from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={itemsCss.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
