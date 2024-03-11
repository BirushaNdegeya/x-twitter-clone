import React from "react";
import Timeline from "../components/Timeline";
import Sidebar from "../components/Sidebar";
import Trends from "../components/Trends";

const Home = () => {
   return (
      <React.Fragment>
         <Sidebar />
         <Timeline />
         <Trends />
      </React.Fragment>
   );
};

export default Home;