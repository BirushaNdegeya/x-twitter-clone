import React from "react";

const TweetAvatar = ({ userImage }) => {
   return (
      <div className="tweet-avatar">
         <img src={userImage} />
      </div>
   );
};

export default TweetAvatar;