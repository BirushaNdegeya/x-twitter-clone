import React, { useEffect } from 'react';
import TweetAvatar from './components/TweetAvatar';
import TweetContent from './components/TweetContent';

/**
 * Tweet UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */


const Tweet = ({tweetsDB}) => {   
   return (
      <div className='flex gap-6 p-4 items-start border-b border-[#202327]'>
         <TweetAvatar
            userImage={tweetsDB.avatar}
         />
         <TweetContent
            tweetSrc={tweetsDB.image}
            userMessage={tweetsDB.text}
            userReply={tweetsDB.reply}
            userRetweet={tweetsDB.retweet}
            userLove={tweetsDB.react}
            myUserName={tweetsDB.author}
            myUserTwitterName={tweetsDB.nickname}
            agoHour={tweetsDB.time}
         />
      </div>
   );
};

export default Tweet;