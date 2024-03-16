import React from "react";
import Header from './header/Header';
import TweetEditor from "./TweetEditor/TweetEditor";
import Tweets from "./tweets/Tweets";

const Timeline = () => {
   
   return (
      <div className="timeline">
         <Header />
         <TweetEditor />
         <Tweets />
      </div>
   );
};

export default Timeline;