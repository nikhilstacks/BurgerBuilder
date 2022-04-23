import itemCss from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className={itemCss.NavigationItem}>
      <NavLink to={props.link} className={props.active ? itemCss.active : null}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
