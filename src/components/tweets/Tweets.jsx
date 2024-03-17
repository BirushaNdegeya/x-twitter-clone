import React from "react";
import Tweet from './Tweet';
import { postData } from '../../data/PostData';

/**
 * Tweets UI Component
 * @returns {React.JSX.Element}
 */

const Tweets = () => {
   return (
      <div className="tweets">
         { 
            postData.map((tweet) => (
               <Tweet
                  key={tweet.id}
                  userPhoto={tweet.logo} 
                  name={tweet.name} 
                  nameTwitter={tweet.twitterName} 
                  datePost={tweet.lastedTime}
                  reply={tweet.likeText}
                  retweet={tweet.commentText}
                  love={tweet.loveText} 
                  desc={tweet.bodyText}
                  URL={tweet?.img}
                  linkId={tweet.id}
               />
            ))
            }
      </div>
   );
};

export default Tweets;
