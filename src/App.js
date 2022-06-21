import React from "react";
import './App.css';
import Layout from "./hoc/Layout/Layout";

//Components
import { Routes,Route } from "react-router-dom";
import Home from "./Containers/Home/Home"
import Articles from "./Containers/Articles/Articles"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
