import React from "react";
import { verified } from '../../../data/ImagesIcons';
import { Link } from "react-router-dom";

const TweetTitle = ({ userName, userTwitter, connectedHours}) => {
   const tweetTitleStyle = {
      textDecoration: 'none', 
      color: '#fff'
   };
   return (
      <div to="/profile/info" className="tweet-title" style={tweetTitleStyle}>
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