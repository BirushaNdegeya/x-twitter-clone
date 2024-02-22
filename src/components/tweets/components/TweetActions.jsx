import React from "react";
import { 
   share,
   love,
   retweet,
   reply
} from '../../../data/ImagesIcons';
import TweetAction from "./TweetAction";

const TweetActions = ({ replyTxt, retweetTxt, loveTxt}) => {
   return (
      <div className="tweet-actions">
         <TweetAction icon={reply} text={replyTxt} />
         <TweetAction icon={retweet} text={retweetTxt} />
         <TweetAction icon={love} text={loveTxt} />
         <TweetAction icon={share} />
      </div>
   );
};

export default TweetActions;