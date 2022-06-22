import React from "react";

import Header from "../../Components/Header/Header";

//module css
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  );
}

export default Layout;
