import React from "react";
import TweetText from "./TweetText";
import TweetImage from "./TweetImage";
import TweetActions from "./TweetActions";
import TweetTitle from "./TweetTitle";

const TweetBody = ({ replyText, retweetText, loveText, userTweetText, url, uName, uTwitter, lastHours  }) => {
   return (
      <div className="tweet-body">
         <TweetTitle 
            userName={uName}
            userTwitter={uTwitter}
            connectedHours={lastHours}
         />
         <TweetText 
            tweetText={userTweetText}
         />
         <TweetImage 
            imgURl={url}
         />
         <TweetActions
            replyTxt={replyText}
            retweetTxt={retweetText}
            loveTxt={loveText}
         />
      </div>
   );
};

export default TweetBody;