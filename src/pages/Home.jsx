import React from "react";
import Header from '../components/Header';
import PublishPost from '../components/PublishPost';
import Post from "../components/Post";
import { postData } from "../data/PostData";

postData.forEach(item => console.log(item));


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