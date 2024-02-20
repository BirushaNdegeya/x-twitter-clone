import React from 'react';
import {
   BsFillPatchCheckFill,
   FaTwitter
} from '../data/ImagesIcons';

const Post = () => {
   return (
      <div className="tweet">
         <div className="tweet-avatar">
            <FaTwitter color="#1D9BF0" size={24} />
         </div>
         <div>
            <div className="my-flex">
               <p className="tweet-title-author">Twitter</p>
               <p><BsFillPatchCheckFill /></p>
               <p className="tweet-title-details">@Twitter</p>
               <p className="tweet-title-details">.Oct 4</p>
            </div>
            <p>Hello everyone this is my first tweet</p>

            {/* comments buttons */}
         </div>
      </div>
   );
};

export default Post;