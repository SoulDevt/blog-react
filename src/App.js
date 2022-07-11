import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import routes from "./routes"

//Components
import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Articles from "./Containers/Articles/Articles";
import Contact from "./Components/Contact/Contact";
import Article from "./Containers/Articles/Article/Article";
import NotFound from "./Components/404/NotFound";
import Email from "./Components/Contact/Email/Email";
import Telephone from "./Components/Contact/Telephone/Telephone";
import Ajouter from "./Containers/Ajouter/Ajouter";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={routes.CONTACT} element={<Contact />}>
            <Route path="email" element={<Email />} />
            <Route path="telephone" element={<Telephone />} />
          </Route>
          <Route path={routes.ARTICLES} element={<Articles />} />
          <Route path={routes.ARTICLES + "/:id"} element={<Article />} />
          <Route path={routes.AJOUTER} element={<Ajouter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
