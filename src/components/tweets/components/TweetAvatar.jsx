import React from "react";
import { Link } from "react-router-dom";

/**
 * Tweet Avatar UI Component
 * @param {object} props
 * @returns {React.JSX.Element} 
 */

const TweetAvatar = ({ userImage, linkId }) => {
   return (
      <Link 
         to={`/profile/${linkId}`} 
         className="tweet-avatar">
            <img src={userImage} />
      </Link>
   );
};

export default TweetAvatar;