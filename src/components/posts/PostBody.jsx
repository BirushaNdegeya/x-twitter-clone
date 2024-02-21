import React from "react";

const PostBody = ({ description, imgURL}) => {
   return (
      <div className="tweet-body">
         <div className="tweet-text">
            <p>{description}</p>
         </div>
         <img src={imgURL} className="tweet-image" />
      </div>
   );
};

export default PostBody;