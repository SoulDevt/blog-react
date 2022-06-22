import React from "react";

//Module css
import classes from "./NavigationItem.module.css";

//Components
import { Link } from "react-router-dom";

function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default NavigationItem;
