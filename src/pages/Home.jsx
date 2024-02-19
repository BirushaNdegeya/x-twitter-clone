import React from "react";
import Header from "./components/Header";
import CommentTweet from "./components/CommentTweet";


const Home = () => {
   return (
      <div className="timeline">
         <Header />
         <CommentTweet />
      </div>
   );
};

export default Home;