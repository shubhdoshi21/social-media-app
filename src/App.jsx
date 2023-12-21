import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <PostListProvider>
      <div className="">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="" style={{ marginLeft: "280px" }}>
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider> 
  );
}

export default App;
