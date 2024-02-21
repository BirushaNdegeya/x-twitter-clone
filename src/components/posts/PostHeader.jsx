import React from "react";
import { verified } from '../../data/ImagesIcons';

const PostHeader = () => {
   return (
      <div className="tweet-title">
         <div>
            <div className="my-flex">
               <p className="tweet-title-author">Twitter</p>
               <i><img src={verified} /></i>
               <p className="tweet-title-details">@Twitter</p>
               <p className="tweet-title-details">.Oct 4</p>
            </div>
         </div>
      </div>
   );
};

export default PostHeader;