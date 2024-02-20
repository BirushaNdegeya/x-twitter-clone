import React from 'react';
import {
   twitter,
   verified
} from '../data/ImagesIcons';
import TweetComment from './TweetComment';

const Post = () => {
   return (
      <div className="tweet">
         <div className="tweet-avatar">
            <i><img src={twitter} /></i>
         </div>
         <div className="tweet-title">
            <div>
               <div className="my-flex">
                  <p className="tweet-title-author">Twitter</p>
                  <i><img src={verified} /></i>
                  <p className="tweet-title-details">@Twitter</p>
                  <p className="tweet-title-details">.Oct 4</p>
               </div>
               <TweetComment />
         </div>
         </div>


         {/* comments buttons */}
       
      </div>
   );
};

export default Post;