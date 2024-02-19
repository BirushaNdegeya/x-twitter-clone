import React from "react";
import { birusha, FaWandMagicSparkles } from "../../data/ImagesIcons";

const Header = () => {
   return (
      <React.Fragment>
         <header className="header">
            <h1 className="page-title">Home</h1>
            <FaWandMagicSparkles className="top-tweets" />
         </header>
         <div className="tweet-editor">
            <div className="avatar">
               <img src={birusha} alt="profile photo" />
            </div>
            <p>What's happening</p>
            <input type="text" />
         </div>
      </React.Fragment>
   );
};

export default Header;