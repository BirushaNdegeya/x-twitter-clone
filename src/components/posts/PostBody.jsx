import React from "react";
import { imgPost } from '../../data/ImagesIcons';

const PostBody = () => {
   return (
      <div>
         <div className="tweet-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime laboriosam in itaque amet nostrum dolorem, consequatur cupiditate maiores minus facilis eos sed odio tempora nesciunt. Veniam harum blanditiis voluptates!</p>
            <img src={imgPost} alt="un poste de new york times" className="tweet-image" />
         </div>
      </div>
   );
};

export default PostBody;