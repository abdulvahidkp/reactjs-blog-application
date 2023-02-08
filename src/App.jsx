import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {format} from 'date-fns'

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
  const [search, setSearch] = useState('');
  const [searchResults,setSearchResults] = useState([])
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(()=>{
    console.log((posts[0].body).toLowerCase().includes(search.toLowerCase()));
    const filteredResults = posts.filter((post)=>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  },[search,posts])

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:newTitle,body:newBody ,datetime};
    const allPosts = [...posts,newPost]
    setPosts(allPosts);
    setNewTitle('')
    setNewBody('')
    navigate('/')
  };

  const handleDelete = (id) => {
    const postLists = posts.filter((post) => post.id != id);
    setPosts(postLists);
    navigate("/");
  };

  return (
    <div>
      <Header title={"ReactJs Blog"} />
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} />} />
        <Route
          exact
          path="/post/:id"
          element={<OnePostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route
          exact
          path="/newPost"
          element={
            <NewPost
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newBody={newBody}
              setNewBody={setNewBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}
