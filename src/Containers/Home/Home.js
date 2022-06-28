import React from "react";
import { Link } from "react-router-dom"
import routes from "../../routes";

function Home() {
  return (
  <>
    <h1>Hello from Home</h1>
    <Link to={{
      pathname: routes.ARTICLES + "/1",
      // hash: "#project",
      search: "?order=new"
    }}
    
    style= {{marginRight: "5px"}}>Lien vers un ancre</Link>

    <Link to={{
      pathname: "/articles/1",
    }}
    state= {{fromHome: true}}>Lien avec state</Link>

  </>
  
  );
}

export default Home;
