import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
// import { PostList as PostListData } from "../store/post-list-store";
// import Loader from "./Loader";

const PostList = () => {
  // const { postList } = useContext(PostListData);
  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <Loader />} */}
      {/* {postList.length === 0 && !fetching && ( */}
      {postList.length === 0 && (
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
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
