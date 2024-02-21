import React from 'react';
import PostHeader from './posts/PostHeader';
import PostBody from './posts/PostBody';
import PostComment from './posts/PostComment';

const Post = ({ userPhoto, nameTwitter, datePost, name, reply, retweet, love, desc, URL }) => {
   return (
      <div className="tweet">
         <div className="tweet-avatar">
            <i><img src={userPhoto} /></i>
         </div>
         <div className="tweet-content">
            <PostHeader 
               userName={name} 
               userTwitter={nameTwitter} 
               connectedHours={datePost} />
            <PostBody 
               description={desc}
               imgURL={URL}
            />
            <PostComment
               userReply={reply}
               userRetweet={retweet}
               userLove={love}
            />
         </div>
      </div>
   );
};

export default Post;
{/* comments buttons */}