import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RecentPosts from "./components/RecentPosts";
import ArchivePosts from "./components/ArchivePosts";
import blogData from "./blogPostData";
import "./App.css";
import CreateBlogPost from "./components/CreateBlogPost";
import { Header } from "./stories/Header";
import { Page } from "./stories/Page";
import Navbar from "./stories/NavBar";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/archive" element={<ArchivePosts items={[]} />} />
          <Route path="/" element={<Page />} />
          <Route
            path="/create"
            element={<CreateBlogPost onAddPost={(p) => p} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
