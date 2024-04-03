import React from "react";
import Header from './header/Header';
import TweetEditor from "./TweetEditor/TweetEditor";
import Tweets from "./tweets/Tweets";
import {
   timelineProp,
} from "../data/ImagesIcons";
import { TweetPostProvider } from "../providers/TweetPostProvider";

/**
 * Timeline UI Component
 * @returns {React.JSX.Element}
 */

const Timeline = () => {
   return (
      <div className="main-container border-x border-[#202327]">
         <Header
            title='Home'
            imgURL={timelineProp}
         />
         <TweetPostProvider>
            <TweetEditor />
            <Tweets />
         </TweetPostProvider>
      </div>
   );
};

export default Timeline;