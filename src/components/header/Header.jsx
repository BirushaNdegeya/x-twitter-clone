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
      <header className="flex items-center justify-between text-white p-4 border-b border-[#2F3336]">
         <PageTitle 
            title={title} />
         <TopTweets 
            imgURL={imgURL} />
      </header>
   );
};

export default Header;