import React from "react";

//Module css
import classes from "./NavigationItem.module.css";

//Components
import { NavLink } from "react-router-dom";

function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.to}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
