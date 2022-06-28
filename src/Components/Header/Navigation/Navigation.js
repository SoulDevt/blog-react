import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import routes from "../../../routes";

//Module css
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem  to={routes.HOME}>Accueil</NavigationItem>
      <NavigationItem  to={routes.CONTACT}>Contact</NavigationItem>
      <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
    </ul>
  );
}

export default Navigation;
