import React from "react";
import TweetText from "./TweetText";
import TweetImage from "./TweetImage";
import TweetActions from "./TweetActions";
import TweetTitle from "./TweetTitle";

/**
 * Tweet Body UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetBody = ({ linkId, replyText, retweetText, loveText, userTweetText, url, uName, uTwitter, lastHours  }) => {
   return (
      <>
         <TweetTitle 
            userName={uName}
            userTwitter={uTwitter}
            connectedHours={lastHours}
            linkId={linkId}
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
      </>
   );
};

export default TweetBody;