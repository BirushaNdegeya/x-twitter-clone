import React from 'react';
import { 
   FaRegComment, 
   GrUpload,
   FaRegShareSquare,
   FcLike
} from '../data/ImagesIcons';

const TweetComment = () => {
   return (
      <div className="tweet-actions">
         <div className="tweet-action">
            <FaRegComment />
            <p>111K</p>
         </div>
         <div className="tweet-action">
            <FcLike />
            <p>12M</p>
         </div>
         <div className="tweet-action">
            <FaRegShareSquare />
            <p>25M</p>
         </div>
         <div className="tweet-action">
            <GrUpload />
            <p>23.5K</p>
         </div>
      </div>
   );
};

export default TweetComment;