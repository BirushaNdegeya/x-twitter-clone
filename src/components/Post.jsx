import React from 'react';
import {
   twitterLogo,
} from '../data/ImagesIcons';

import TweetComment from './posts/PostComment';

const Post = () => {
   return (
      <div className="tweet">
         <div className="tweet-avatar">
            <i><img src={twitterLogo} /></i>
         </div>
      </div>
   );
};

export default Post;
{/* comments buttons */}