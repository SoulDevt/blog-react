import React from "react";
import { useParams, useLocation } from "react-router-dom";


function Article(props) {
  let { id } = useParams();
  const location = useLocation();
  return (
  <>
    <h1>Ma page article({id})</h1>
    {location.state && location.state.fromHome ? <p>Cliqué depuis accueil</p> : null}
  </>
  );


}

export default Article;
