import React from "react";

import Header from "../../Components/Header/Header";


function Layout(props) {
    return (
        <>
        <Header></Header>
        {props.children}
        </>
    )
    
}

export default Layout;