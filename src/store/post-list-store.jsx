import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "lorem ipsum dolor sit amet, consectetur adipiscing",
//     body: "lorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscing",
//     reactions: 20,
//     userId: "user2004",
//     tags: ["lorem", "ipsum", "dolor"],
//   },
//   {
//     id: "2",
//     title: " amet, consectetur lorem ipsum dolor sitadipiscing",
//     body: "dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorelorem ipsum m ipsum dolor sit amet, consectetur adipiscing",
//     reactions: 40,
//     userId: "user2112",
//     tags: ["inglor", "nsect", "ect"],
//   },
// ];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postID },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    //cleanup function of useEffect()
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        fetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
