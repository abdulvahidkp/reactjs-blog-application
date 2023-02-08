import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="flex flex-col justify-between p-4 leading-normal">
      <Link to={`/post/${post.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p>{post.datetime}</p>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {post.body.length <= 40 ? post.body : `${post.body.slice(0, 40)}... `}
      </p>
    </div>
  );
}

export default Post;
