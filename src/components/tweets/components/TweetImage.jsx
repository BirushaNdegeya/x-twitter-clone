import React from "react";

const TweetImage = ({ imgURl }) => {
   return (
      <img src={imgURl} className="tweet-image" />
   );
};

export default TweetImage;