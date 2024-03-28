import React from "react";
import TweetBody from "./TweetBody";

/**
 * Tweet Content UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetContent = ({ linkId, userReply, userRetweet, userLove, userMessage, tweetSrc, myUserName, myUserTwitterName, agoHour}) => {
   return (
      <div>
         <TweetBody 
            linkId={linkId}
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