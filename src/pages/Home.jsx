import React from "react";
import Timeline from "../components/Timeline";
import Sidebar from "../components/Sidebar";
import Trends from "../components/Trends";

const Home = () => {
   return (
      <div className="home">
         <Sidebar />
         <Timeline />
         <Trends />
      </div>
   );
};

export default Home;