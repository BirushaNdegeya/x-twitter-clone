import React from 'react';
import { 
   share,
   love,
   retweet,
   reply
} from '../../data/ImagesIcons';


const PostComment = ({ userReply, userLove, userRetweet }) => {
   return (
      <div className="tweet-actions">
         <div className="tweet-action">
            <i><img src={reply} /></i>
            <p>{userReply}</p>
         </div>
         <div className="tweet-action">
            <i><img src={retweet} /></i>
            <p>{userRetweet}</p>
         </div>
         <div className="tweet-action">
            <i><img src={love} /></i>
            <p>{userLove}</p>
         </div>
         <div className="tweet-action">
            <i><img src={share} /></i>
         </div>
      </div>
   );
};

export default PostComment;