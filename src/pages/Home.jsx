import React from "react";
import PostComment from "../components/posts/PostComment";
import PostHeader from "../components/posts/PostHeader";
import { postData } from "../data/PostData";
import PostBody from "../components/posts/PostBody";

console.log(postData);

postData.forEach(item => console.log(item));


const Home = () => {
   return (
      <div className="timeline">
         <PostHeader />
         <PostBody />
         <PostComment />
      </div>
   );
};

export default Home;