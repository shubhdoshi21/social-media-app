import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Loader from "./Loader";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <Loader />}
      {postList.length === 0 && !fetching && (
        <center className="m-5">
          <h4 className="">There are no posts yet...!!!</h4>
        </center>
      )}
      <div className=" d-flex flex-wrap justify-content-evenly">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
