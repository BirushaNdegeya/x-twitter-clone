import React from 'react';
import { 
   share,
   love,
   retweet,
   reply
} from '../../data/ImagesIcons';

const PostComment = () => {
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
         </div>
      </div>
   );
};

export default PostComment;