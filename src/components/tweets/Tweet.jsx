import React from 'react';
import TweetAvatar from './components/TweetAvatar';
import TweetContent from './components/TweetContent';

const Tweet = ({ userPhoto, nameTwitter, datePost, name, reply, retweet, love, desc, URL }) => {
   return (
      <div className="tweet">
         <TweetAvatar 
            userImage={userPhoto} />
         <TweetContent 
            tweetSrc={URL}
            userMessage={desc}
            userReply={reply}
            userRetweet={retweet}
            userLove={love}
            myUserName={name}
            myUserTwitterName={nameTwitter}
            agoHour={datePost}
         />
      </div>
   );
};

export default Tweet;