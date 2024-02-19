import React from "react";
import { birusha } from "../data/ImagesIcons";

const Home = () => {
   return (
      <React.Fragment>
         <nav>
            <h1>Home</h1>
         </nav>
         <div>
            <img src={birusha} alt="profile photo" style={{ width: 24, height: 24}} />
            <p>What's happening</p>
         </div>
      </React.Fragment>
   );
};

export default Home;