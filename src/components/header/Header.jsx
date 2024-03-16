import React from "react";
import PageTitle from "./PageTitle";
import TopTweets from "./TopTweets";

/**
 * Header UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Header = ({ title, imgURL}) => {
   return (
      <header className="header">
         <PageTitle 
            title={title} />
         <TopTweets 
            imgURL={imgURL} />
      </header>
   );
};

export default Header;