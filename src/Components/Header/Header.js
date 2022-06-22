import React from "react";

import Navigation from "./Navigation/Navigation";

//Module css
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.logo}>BLOG</div>
      <nav>
        <Navigation></Navigation>
      </nav>
    </header>
  );
}

export default Header;
