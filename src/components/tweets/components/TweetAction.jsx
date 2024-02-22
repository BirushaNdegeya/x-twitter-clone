import React from "react";

const TweetAction = ( { icon, text }) => {
   return (
      <div className="tweet-action">
         <i><img src={icon} /></i>
         <p>{text}</p>
      </div>
   );
};

export default TweetAction;