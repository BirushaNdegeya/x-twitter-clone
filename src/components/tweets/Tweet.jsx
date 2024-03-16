import React from 'react';
import TweetAvatar from './components/TweetAvatar';
import TweetContent from './components/TweetContent';
import { Link } from 'react-router-dom';


const Tweet = ({ userPhoto, nameTwitter, datePost, name, reply, retweet, love, desc, URL, profileDetails }) => {
   const tweetStyle = {
      textDecoration: 'none',
      color: '#fff',
   }
   return (
      <Link to={`/profile/${profileDetails}`} className="tweet" style={tweetStyle}>
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
      </Link>
   );
};

export default Tweet;