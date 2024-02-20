import React from "react";
import Post from "../components/Post";
import Header from '../components/Header';

const Home = () => {
   return (
      <div className="timeline">
         <Header />
         <Post />
      </div>
   );
};

export default Home;