import React from "react";
import { 
   FaTwitter, 
   BsFillPatchCheckFill,
   FaRegComment,
   FcLikePlaceholder,
   GrUpload
} from '../../data/ImagesIcons';

const CommentTweet = () => {
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
            <div className="tweet-actions">
               <div className="tweet-action">
                  <FaRegComment />
               </div>
               <div className="tweet-action">
                  <FaRegComment />
               </div>
               <div className="tweet-action">
                  <FaRegComment />
               </div>
               <div className="tweet-action">
                  <FaRegComment />
               </div>

            </div>
            {/* <div className="tweet-title-details" style={{ display: 'flex'}}> */}
            </div>
            {/* <h1>This is a comment tweet</h1>
            <FcLikePlaceholder color="white" />
            <GrUpload /> */}
         {/* </div> */}
      </div>
   );
};

export default CommentTweet;