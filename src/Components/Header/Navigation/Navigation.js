import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

function Navigation(){
    return(
        <ul>
            <NavigationItem to="/home">Accueil</NavigationItem>
            <NavigationItem to="/contact">Contact</NavigationItem>
            <NavigationItem to="/articles">Articles</NavigationItem>
        </ul>
    )

} 

export default Navigation;