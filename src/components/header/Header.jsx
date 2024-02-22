import React from "react";
import PageTitle from "./PageTitle";
import TopTweets from "./TopTweets";
import {
   timelineProp,
} from "../../data/ImagesIcons";

const Header = () => {
   return (
      <header className="header">
         <PageTitle title={"Home"} />
         <TopTweets imgURL={timelineProp} />
      </header>
   );
};

export default Header;