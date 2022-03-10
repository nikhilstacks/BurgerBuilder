import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Aux>
    <Toolbar></Toolbar>
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default layout;
