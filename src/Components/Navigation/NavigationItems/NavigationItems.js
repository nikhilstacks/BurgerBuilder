import React from "react";
import itemsCss from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={itemsCss.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/checkout">Checkout</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
