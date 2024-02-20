import React from "react";
import Post from "../components/Post";
import Header from '../components/Header';
import PublishPost from "../components/PublishPost";

const Home = () => {
   return (
      <div className="timeline">
         <Header />
         <PublishPost />
         <Post />
      </div>
   );
};

export default Home;