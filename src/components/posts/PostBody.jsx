import React from "react";
import { imgPost } from '../../data/ImagesIcons';

const PostBody = () => {
   return (
      <div className="tweet-body">
         <div className="tweet-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime laboriosam in itaque amet nostrum dolorem, consequatur cupiditate maiores minus facilis eos sed odio tempora nesciunt. Veniam harum blanditiis voluptates!</p>
         </div>
         <img src={imgPost} alt="un poste de new york times" className="tweet-image" />
      </div>
   );
};

export default PostBody;