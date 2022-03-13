import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default layout;
