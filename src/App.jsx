import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="">
        <Sidebar />
        <div className="" style={{ marginLeft: "280px" }}>
          <Header />
          <Outlet />
         
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
