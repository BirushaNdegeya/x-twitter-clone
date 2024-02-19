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
            <div>
               <img src={birusha} alt="profile photo" style={{ width: 24, height: 24}} />
               <p>What's happening</p>
               <input type="text" />
            </div>
         </div>
      </React.Fragment>
   );
};

export default Header;