import React from "react";
import TweetBody from "./TweetBody";

const TweetContent = ({ userReply, userRetweet, userLove, userMessage, tweetSrc, myUserName, myUserTwitterName, agoHour}) => {
   return (
      <div className="tweet-content">
         <TweetBody 
            uName={myUserName}
            uTwitter={myUserTwitterName}
            lastHours={agoHour}
            url={tweetSrc}
            userTweetText={userMessage}
            replyText={userReply}
            retweetText={userRetweet}
            loveText={userLove}
         />
      </div>
   );
};

export default TweetContent;