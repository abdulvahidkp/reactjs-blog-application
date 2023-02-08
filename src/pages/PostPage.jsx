import React from "react";
import { useParams, Link } from "react-router-dom";

function OnePostPage({ posts, handleDelete }) {
  //useParams() is using for taking value from router params
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="">
        <article className="m-3 ">
              {post && 
                <>
                  <h2 className="postTitle font-bold capitalize text-2xl">{post.title}</h2>
                  <p className="postDate mt-3">{post.datetime}</p>
                  <p className="postBody mt-5">{post.body}</p>
                  <button className="deletButton bg-red-500 rounded p-2 hover:bg-red-600 mt-5" onClick={()=>handleDelete(id)}>
                    Delete post
                  </button>
                </>
              }
              {!post && 
                <>
                  <h2 className="text-red-500 text-4xl text-center mt-5">Post not found</h2>
                  <p className="text-center">Well, that's dissapointing.</p>
                  <p className="hover:underline text-center mt-5"><Link to='/'>Visit out Homepage</Link></p>
                </>
              }
        </article>
    </main>
  )
}

export default OnePostPage;
