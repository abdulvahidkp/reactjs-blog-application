import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Edit({
  posts,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
  handleEditSubmit,
}) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost m-5">
      {post && (
        <>
          <h2 className="text-2xl font-bold">Edit Post</h2>
          {/* here in form we no need to do e.preventDefault(). because, if we give reference function like this onSubmit it will still receive the event . and we will prevent this form from there*/}
          <form
            action=""
            className="newPostForm space-y-2 mt-5"
            onSubmit={e=>e.preventDefault()}
          >
            <div>
              <label htmlFor="title" className="font-semibold">
                Title:
              </label>
              <input
                className="border"
                type="text"
                id="title"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="body" className="font-semibold">
                Post:
              </label>
              <textarea
                className="border"
                id="body"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 p-3 m-3"
              onClick={()=>handleEditSubmit(post.id)}
            >
              submit
            </button>
          </form>
        </>
      )}
      {!post && 
                <>
                  <h2 className="text-red-500 text-4xl text-center mt-5">Post not found</h2>
                  <p className="text-center">Well, that's dissapointing.</p>
                  <p className="hover:underline text-center mt-5"><Link to='/'>Visit out Homepage</Link></p>
                </>
              }
    </main>
  );
}

export default Edit;
