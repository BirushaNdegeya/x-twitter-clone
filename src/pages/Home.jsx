import React from "react";
import { postData } from "../data/PostData";
import Post from "../components/Post";

postData.forEach(item => console.log(item));


const Home = () => {
   return (
      <div className="timeline">
         <Post />
      </div>
   );
};

export default Home;