import React from 'react';
import TweetAvatar from './components/TweetAvatar';
import TweetContent from './components/TweetContent';

/**
 * Tweet UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Tweet = ({ linkId, userPhoto, nameTwitter, datePost, name, reply, retweet, love, desc, URL }) => {
   return (
      <div className='flex gap-6 p-4 items-start border-b border-[#202327]'>
         <TweetAvatar
            userImage={userPhoto}
            linkId={linkId}
         />
         <TweetContent
            linkId={linkId}
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