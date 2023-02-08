import React from "react";

function NewPost({ newTitle, setNewTitle, newBody, setNewBody, handleSubmit }) {
  return (
    <main className="NewPost m-5">
      <h2 className="text-2xl font-bold">New Post</h2>
      {/* here in form we no need to do e.preventDefault(). because, if we give reference function like this onSubmit it will still receive the event . and we will prevent this form from there*/}
      <form action="" className="newPostForm space-y-2 mt-5" onSubmit={handleSubmit}>
        <div>

        <label htmlFor="title" className="font-semibold">Title:</label>
        <input
          className="border"
          type="text"
          id="title"
          required
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        </div>
        <div className="">

        <label htmlFor="body" className="font-semibold">Post:</label>
        <textarea
          className="border"
          id="body"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          required
        />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-3 m-3">submit</button>
      </form>
    </main>
  );
}

export default NewPost;
