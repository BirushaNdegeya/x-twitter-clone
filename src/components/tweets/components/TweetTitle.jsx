import React from "react";
import { verified } from '../../../data/ImagesIcons';

const TweetTitle = ({ userName, userTwitter, connectedHours}) => {
   return (
      <div className="tweet-title">
         <div>
            <div className="my-flex">
               <p className="tweet-title-author">{userName}</p>
               <i><img src={verified} /></i>
               <p className="tweet-title-details">{userTwitter}</p>
               <p className="tweet-title-details">{connectedHours}</p>
            </div>
         </div>
      </div>
   );
};

export default TweetTitle;