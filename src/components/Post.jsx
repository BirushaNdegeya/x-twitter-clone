import React from 'react';
import PostHeader from './posts/PostHeader';
import {
   twitterLogo,
} from '../data/ImagesIcons';
import PostBody from './posts/PostBody';
import PostComment from './posts/PostComment';

const Post = () => {
   return (
      <div className="tweet">
         <div className="tweet-avatar">
            <i><img src={twitterLogo} /></i>
         </div>
         <div className="tweet-content">
            <PostHeader />
            <PostBody />
            <PostComment />
         </div>
      </div>
   );
};

export default Post;
{/* comments buttons */}