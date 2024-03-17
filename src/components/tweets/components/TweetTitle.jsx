import React from "react";
import { verified } from '../../../data/ImagesIcons';
import { Link } from "react-router-dom";

/**
 * Tweet Title UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetTitle = ({ linkId, userName, userTwitter, connectedHours}) => {
   const tweetTitleStyle = {
      textDecoration: 'none', 
      color: '#fff'
   };
   return (
      <Link 
         to={`/profile/${linkId}`} 
         className="tweet-title" 
         style={tweetTitleStyle}>
         <div>
            <div className="my-flex">
               <p className="tweet-title-author">{userName}</p>
               <i><img src={verified} /></i>
               <p className="tweet-title-details">{userTwitter}</p>
               <p className="tweet-title-details">{connectedHours}</p>
            </div>
         </div>
      </Link>
   );
};

export default TweetTitle;