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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "my first Post",
      datetime: "july 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 2,
      title: "my second Post",
      datetime: "july 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 3,
      title: "my third Post",
      datetime: "july 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 4,
      title: "my fourth Post",
      datetime: "july 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 5,
      title: "my fifth Post",
      datetime: "july 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 6,
      title: "my sixth Post",
      datetime: "july 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 7,
      title: "my seventh Post",
      datetime: "july 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header title={"ReactJs Blog"} />
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route exact path="/newPost" element={<NewPost />} />
        <Route exact path="/post/:id" element={<OnePostPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}
