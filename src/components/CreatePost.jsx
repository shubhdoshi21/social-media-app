// import React, { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();
  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const userId = userIdElement.current.value;
  // const postTitle = postTitleElement.current.value;
  // const postBody = postBodyElement.current.value;
  // const reactions = reactionsElement.current.value;
  // const tags = tagsElement.current.value.split(" ");

  // userIdElement.current.value = "";
  // postTitleElement.current.value = "";
  // postBodyElement.current.value = "";
  // reactionsElement.current.value = "";
  // tagsElement.current.value = "";

  // fetch("https://dummyjson.com/posts/add", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     title: postTitle,
  //     body: postBody,
  //     reactions,
  //     userId,
  //     tags,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((post) => {
  //     addPost(post);
  //     navigate("/");
  //   });
  // };
  return (
    // <form className="m-5" onSubmit={handleSubmit}>
    <Form className="m-5" method="POST">
      <div className="mx-5 my-3">
        <label htmlFor="userIdElement" className="form-label">
          User ID
        </label>
        <input
          type="number"
          // ref={userIdElement}
          name="userId"
          className="form-control"
          id="userIdElement"
          placeholder="Enter your user ID 1-100"
        />
      </div>
      <div className="mx-5 my-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          // ref={postTitleElement}
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeing today.. !?"
        />
      </div>
      <div className="mx-5 my-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          // ref={postBodyElement}
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it.. !"
          rows={4}
        />
      </div>
      <div className="mx-5 my-3">
        <label htmlFor="reactionsElement" className="form-label">
          Number of reactions
        </label>
        <input
          type="number"
          // ref={reactionsElement}
          name="reactions"
          className="form-control"
          id="reactionsElement"
          placeholder="How many people reacted to this post..?"
        />
      </div>
      <div className="mx-5 my-3">
        <label htmlFor="tagsElement" className="form-label">
          Tags
        </label>
        <input
          type="text"
          // ref={tagsElement}
          name="tags"
          className="form-control"
          id="tagsElement"
          placeholder="Enter your #s (using space) here.."
        />
      </div>
      <button type="submit" className="btn btn-primary mx-5 my-3">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
export default CreatePost;
