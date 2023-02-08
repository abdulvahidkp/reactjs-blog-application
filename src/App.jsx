import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import OnePostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newPost" element={<NewPost />} />
        <Route exact path="/post/:id" element={<OnePostPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}
