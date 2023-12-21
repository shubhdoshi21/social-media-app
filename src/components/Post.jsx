import React, { useContext } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdOutlineAddReaction } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card m-5 p-2 text-center" style={{ width: "400px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title} 
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBinFill />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge text-bg-primary m-1"
            style={{ float: "left" }}
          >
            #{tag}
          </span>
        ))}
        <button
          className="btn btn-primary position-relative"
          style={{ float: "right" }}
        >
          <MdOutlineAddReaction />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Post;
