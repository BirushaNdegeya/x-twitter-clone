import React from "react";
import {
   timelineProp
} from "../data/ImagesIcons";

const Header = () => {
   return (
      <header className="header">
         <h1 className="page-title">Home</h1>
         <i className="top-tweets">
            <img src={timelineProp} />
         </i>
      </header>
   );
};

export default Header;