import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./stories/Header";
import Navbar from "./stories/NavBar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Footer } from "./stories/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <div id="content-wrap">
          <Header />
          <Navbar />
          <Router>
            <Routes>
              <Route path="/archive/page/:page" element={<Blog />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
