import React from "react";
import { Link } from "react-router-dom";

const TweetAvatar = ({ userImage }) => {
   return (
      <div to="/profile/info" className="tweet-avatar">
         <img src={userImage} />
      </div>
   );
};

export default TweetAvatar;