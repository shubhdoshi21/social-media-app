import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
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
    newPostList = [  action.payload   ,...currentPostList]
  }
  return newPostList;
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "lorem ipsum dolor sit amet, consectetur adipiscing",
    body: "lorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscing",
    reactions: 20,
    userId: "user2004",
    tags: ["lorem", "ipsum", "dolor"],
  },
  {
    id: "2",
    title: " amet, consectetur lorem ipsum dolor sitadipiscing",
    body: "dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorelorem ipsum m ipsum dolor sit amet, consectetur adipiscing",
    reactions: 40,
    userId: "user2112",
    tags: ["inglor", "nsect", "ect"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions,
        userId,
        tags,
      },
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postID },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
