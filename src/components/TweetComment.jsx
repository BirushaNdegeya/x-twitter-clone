import React from 'react';
import { 
   share,
   love,
   retweet,
   reply
} from '../data/ImagesIcons';

const TweetComment = () => {
   return (
      <div className="tweet-actions">
         <div className="tweet-action">
            <i><img src={reply} /></i>
            <p>111K</p>
         </div>
         <div className="tweet-action">
            <i><img src={retweet} /></i>
            <p>12M</p>
         </div>
         <div className="tweet-action">
            <i><img src={love} /></i>
            <p>25M</p>
         </div>
         <div className="tweet-action">
            <i><img src={share} /></i>
            <p>23.5K</p>
         </div>
      </div>
   );
};

export default TweetComment;