import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";

//Components
import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Articles from "./Containers/Articles/Articles";
import Contact from "./Components/Contact/Contact";
import Article from "./Containers/Articles/Article/Article";
import NotFound from "./Components/404/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
