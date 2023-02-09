import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {format} from 'date-fns'
import api from './api/posts'

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import OnePostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults,setSearchResults] = useState([])
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data)
      } catch (error) {
        if(error.response){
          // not in the 200 response range
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log(`Error: ${error.message}`);
        }
        //
      }
    }
    fetchPosts()
  },[])

  useEffect(()=>{
      const filteredResults = posts.filter((post)=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase())
      )
      setSearchResults(filteredResults.reverse())
  },[search,posts])

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:newTitle,body:newBody ,datetime};
    try {
      const response = await api.post('/posts',newPost);
      const allPosts = [...posts,response.data]
      setPosts(allPosts);
      setNewTitle('')
      setNewBody('')
      navigate('/')
      
    } catch (error) {
      console.log(`Error: ${error.message}`) 
    }
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
