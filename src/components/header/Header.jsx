import React from "react";
import PageTitle from "./PageTitle";
import TopTweets from "./TopTweets";

/**
 * Header UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Header = ({ title, imgURL }) => {
   return (
      <header
         className="flex items-center justify-between p-4 top-0 sticky border-b border-[#2F3336] z-[100] bg-black"
      >
         <PageTitle
            title={title}
         />
         <TopTweets
            imgURL={imgURL}
         />
      </header>
   );
};

export default Header;