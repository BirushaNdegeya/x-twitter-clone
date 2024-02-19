import React from "react";
import { FaTwitter } from '../../data/ImagesIcons';

const CommentTweet = () => {
   return (
      <div className="tweet">
         <FaTwitter color="#1D9BF0" size={24} />
         <h1>This is a comment tweet</h1>
      </div>
   );
};

export default CommentTweet;