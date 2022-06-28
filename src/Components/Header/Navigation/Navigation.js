import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

//Module css
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem  to="/">Accueil</NavigationItem>
      <NavigationItem  to="/contact">Contact</NavigationItem>
      <NavigationItem to="/articles">Articles</NavigationItem>
    </ul>
  );
}

export default Navigation;
